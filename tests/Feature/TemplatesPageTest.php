<?php

namespace Tests\Feature;

use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class TemplatesPageTest extends TestCase
{
    public function test_templates_page_displays_the_available_business_templates(): void
    {
        $response = $this->get(route('templates'));

        $response->assertInertia(
            fn (Assert $page) => $page->component('templates'),
        );
    }
}
