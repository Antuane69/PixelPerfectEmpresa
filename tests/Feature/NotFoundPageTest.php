<?php

namespace Tests\Feature;

use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class NotFoundPageTest extends TestCase
{
    public function test_it_renders_the_custom_inertia_page_for_an_unknown_url(): void
    {
        $response = $this->get('/esta-ruta-no-existe');

        $response->assertNotFound();
        $response->assertInertia(
            fn (Assert $page) => $page->component('errors/404'),
        );
    }
}
