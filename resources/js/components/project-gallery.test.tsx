import type { ReactElement, ReactNode } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ProjectGallery } from '@/components/project-gallery';
import type { PortfolioProject } from '@/lib/portfolio';

const carouselState = vi.hoisted(() => ({
    props: null as Record<string, unknown> | null,
    previewProps: null as Record<string, unknown> | null,
}));

vi.mock('antd', () => {
    const MockImage = Object.assign(
        ({ src, alt }: { src: string; alt: string }) => (
            <img src={src} alt={alt} />
        ),
        {
            PreviewGroup: ({
                children,
                items,
                preview,
            }: {
                children: ReactNode;
                items: string[];
                preview: Record<string, unknown>;
            }) => {
                carouselState.previewProps = { ...preview, items };

                return <>{children}</>;
            },
        },
    );

    return {
        Carousel: ({
            children,
            nextArrow,
            prevArrow,
            ...props
        }: Record<string, unknown> & {
            children: ReactNode;
            nextArrow?: ReactElement;
            prevArrow?: ReactElement;
        }) => {
            carouselState.props = props;

            return (
                <div>
                    {prevArrow}
                    {children}
                    {nextArrow}
                </div>
            );
        },
        Image: MockImage,
    };
});

const project: PortfolioProject = {
    id: 'sample',
    category: 'Aplicaciones',
    title: 'Proyecto de prueba',
    subtitle: 'Empresa de prueba · Aplicación web',
    description: 'Descripción',
    tags: ['Aplicación web'],
    status: 'Publicado',
    images: ['/images/one.png', '/images/two.png'],
    imageType: 'captura',
    preview: 'hotel',
    note: 'Nota',
};

describe('ProjectGallery', () => {
    afterEach(() => {
        carouselState.props = null;
        carouselState.previewProps = null;
    });

    it('rotates multiple images continuously with accessible controls', () => {
        const markup = renderToStaticMarkup(
            <ProjectGallery project={project} />,
        );

        expect(carouselState.props).toMatchObject({
            arrows: true,
            autoplay: { dotDuration: true },
            infinite: true,
            pauseOnHover: false,
        });
        expect(carouselState.previewProps?.items).toEqual(project.images);
        expect(markup).toContain('aria-label="Imagen anterior"');
        expect(markup).toContain('aria-label="Imagen siguiente"');
    });

    it('does not animate when the project has only one image', () => {
        renderToStaticMarkup(
            <ProjectGallery project={{ ...project, images: ['/one.png'] }} />,
        );

        expect(carouselState.props).toMatchObject({
            arrows: false,
            autoplay: false,
            infinite: false,
        });
    });

    it('reports preview visibility changes to the parent dialog', () => {
        const onPreviewOpenChange = vi.fn();
        renderToStaticMarkup(
            <ProjectGallery
                project={project}
                onPreviewOpenChange={onPreviewOpenChange}
            />,
        );

        const handleOpenChange = carouselState.previewProps?.onOpenChange;

        expect(handleOpenChange).toBe(onPreviewOpenChange);
    });
});
