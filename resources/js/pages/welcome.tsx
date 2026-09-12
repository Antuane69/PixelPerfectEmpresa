import { Head, Link } from '@inertiajs/react';
import {
    ArrowRight,
    ArrowUpRight,
    BarChart3,
    Blocks,
    CalendarCheck2,
    ChevronLeft,
    ChevronRight,
    Check,
    Code2,
    FileSignature,
    Mail,
    Menu,
    MessageCircle,
    Palette,
    Pause,
    Play,
    Sparkles,
    X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { PortfolioPreview } from '@/components/portfolio-preview';
import { ProjectCover } from '@/components/project-cover';
import { ProjectGallery } from '@/components/project-gallery';
import { SiteFooter } from '@/components/site-footer';
import { companies, projects } from '@/lib/portfolio';
import { empresarial } from '@/routes';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import '../../css/welcome.css';

const message =
    'Hola, me gustaría platicar sobre una aplicación para mi negocio.';
const whatsappHref = `https://wa.me/523221974630?text=${encodeURIComponent(message)}`;
const emailHref = `mailto:pixelperfect.nacif@gmail.com?subject=${encodeURIComponent('Tengo un proyecto en mente')}&body=${encodeURIComponent(message)}`;
const navigation = [
    ['Servicios', '#servicios'],
    ['Clientes', '#clientes'],
    ['Pixel Perfect Empresarial', '#pixel-perfect-empresarial'],
];
const services = [
    {
        icon: Code2,
        title: 'Aplicaciones a la medida',
        description:
            'Herramientas que se adaptan a las necesidades de tu negocio; no al revés. Completamente modular, solo obtienes lo que necesitas y puedes escalar a medida que tu negocio crece.',
        detail: 'Páginas web · Para todos los dispositivos',
        color: 'lime',
    },
    {
        icon: Blocks,
        title: 'Información centralizada',
        description:
            'Organiza y automatiza procesos, centraliza tu información, revisa estadísticas clave y reportes a la medida y dale a tu equipo más tiempo para lo que sí importa.',
        detail: 'Gestión · Automatización · Integraciones',
        color: 'purple',
    },
    {
        icon: Palette,
        title: 'Diseño con intención',
        description:
            'Interfaces claras y experiencias que se sienten tan bien como se ven. Con oportunidad de mejorar la percepción de tu marca y la experiencia de tus clientes.',
        detail: 'Diseño enfocado en la experiencia del usuario',
        color: 'peach',
    },
];

function Wordmark() {
    return (
        <span className="pp-wordmark">
            <span>PIXEL</span>
            <em>PERFECT</em>
        </span>
    );
}

function CompaniesCarousel() {
    const [activeCompany, setActiveCompany] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isHovering, setIsHovering] = useState(false);
    const [isProjectDialogOpen, setIsProjectDialogOpen] = useState(false);
    const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false);
    const selectedCompany = companies[activeCompany] ?? companies[0];
    const selectedProject =
        projects.find((project) => project.id === selectedCompany.project) ??
        projects[0];

    const selectCompany = (index: number) => {
        const nextIndex = (index + companies.length) % companies.length;
        setActiveCompany(nextIndex);
    };

    useEffect(() => {
        if (
            !isAutoPlaying ||
            isHovering ||
            companies.length < 2 ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ) {
            return;
        }

        const interval = window.setInterval(() => {
            setActiveCompany(
                (currentCompany) => (currentCompany + 1) % companies.length,
            );
        }, 4500);

        return () => window.clearInterval(interval);
    }, [isAutoPlaying, isHovering]);

    return (
        <Dialog
            open={isProjectDialogOpen}
            onOpenChange={(open) => {
                if (!open && isImagePreviewOpen) {
                    return;
                }

                setIsProjectDialogOpen(open);
            }}
        >
            <div
                className="pp-company-showcase"
                role="region"
                aria-roledescription="carrusel"
                aria-label="Proyectos de empresas que han confiado en PixelPerfect"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <div className="pp-company-feature" aria-live="polite">
                    <div
                        className={`pp-company-screen pp-company-screen-${selectedCompany.tone}`}
                    >
                        <div className="pp-company-screen-head">
                            <div className="pp-company-screen-brand">
                                <span
                                    className={`pp-company-logo pp-company-logo-${selectedCompany.tone}`}
                                    aria-hidden="true"
                                >
                                    <img
                                        src={selectedCompany.logo}
                                        alt=""
                                        loading="lazy"
                                    />
                                </span>
                                <span>
                                    <small>IMAGENES DEL PROYECTO</small>
                                    <strong>{selectedCompany.name}</strong>
                                </span>
                            </div>
                            <span className="pp-company-count">
                                {String(activeCompany + 1).padStart(2, '0')} /{' '}
                                {String(companies.length).padStart(2, '0')}
                            </span>
                        </div>
                        <div className="pp-company-image-frame">
                            <img
                                src={selectedCompany.image}
                                alt={selectedCompany.imageAlt}
                                loading="lazy"
                            />
                            <span>Vista de portafolio</span>
                        </div>
                        <div className="pp-company-screen-meta">
                            <span>{selectedCompany.sector}</span>
                            <span>Diseño y desarrollo a la medida</span>
                        </div>
                    </div>

                    <div className="pp-company-story">
                        {/* <p className="pp-eyebrow">Proyecto seleccionado</p> */}
                        <h3>{selectedCompany.name}</h3>
                        <p>{selectedProject.description}</p>
                        <DialogTrigger asChild>
                            <button
                                type="button"
                                className="pp-button pp-company-story-link"
                                onClick={() => setIsAutoPlaying(false)}
                            >
                                Más información
                                <ArrowUpRight size={17} aria-hidden="true" />
                            </button>
                        </DialogTrigger>
                    </div>
                </div>

                <div
                    className="pp-company-rail"
                    role="listbox"
                    aria-label="Seleccionar empresa"
                >
                    {companies.map((company, index) => (
                        <button
                            key={company.name}
                            type="button"
                            className={`pp-company-rail-card ${index === activeCompany ? 'is-active' : ''}`}
                            role="option"
                            aria-selected={index === activeCompany}
                            onClick={() => selectCompany(index)}
                        >
                            <span
                                className={`pp-company-logo pp-company-logo-${company.tone}`}
                                aria-hidden="true"
                            >
                                <img src={company.logo} alt="" loading="lazy" />
                            </span>
                            <span>
                                <strong>{company.name}</strong>
                                <small>{company.sector}</small>
                            </span>
                            <ArrowUpRight size={16} aria-hidden="true" />
                        </button>
                    ))}
                </div>

                <div
                    className="pp-company-controls"
                    aria-label="Controles del carrusel"
                >
                    <div className="pp-company-arrows">
                        <button
                            type="button"
                            aria-label="Cliente anterior"
                            onClick={() => selectCompany(activeCompany - 1)}
                        >
                            <ChevronLeft size={19} aria-hidden="true" />
                        </button>
                        <button
                            type="button"
                            aria-label="Cliente siguiente"
                            onClick={() => selectCompany(activeCompany + 1)}
                        >
                            <ChevronRight size={19} aria-hidden="true" />
                        </button>
                    </div>
                    <div
                        className="pp-company-dots"
                        aria-label="Seleccionar cliente"
                    >
                        {companies.map((company, index) => (
                            <button
                                key={company.name}
                                type="button"
                                className={
                                    index === activeCompany ? 'is-active' : ''
                                }
                                aria-label={`Mostrar ${company.name}`}
                                aria-current={
                                    index === activeCompany ? 'true' : undefined
                                }
                                onClick={() => selectCompany(index)}
                            />
                        ))}
                    </div>
                    <button
                        type="button"
                        className="pp-company-autoplay"
                        aria-label={
                            isAutoPlaying
                                ? 'Pausar movimiento automático'
                                : 'Reanudar movimiento automático'
                        }
                        aria-pressed={!isAutoPlaying}
                        onClick={() =>
                            setIsAutoPlaying((isPlaying) => !isPlaying)
                        }
                    >
                        {isAutoPlaying ? (
                            <Pause size={17} aria-hidden="true" />
                        ) : (
                            <Play size={17} aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>
            <DialogContent
                className="pp-project-dialog border-[#dcd5e1] bg-[#f8f6f2] p-0 text-[#211d29] sm:max-w-3xl"
                onPointerDownOutside={(event) => {
                    if (isImagePreviewOpen) {
                        event.preventDefault();
                    }
                }}
            >
                <DialogHeader className="pp-project-dialog-header">
                    <span className="pp-project-dialog-kicker">
                        {selectedProject.category} · {selectedProject.status}
                    </span>
                    <DialogTitle className="pr-8 text-2xl">
                        {selectedCompany.name}
                    </DialogTitle>
                </DialogHeader>
                <div className="pp-project-dialog-body">
                    <DialogDescription className="text-base leading-7 text-[#6d6475]">
                        {selectedProject.description}
                    </DialogDescription>
                    <ProjectGallery
                        project={selectedProject}
                        onPreviewOpenChange={setIsImagePreviewOpen}
                    />
                    {selectedProject.url && (
                        <a
                            className="pp-live-link"
                            href={selectedProject.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Visitar sitio público{' '}
                            <ArrowUpRight size={18} aria-hidden="true" />
                        </a>
                    )}
                </div>
                <div className="pp-project-dialog-footer">
                    <a
                        className="pp-button justify-center"
                        href={whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Quiero algo así para mi negocio{' '}
                        <ArrowUpRight size={18} aria-hidden="true" />
                    </a>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default function Welcome() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [filter, setFilter] = useState('Todo');
    const visibleProjects = projects.filter(
        (project) => filter === 'Todo' || project.category === filter,
    );

    return (
        <>
            <Head title="Aplicaciones para negocios">
                <meta
                    head-key="description"
                    name="description"
                    content="PixelPerfect: desarrollo de aplicaciones a la medida, sistemas para empresas y diseño web en México. Conoce nuestro trabajo y cuéntanos tu idea."
                />
                <meta name="theme-color" content="#f8f6f2" />
            </Head>
            <div className="pp-site" id="inicio" lang="es">
                <a className="pp-skip" href="#contenido">
                    Saltar al contenido
                </a>
                <header className="pp-header pp-container">
                    <a
                        href="#inicio"
                        aria-label="PixelPerfect, inicio"
                        className="flex items-center gap-2.5"
                    >
                        <span className="pp-logo-icon">
                            <Sparkles size={17} aria-hidden="true" />
                        </span>
                        <Wordmark />
                    </a>
                    <nav
                        aria-label="Navegación principal"
                        className="hidden items-center gap-7 text-sm lg:flex"
                    >
                        {navigation.map(([label, href]) => (
                            <a key={href} className="pp-nav-link" href={href}>
                                {label}
                            </a>
                        ))}
                    </nav>
                    <a
                        href="#contacto"
                        className="pp-header-cta hidden sm:inline-flex"
                    >
                        Contacto <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden"
                        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? (
                            <X aria-hidden="true" />
                        ) : (
                            <Menu aria-hidden="true" />
                        )}
                    </Button>
                    {menuOpen && (
                        <nav
                            id="mobile-navigation"
                            aria-label="Navegación móvil"
                            className="pp-mobile-nav lg:hidden"
                        >
                            {navigation.map(([label, href]) => (
                                <a
                                    key={href}
                                    href={href}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {label}
                                    <ArrowUpRight
                                        size={16}
                                        aria-hidden="true"
                                    />
                                </a>
                            ))}
                        </nav>
                    )}
                </header>
                <main id="contenido">
                    <section className="pp-hero">
                        <div className="pp-container relative grid items-center gap-10 sm:gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
                            <div>
                                <p className="pp-eyebrow">
                                    <span className="pp-status-dot" /> Empresa
                                    de desarrollo y diseño de software
                                </p>
                                <h1>
                                    Da el siguiente
                                    <br />
                                    gran paso
                                    <br />
                                    <em>en tu negocio.</em>
                                </h1>
                                <p className="pp-intro">
                                    Nos enfocamos en desarrollar sistemas y
                                    plataformas que ayudan a tu negocio a crecer
                                    y a destacar.{' '}
                                    <em>A tu medida, de principio a fin.</em>
                                </p>
                                <div className="mt-8 flex flex-wrap items-center gap-5">
                                    <a href="#clientes" className="pp-button">
                                        Nuestro trabajo{' '}
                                        <ArrowUpRight
                                            size={18}
                                            aria-hidden="true"
                                        />
                                    </a>
                                    <a
                                        href="#contacto"
                                        className="pp-text-link"
                                    >
                                        Contacto{' '}
                                        <ArrowRight
                                            size={17}
                                            aria-hidden="true"
                                        />
                                    </a>
                                </div>
                                <p className="pp-hero-note">
                                    <span /> Optimización de búsqueda en Google
                                    <span /> Desarrollo a tu medida
                                    <span /> Diseño responsivo para tabletas,
                                    celulares y computadoras
                                </p>
                            </div>
                            <div className="pp-hero-visual">
                                <div className="pp-visual-label">
                                    <span className="font-mono">
                                        IDEA → DISEÑO → DESARROLLO
                                    </span>
                                    <Sparkles size={18} aria-hidden="true" />
                                </div>
                                <div className="pp-hero-stack">
                                    <PortfolioPreview variant="platform" />
                                </div>
                                <div className="pp-floating-note">
                                    <span className="pp-note-check">
                                        <Check size={19} aria-hidden="true" />
                                    </span>
                                    <div>
                                        <strong>Hecho para tu negocio.</strong>
                                        <span>No al revés.</span>
                                    </div>
                                    <ArrowUpRight
                                        size={22}
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="pp-container pp-section" id="servicios">
                        <div className="pp-section-heading">
                            <div>
                                <p className="pp-eyebrow">
                                    01 / Lo que hacemos
                                </p>
                                <h2>
                                    Optimiza tus procesos.
                                    <br />
                                    <em>
                                        Más tiempo para lo que verdaderamente
                                        importa.
                                    </em>
                                </h2>
                            </div>
                        </div>
                        <p style={{ marginBottom: '20px' }}>
                            La tecnología debe ayudarte a avanzar. Nuestro
                            principal objetivo es que tu negocio optimice sus
                            procesos y desarrolle herramientas que eviten
                            trabajo repetitivo.
                        </p>
                        <div className="grid gap-4 lg:grid-cols-3">
                            {services.map((service, index) => (
                                <article
                                    key={service.title}
                                    className="pp-service"
                                >
                                    <div className="flex items-center justify-between">
                                        <span
                                            className={`pp-service-icon pp-${service.color}`}
                                        >
                                            <service.icon
                                                size={23}
                                                aria-hidden="true"
                                            />
                                        </span>
                                        <span className="pp-small-number">
                                            0{index + 1}
                                        </span>
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <span className="pp-service-detail">
                                        {service.detail}
                                    </span>
                                </article>
                            ))}
                        </div>
                    </section>
                    <section
                        className="pp-enterprise-section"
                        id="pixel-perfect-empresarial"
                    >
                        <div className="pp-container pp-enterprise-card">
                            <div className="pp-enterprise-copy">
                                <div className="pp-enterprise-label">
                                    <span
                                        className="pp-enterprise-symbol"
                                        aria-hidden="true"
                                    >
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                    </span>
                                    <span>
                                        <strong>PIXEL PERFECT</strong>
                                        <em>Empresarial</em>
                                    </span>
                                    <small>Nuestro sistema</small>
                                </div>
                                <h2>
                                    Todo lo que pasa en tu empresa,
                                    <br />
                                    <em>en un solo lugar.</em>
                                </h2>
                                <p>
                                    Prueba nuestra plataforma modular para
                                    organizar empleados, expedientes, documentos
                                    y firmas, vacaciones, horarios, inventarios
                                    y estadísticas sin perder el control entre
                                    archivos y mensajes sueltos.
                                </p>
                                <div className="pp-enterprise-points">
                                    <span>
                                        <Check size={14} /> Elige solo los
                                        módulos que necesitas
                                    </span>
                                    <span>
                                        <Check size={14} /> Suscripción mensual
                                        o anual
                                    </span>
                                    <span>
                                        <Check size={14} /> Soporte desde la
                                        plataforma
                                    </span>
                                </div>
                                <Link
                                    href={empresarial()}
                                    className="pp-button pp-button-lime"
                                    viewTransition
                                >
                                    Conocer Pixel Perfect Empresarial
                                    <ArrowUpRight
                                        size={18}
                                        aria-hidden="true"
                                    />
                                </Link>
                            </div>
                            <div
                                className="pp-enterprise-visual"
                                aria-hidden="true"
                            >
                                <div className="pp-enterprise-window">
                                    <div className="pp-enterprise-window-top">
                                        <span />
                                        <strong>Resumen de tu empresa</strong>
                                        <small>Hoy</small>
                                    </div>
                                    <div className="pp-enterprise-window-body">
                                        <aside>
                                            <span className="is-active">
                                                <BarChart3 size={14} />
                                            </span>
                                            <span>
                                                <FileSignature size={14} />
                                            </span>
                                            <span>
                                                <CalendarCheck2 size={14} />
                                            </span>
                                            <span>
                                                <Blocks size={14} />
                                            </span>
                                        </aside>
                                        <div>
                                            <div className="pp-enterprise-stats">
                                                <article>
                                                    <span>Equipo activo</span>
                                                    <strong>48</strong>
                                                    <small>+3 este mes</small>
                                                </article>
                                                <article>
                                                    <span>Por autorizar</span>
                                                    <strong>07</strong>
                                                    <small>2 urgentes</small>
                                                </article>
                                            </div>
                                            <div className="pp-enterprise-feed">
                                                <strong>
                                                    Actividad reciente
                                                </strong>
                                                <span>
                                                    <i /> Vacaciones autorizadas
                                                    <small>Hoy</small>
                                                </span>
                                                <span>
                                                    <i /> Contrato firmado
                                                    <small>Ayer</small>
                                                </span>
                                                <span>
                                                    <i /> Inventario actualizado
                                                    <small>Ayer</small>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pp-enterprise-float">
                                    <span>
                                        <FileSignature size={17} />
                                    </span>
                                    <div>
                                        <strong>Documento firmado</strong>
                                        <small>Expediente actualizado</small>
                                    </div>
                                    <Check size={17} />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <section className="pp-work-section" id="proyectos">
                        <div className="pp-container pp-section">
                            <div className="pp-section-heading">
                                <div>
                                    <p className="pp-eyebrow">
                                        03 / Nuestro trabajo
                                    </p>
                                    <h2>
                                        De la idea <em>a la pantalla.</em>
                                    </h2>
                                </div>
                            </div>
                            <div
                                className="mb-8 flex flex-wrap gap-2"
                                role="group"
                                aria-label="Filtrar proyectos"
                            >
                                {[
                                    'Todo',
                                    'Aplicaciones',
                                    'Sitios web',
                                    'Diseños',
                                ].map((category) => (
                                    <button
                                        key={category}
                                        type="button"
                                        className={`pp-filter ${filter === category ? 'is-active' : ''}`}
                                        aria-pressed={filter === category}
                                        onClick={() => setFilter(category)}
                                    >
                                        {category}
                                        {category === 'Todo' && (
                                            <span>
                                                {String(
                                                    projects.length,
                                                ).padStart(2, '0')}
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>
                            <div
                                className="grid gap-8 md:grid-cols-2"
                                aria-live="polite"
                            >
                                {visibleProjects.map((project) => (
                                    <article
                                        className="pp-project"
                                        key={project.id}
                                        id={`proyecto-${project.id}`}
                                    >
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <button
                                                    type="button"
                                                    className={`pp-project-cover pp-cover-${project.preview}`}
                                                    aria-label={`Ver proyecto: ${project.subtitle}`}
                                                >
                                                    <ProjectCover
                                                        project={project}
                                                    />
                                                    <span className="pp-project-open">
                                                        <ArrowUpRight
                                                            size={22}
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                </button>
                                            </DialogTrigger>
                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        className="pp-tag"
                                                        key={tag}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                                <span className="pp-tag">
                                                    {project.status}
                                                </span>
                                            </div>
                                            <p className="pp-project-subtitle">
                                                {project.subtitle}
                                            </p>
                                            <DialogTrigger asChild>
                                                <button
                                                    className="pp-project-title"
                                                    type="button"
                                                >
                                                    {project.title}
                                                    <ArrowUpRight
                                                        size={21}
                                                        aria-hidden="true"
                                                    />
                                                </button>
                                            </DialogTrigger>
                                            <DialogContent className="pp-project-dialog border-[#dcd5e1] bg-[#f8f6f2] p-0 text-[#211d29] sm:max-w-3xl">
                                                <DialogHeader className="pp-project-dialog-header">
                                                    <span className="pp-project-dialog-kicker">
                                                        {project.category} ·{' '}
                                                        {project.status}
                                                    </span>
                                                    <DialogTitle className="pr-8 text-2xl">
                                                        {
                                                            project.subtitle.split(
                                                                ' · ',
                                                            )[0]
                                                        }
                                                    </DialogTitle>
                                                </DialogHeader>
                                                <div className="pp-project-dialog-body">
                                                    <DialogDescription className="text-base leading-7 text-[#6d6475]">
                                                        {project.description}
                                                    </DialogDescription>
                                                    <ProjectGallery
                                                        project={project}
                                                    />
                                                    <p className="text-sm leading-6 text-[#6d6475]">
                                                        {project.note}
                                                    </p>
                                                    {project.url && (
                                                        <a
                                                            className="pp-live-link"
                                                            href={project.url}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            Visitar sitio
                                                            público{' '}
                                                            <ArrowUpRight
                                                                size={18}
                                                                aria-hidden="true"
                                                            />
                                                        </a>
                                                    )}
                                                </div>
                                                <div className="pp-project-dialog-footer">
                                                    <a
                                                        className="pp-button justify-center"
                                                        href={whatsappHref}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        Quiero algo así para mi
                                                        negocio{' '}
                                                        <ArrowUpRight
                                                            size={18}
                                                            aria-hidden="true"
                                                        />
                                                    </a>
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section> */}
                    <section
                        className="pp-container pp-section pp-companies -mt-12"
                        id="clientes"
                    >
                        <div className="pp-companies-heading">
                            <p className="pp-eyebrow">
                                03 / Empresas que han confiado en nosotros
                            </p>
                            <h2>
                                Grandes ideas,{' '}
                                <b>
                                    <em>grandes clientes.</em>
                                </b>
                            </h2>
                            <p className="pp-companies-intro">
                                Detrás de cada proyecto hay un equipo, una idea
                                y un negocio que quiere llegar más lejos.
                            </p>
                        </div>
                        <CompaniesCarousel />
                    </section>
                    <section className="pp-contact" id="contacto">
                        <div className="pp-container">
                            <p className="pp-eyebrow">
                                04 / Hagamos que suceda
                            </p>
                            <div className="pp-contact-content">
                                <div>
                                    <h2>
                                        ¿Tienes una idea?
                                        <br />
                                        <em>Démosle forma.</em>
                                    </h2>
                                    <p>
                                        Cuéntanos qué necesitas. El primer paso
                                        es una buena conversación, nuestro
                                        equipo te escuchará y te ayudará a
                                        definir la mejor solución para tu
                                        negocio.
                                    </p>
                                </div>
                                <div className="pp-contact-actions">
                                    <a
                                        href={whatsappHref}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="pp-button pp-button-lime"
                                    >
                                        Platiquemos por WhatsApp{' '}
                                        <MessageCircle
                                            size={19}
                                            aria-hidden="true"
                                        />
                                    </a>
                                    <a href={emailHref} className="pp-email">
                                        <Mail size={17} aria-hidden="true" />
                                        <span>
                                            pixelperfect.nacif@gmail.com
                                        </span>
                                        <ArrowUpRight
                                            size={17}
                                            aria-hidden="true"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <SiteFooter />
            </div>
        </>
    );
}
