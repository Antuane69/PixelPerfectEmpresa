import { renderToStaticMarkup } from 'react-dom/server';
import { Link } from '@inertiajs/react';
import { describe, expect, it } from 'vitest';
import {
    LocalizedContent,
    localizeUrl,
    translateText,
} from '@/lib/localization';
import { empresarial } from '@/routes';
import { home as restaurantHome } from '@/routes/restaurant';

describe('localization', () => {
    it('translates visible text and accessible labels to English', () => {
        const markup = renderToStaticMarkup(
            <LocalizedContent locale="en">
                <button aria-label="Pedir para llevar">
                    Ver menú completo
                </button>
            </LocalizedContent>,
        );

        expect(markup).toContain('aria-label="Order for takeout"');
        expect(markup).toContain('View the full menu');
    });

    it('preserves Spanish copy for the unprefixed site', () => {
        expect(translateText('Ver menú completo', 'es')).toBe(
            'Ver menú completo',
        );
    });

    it('prefixes internal links but keeps same-page anchors in place', () => {
        const markup = renderToStaticMarkup(
            <LocalizedContent locale="en">
                <>
                    <a href="/plantillas">Plantillas</a>
                    <a href="#contacto">Contacto</a>
                </>
            </LocalizedContent>,
        );

        expect(markup).toContain('href="/en/plantillas"');
        expect(markup).toContain('>Templates</a>');
        expect(markup).toContain('href="#contacto"');
        expect(markup).toContain('>Contact</a>');
    });

    it('localizes Wayfinder links for the selected language', () => {
        const englishMarkup = renderToStaticMarkup(
            <LocalizedContent locale="en">
                <>
                    <Link href={empresarial()}>Empresarial</Link>
                    <Link href={restaurantHome()}>Restaurante</Link>
                </>
            </LocalizedContent>,
        );
        const spanishMarkup = renderToStaticMarkup(
            <LocalizedContent locale="es">
                <>
                    <Link href={empresarial()}>Empresarial</Link>
                    <Link href={restaurantHome()}>Restaurante</Link>
                </>
            </LocalizedContent>,
        );

        expect(englishMarkup).toContain('href="/en/pixel-perfect-empresarial"');
        expect(englishMarkup).toContain('href="/en/demos/restaurante"');
        expect(spanishMarkup).toContain('href="/pixel-perfect-empresarial"');
        expect(spanishMarkup).toContain('href="/demos/restaurante"');
    });

    it('adds or removes the English URL prefix while keeping query and hash', () => {
        expect(localizeUrl('/plantillas?ref=header#contacto', 'en')).toBe(
            '/en/plantillas?ref=header#contacto',
        );
        expect(localizeUrl('/en/plantillas?ref=header#contacto', 'es')).toBe(
            '/plantillas?ref=header#contacto',
        );
        expect(localizeUrl('/en', 'es')).toBe('/');
    });
});
