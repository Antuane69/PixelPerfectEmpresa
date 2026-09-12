<?php

namespace Tests\Feature;

use DOMDocument;
use DOMXPath;
use Inertia\Inertia;
use PHPUnit\Framework\Attributes\TestWith;
use Tests\TestCase;

class SeoTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();

        Inertia::disableSsr();
    }

    #[TestWith(['/', 'Diseño de páginas web y software a la medida en México'])]
    #[TestWith(['/pixel-perfect-empresarial', 'Sistema de gestión y administración de empresas'])]
    #[TestWith(['/plantillas', 'Plantillas web rápidas y accesibles para negocios'])]
    public function test_public_pages_expose_unique_seo_in_initial_html_without_javascript(string $path, string $title): void
    {
        $response = $this->get($path.'?utm_source=search');

        $response->assertSee('<title>'.$title.' - PixelPerfect</title>', false)
            ->assertSee('lang="es-MX"', false)
            ->assertSee('href="https://pixelperfectmx.com'.$path.'"', false);

        $document = new DOMDocument;
        @$document->loadHTML('<?xml encoding="UTF-8">'.$response->getContent());
        $xpath = new DOMXPath($document);

        $this->assertSame(1, $xpath->query('//head/title')->length);
        $this->assertSame(1, $xpath->query('//head/link[@rel="canonical"]')->length);
        $this->assertSame(1, $xpath->query('//head/meta[@name="description"]')->length);
        $this->assertSame('https://pixelperfectmx.com'.$path, $xpath->evaluate('string(//head/meta[@property="og:url"]/@content)'));
        $this->assertStringContainsString('todo México', $xpath->evaluate('string(//head/meta[@name="description"]/@content)'));

        $schema = json_decode($xpath->evaluate('string(//head/script[@type="application/ld+json"])'), true, flags: JSON_THROW_ON_ERROR);

        $this->assertSame('https://schema.org', $schema['@context']);
        $this->assertSame(['Organization', 'WebSite', 'WebPage', 'Service'], array_column($schema['@graph'], '@type'));
        $this->assertSame('https://pixelperfectmx.com'.$path, $schema['@graph'][2]['url']);
        $expectedAreas = [
            ['@type' => 'Country', 'name' => 'México'],
            ['@type' => 'City', 'name' => 'Guadalajara'],
            ['@type' => 'City', 'name' => 'Puerto Vallarta'],
        ];

        $this->assertSame($expectedAreas, $schema['@graph'][0]['areaServed']);
        $this->assertSame($expectedAreas, $schema['@graph'][3]['areaServed']);
    }

    #[TestWith(['/', 'welcome', 'Diseño de páginas web y software a la medida en México'])]
    #[TestWith(['/pixel-perfect-empresarial', 'empresarial', 'Sistema de gestión y administración de empresas'])]
    #[TestWith(['/plantillas', 'templates', 'Plantillas web rápidas y accesibles para negocios'])]
    public function test_inertia_navigation_receives_the_destination_metadata(string $path, string $component, string $title): void
    {
        $initialPage = $this->get('/')->viewData('page');

        $this->get($path.'?utm_source=search', [
            'X-Inertia' => 'true',
            'X-Inertia-Version' => $initialPage['version'],
        ])
            ->assertHeader('X-Inertia', 'true')
            ->assertJsonPath('component', $component)
            ->assertJsonPath('props.seo.title', $title)
            ->assertJsonPath('props.seo.canonical', 'https://pixelperfectmx.com'.$path)
            ->assertJsonPath('props.seo.meta.robots', 'index, follow, max-image-preview:large')
            ->assertJsonPath('props.seo.meta.og:url', 'https://pixelperfectmx.com'.$path);
    }

    public function test_sitemap_contains_only_canonical_public_pages(): void
    {
        $response = $this->get('/sitemap.xml');

        $response->assertHeader('Content-Type', 'application/xml; charset=UTF-8');

        $document = new DOMDocument;
        $this->assertTrue($document->loadXML($response->getContent()));
        $urls = array_map(fn ($node): string => $node->textContent, iterator_to_array($document->getElementsByTagName('loc')));

        $this->assertSame([
            'https://pixelperfectmx.com/',
            'https://pixelperfectmx.com/pixel-perfect-empresarial',
            'https://pixelperfectmx.com/plantillas',
        ], $urls);
    }

    public function test_missing_pages_do_not_receive_public_service_metadata(): void
    {
        $this->get('/missing-page')->assertNotFound()
            ->assertDontSee('rel="canonical"', false)
            ->assertDontSee('application/ld+json', false);
    }

    public function test_robots_file_advertises_the_public_sitemap_without_blocking_assets(): void
    {
        $robots = file_get_contents(public_path('robots.txt'));

        $this->assertStringContainsString('Sitemap: https://pixelperfectmx.com/sitemap.xml', $robots);
        $this->assertDoesNotMatchRegularExpression('/Disallow:\s*\/\S*/', $robots);
    }
}
