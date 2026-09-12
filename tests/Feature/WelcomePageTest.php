<?php

namespace Tests\Feature;

use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class WelcomePageTest extends TestCase
{
    public function test_it_displays_the_welcome_page_with_the_companies_section(): void
    {
        $response = $this->get(route('home'));

        $response->assertInertia(
            fn (Assert $page) => $page->component('welcome'),
        );
    }
}
