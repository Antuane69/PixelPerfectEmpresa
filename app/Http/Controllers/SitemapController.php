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
        $urls = array_map(
            fn (string $routeName): string => $seo->url($routeName),
            array_keys(config('seo.pages')),
        );

        return response()->view('sitemap', ['urls' => $urls], 200, [
            'Content-Type' => 'application/xml; charset=UTF-8',
        ]);
    }
}
