import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

describe('restaurant stylesheet loading', () => {
    it('does not wait on an external font stylesheet before applying styles', () => {
        const stylesheet = readFileSync(
            new URL('./restaurant.css', import.meta.url),
            'utf8',
        );

        expect(stylesheet).not.toMatch(/@import\s+(?:url\()?['"]?https?:\/\//);
    });
});
