<?php

namespace App;

class SiteSeo
{
    public function url(string $routeName): string
    {
        return rtrim(config('seo.url'), '/').route($routeName, absolute: false);
    }

    /**
     * @return array{title: string, canonical: string, meta: array<string, string>, structuredData: string}|null
     */
    public function page(?string $routeName): ?array
    {
        if ($routeName === null) {
            return null;
        }

        $isEnglish = str_starts_with($routeName, 'en.');
        $pageName = $isEnglish ? substr($routeName, 3) : $routeName;
        $page = $isEnglish
            ? config('seo.translations.en.pages')[$pageName] ?? null
            : config('seo.pages')[$pageName] ?? null;

        if ($page === null) {
            return null;
        }

        $canonical = $this->url($routeName);
        $home = $this->url($isEnglish ? 'en.home' : 'home');
        $name = config('seo.name');
        $title = $page['title'].' - '.$name;
        $areasServed = [
            ['@type' => 'Country', 'name' => config($isEnglish ? 'seo.translations.en.country' : 'seo.country')],
            ...array_map(
                fn (string $city): array => ['@type' => 'City', 'name' => $city],
                config('seo.cities'),
            ),
        ];

        return [
            'title' => $page['title'],
            'canonical' => $canonical,
            'meta' => [
                'description' => $page['description'],
                'robots' => 'index, follow, max-image-preview:large',
                'og:type' => 'website',
                'og:title' => $title,
                'og:description' => $page['description'],
                'og:url' => $canonical,
                'og:site_name' => $name,
                'og:locale' => $isEnglish ? 'en_US' : 'es_MX',
                'twitter:card' => 'summary',
                'twitter:title' => $title,
                'twitter:description' => $page['description'],
            ],
            'structuredData' => json_encode([
                '@context' => 'https://schema.org',
                '@graph' => [
                    [
                        '@type' => 'Organization',
                        '@id' => $home.'#organization',
                        'name' => $name,
                        'url' => $home,
                        'email' => 'pixelperfect.nacif@gmail.com',
                        'telephone' => '+523221974630',
                        'areaServed' => $areasServed,
                    ],
                    [
                        '@type' => 'WebSite',
                        '@id' => $home.'#website',
                        'name' => $name,
                        'url' => $home,
                        'inLanguage' => $isEnglish ? 'en' : 'es-MX',
                        'publisher' => ['@id' => $home.'#organization'],
                    ],
                    [
                        '@type' => 'WebPage',
                        '@id' => $canonical.'#webpage',
                        'url' => $canonical,
                        'name' => $title,
                        'description' => $page['description'],
                        'inLanguage' => $isEnglish ? 'en' : 'es-MX',
                        'isPartOf' => ['@id' => $home.'#website'],
                        'mainEntity' => ['@id' => $canonical.'#service'],
                    ],
                    [
                        '@type' => 'Service',
                        '@id' => $canonical.'#service',
                        'name' => $page['service'],
                        'serviceType' => $page['service'],
                        'description' => $page['description'],
                        'url' => $canonical,
                        'provider' => ['@id' => $home.'#organization'],
                        'areaServed' => $areasServed,
                    ],
                ],
            ], JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR),
        ];
    }
}
