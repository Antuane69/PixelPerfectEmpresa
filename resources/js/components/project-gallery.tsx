import { Carousel, Image } from 'antd';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import type { CSSProperties, MouseEventHandler } from 'react';
import { ProjectCover } from '@/components/project-cover';
import type { PortfolioProject } from '@/lib/portfolio';

type ProjectGalleryArrowProps = {
    direction: 'previous' | 'next';
    className?: string;
    style?: CSSProperties;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

function ProjectGalleryArrow({
    direction,
    className,
    style,
    onClick,
}: ProjectGalleryArrowProps) {
    const Icon = direction === 'previous' ? ChevronLeft : ChevronRight;

    return (
        <button
            type="button"
            className={className}
            style={style}
            onClick={onClick}
            aria-label={
                direction === 'previous'
                    ? 'Imagen anterior'
                    : 'Imagen siguiente'
            }
        >
            <Icon size={21} strokeWidth={2.25} aria-hidden="true" />
        </button>
    );
}

export function ProjectGallery({
    project,
    onPreviewOpenChange,
}: {
    project: PortfolioProject;
    onPreviewOpenChange?: (open: boolean) => void;
}) {
    if (!project.images?.length) {
        return (
            <div className="pp-project-gallery pp-project-gallery-placeholder">
                <ProjectCover project={project} />
            </div>
        );
    }

    const hasMultipleImages = project.images.length > 1;
    const firstImageLabel =
        project.imageType.charAt(0).toUpperCase() + project.imageType.slice(1);

    return (
        <div
            className="pp-project-gallery"
            role="region"
            aria-label={`Galería de ${project.subtitle.split(' · ')[0]}`}
        >
            <Image.PreviewGroup
                items={project.images}
                classNames={{
                    popup: {
                        root: 'pp-image-preview-root',
                    },
                }}
                preview={{
                    focusTrap: false,
                    getContainer: () => document.body,
                    onOpenChange: onPreviewOpenChange,
                    zIndex: 2000,
                }}
            >
                <Carousel
                    arrows={hasMultipleImages}
                    autoplay={hasMultipleImages ? { dotDuration: true } : false}
                    autoplaySpeed={4500}
                    dots={hasMultipleImages}
                    draggable={hasMultipleImages}
                    infinite={hasMultipleImages}
                    nextArrow={<ProjectGalleryArrow direction="next" />}
                    pauseOnHover={false}
                    prevArrow={<ProjectGalleryArrow direction="previous" />}
                    speed={600}
                >
                    {project.images.map((image, index) => (
                        <div className="pp-project-gallery-slide" key={image}>
                            <Image
                                rootClassName="pp-project-gallery-image"
                                src={image}
                                alt={`${index === 0 ? firstImageLabel : 'Logo'} ${index + 1} de ${project.subtitle}`}
                                loading="lazy"
                                preview={{
                                    cover: (
                                        <span className="pp-project-gallery-zoom">
                                            <Maximize2
                                                size={18}
                                                aria-hidden="true"
                                            />
                                            Ver en grande
                                        </span>
                                    ),
                                }}
                            />
                        </div>
                    ))}
                </Carousel>
            </Image.PreviewGroup>
        </div>
    );
}
