<?php

namespace Tests\Feature;

use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class EmpresarialPageTest extends TestCase
{
    public function test_it_displays_the_pixel_perfect_empresarial_page(): void
    {
        $response = $this->get(route('empresarial'));

        $response->assertInertia(
            fn (Assert $page) => $page->component('empresarial'),
        );
    }
}
