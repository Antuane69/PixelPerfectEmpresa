import { Carousel, Image } from 'antd';
import { Maximize2 } from 'lucide-react';
import { ProjectCover } from '@/components/project-cover';
import type { PortfolioProject } from '@/lib/portfolio';

export function ProjectGallery({ project }: { project: PortfolioProject }) {
    if (!project.images?.length) {
        return (
            <div className="pp-project-gallery pp-project-gallery-placeholder">
                <ProjectCover project={project} />
            </div>
        );
    }

    const hasMultipleImages = project.images.length > 1;

    return (
        <div
            className="pp-project-gallery"
            role="region"
            aria-label={`Galería de ${project.subtitle.split(' · ')[0]}`}
        >
            <Carousel
                arrows={hasMultipleImages}
                autoplay={hasMultipleImages ? { dotDuration: true } : false}
                autoplaySpeed={4500}
                dots={hasMultipleImages}
                draggable={hasMultipleImages}
                infinite={hasMultipleImages}
                pauseOnHover
                speed={600}
            >
                {project.images.map((image, index) => (
                    <div className="pp-project-gallery-slide" key={image}>
                        <Image
                            rootClassName="pp-project-gallery-image"
                            src={image}
                            alt={`Captura ${index + 1} de ${project.subtitle}`}
                            loading="lazy"
                            preview={{
                                mask: (
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
        </div>
    );
}
