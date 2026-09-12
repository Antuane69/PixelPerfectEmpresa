import { Head, usePage } from '@inertiajs/react';

export type PageSeo = {
    title: string;
    canonical: string;
    meta: Record<string, string>;
    structuredData: string;
};

export function SeoHead() {
    const { seo } = usePage<{ seo: PageSeo | null }>().props;

    if (!seo) {
        return null;
    }

    return (
        <Head title={seo.title}>
            <link head-key="canonical" rel="canonical" href={seo.canonical} />
            {Object.entries(seo.meta).map(([key, content]) => (
                <meta
                    key={key}
                    head-key={key}
                    {...(key.startsWith('og:')
                        ? { property: key }
                        : { name: key })}
                    content={content}
                />
            ))}
            <script
                head-key="structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: seo.structuredData }}
            />
        </Head>
    );
}
