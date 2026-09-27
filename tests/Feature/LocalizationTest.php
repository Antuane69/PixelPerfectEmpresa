<?php

namespace Tests\Feature;

use Inertia\Testing\AssertableInertia as Assert;
use PHPUnit\Framework\Attributes\TestWith;
use Tests\TestCase;

class LocalizationTest extends TestCase
{
    #[TestWith(['/', 'welcome', 'es', null])]
    #[TestWith(['/en', 'welcome', 'en', null])]
    #[TestWith(['/pixel-perfect-empresarial', 'empresarial', 'es', null])]
    #[TestWith(['/en/pixel-perfect-empresarial', 'empresarial', 'en', null])]
    #[TestWith(['/plantillas', 'templates', 'es', null])]
    #[TestWith(['/en/plantillas', 'templates', 'en', null])]
    #[TestWith(['/demos/restaurante', 'restaurant', 'es', 'home'])]
    #[TestWith(['/en/demos/restaurante', 'restaurant', 'en', 'home'])]
    #[TestWith(['/demos/restaurante/menu', 'restaurant', 'es', 'menu'])]
    #[TestWith(['/en/demos/restaurante/menu', 'restaurant', 'en', 'menu'])]
    #[TestWith(['/demos/restaurante/galeria', 'restaurant', 'es', 'gallery'])]
    #[TestWith(['/en/demos/restaurante/galeria', 'restaurant', 'en', 'gallery'])]
    public function test_marketing_pages_follow_the_locale_in_the_url(
        string $path,
        string $component,
        string $locale,
        ?string $view,
    ): void {
        $response = $this->get($path);

        $response->assertInertia(function (Assert $page) use ($component, $locale, $view): void {
            $page
                ->component($component)
                ->where('locale', $locale);

            if ($view !== null) {
                $page->where('view', $view);
            }
        });
    }

    public function test_the_document_language_matches_the_selected_locale(): void
    {
        $this->get('/en')->assertSee('<html lang="en"', false);
        $this->get('/en/demos/restaurante/menu')->assertSee('<html lang="en"', false);
        $this->get('/')->assertSee('<html lang="es-MX"', false);
        $this->get('/demos/restaurante/menu')->assertSee('<html lang="es"', false);
    }
}
