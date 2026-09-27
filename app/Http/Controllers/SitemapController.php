<?php

namespace App\Http\Controllers;

use App\SiteSeo;
use Illuminate\Http\Response;

class SitemapController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(SiteSeo $seo): Response
    {
        $spanishRouteNames = array_keys(config('seo.pages'));
        $routeNames = [
            ...$spanishRouteNames,
            ...array_map(fn (string $routeName): string => 'en.'.$routeName, $spanishRouteNames),
        ];
        $urls = array_map(
            fn (string $routeName): string => $seo->url($routeName),
            $routeNames,
        );

        return response()->view('sitemap', ['urls' => $urls], 200, [
            'Content-Type' => 'application/xml; charset=UTF-8',
        ]);
    }
}
