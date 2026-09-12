<?php

namespace Tests\Feature;

use Inertia\Testing\AssertableInertia as Assert;
use PHPUnit\Framework\Attributes\TestWith;
use Tests\TestCase;

class RestaurantDemoPageTest extends TestCase
{
    #[TestWith(['restaurant.home', 'home'])]
    #[TestWith(['restaurant.menu', 'menu'])]
    #[TestWith(['restaurant.gallery', 'gallery'])]
    public function test_restaurant_demo_pages_render_inside_the_demo_prefix(string $routeName, string $view): void
    {
        $response = $this->get(route($routeName));

        $response->assertInertia(
            fn (Assert $page) => $page
                ->component('restaurant')
                ->where('view', $view),
        );
    }
}
