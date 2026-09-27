<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SetLocaleFromPath
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $routeName = $request->route()?->getName();
        $isMarketingPage = in_array($routeName, [
            'home',
            'empresarial',
            'templates',
            'restaurant.home',
            'restaurant.menu',
            'restaurant.gallery',
        ], true);

        $locale = $request->segment(1) === 'en' || str_starts_with($routeName ?? '', 'en.')
            ? 'en'
            : ($isMarketingPage ? 'es' : config('app.locale'));

        app()->setLocale($locale);

        return $next($request);
    }
}
