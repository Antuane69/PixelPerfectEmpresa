import { ArrowUpRight, ChartNoAxesCombined, LockKeyhole } from 'lucide-react';
import { useState } from 'react';
import { PortfolioPreview } from '@/components/portfolio-preview';
import type { PortfolioProject } from '@/lib/portfolio';

export function ProjectCover({ project }: { project: PortfolioProject }) {
    const [imageFailed, setImageFailed] = useState(false);

    if (project.image && !imageFailed) {
        return (
            <img
                className="pp-project-image"
                src={project.image}
                alt={`Captura de ${project.subtitle}`}
                loading="lazy"
                width={1280}
                height={720}
                onError={() => setImageFailed(true)}
            />
        );
    }

    if (project.preview === 'brand') {
        return <PortfolioPreview variant="brand" />;
    }

    return (
        <div className={`pp-private-cover pp-private-${project.preview}`}>
            <span className="pp-private-status">{project.status}</span>
            {project.preview === 'sports' ? (
                <ChartNoAxesCombined size={35} aria-hidden="true" />
            ) : (
                <LockKeyhole size={30} aria-hidden="true" />
            )}
            <strong>{project.subtitle.split(' · ')[0]}</strong>
            <span>{project.subtitle.split(' · ')[1]}</span>
            <div className="pp-private-caption">
                Capturas próximamente{' '}
                <ArrowUpRight size={17} aria-hidden="true" />
            </div>
        </div>
    );
}
