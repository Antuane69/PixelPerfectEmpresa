import { Head } from '@inertiajs/react';
import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    Blocks,
    Check,
    Code2,
    Mail,
    Menu,
    MessageCircle,
    Palette,
    Sparkles,
    X,
} from 'lucide-react';
import { useState } from 'react';
import { PortfolioPreview } from '@/components/portfolio-preview';
import { ProjectCover } from '@/components/project-cover';
import { companies, projects } from '@/lib/portfolio';
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
    ['Proyectos', '#proyectos'],
    ['Empresas', '#empresas'],
    ['Contacto', '#contacto'],
];
const services = [
    {
        icon: Code2,
        title: 'Aplicaciones a la medida',
        description:
            'Herramientas que se adaptan a tu negocio: desde la primera idea hasta el sistema que usas todos los días.',
        detail: 'Aplicaciones web · Sistemas internos',
        color: 'lime',
    },
    {
        icon: Blocks,
        title: 'Tu operación, conectada',
        description:
            'Organiza procesos, centraliza información y dale a tu equipo más tiempo para lo que sí importa.',
        detail: 'Gestión · Automatización · Integraciones',
        color: 'purple',
    },
    {
        icon: Palette,
        title: 'Diseño con intención',
        description:
            'Interfaces claras, sitios que comunican y experiencias que se sienten tan bien como se ven.',
        detail: 'Diseño de interfaces · Sitios web',
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
                        className="hidden items-center gap-7 text-sm md:flex"
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
                        Hablemos de tu idea{' '}
                        <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
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
                            className="pp-mobile-nav md:hidden"
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
                        <div className="pp-container relative grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
                            <div>
                                <p className="pp-eyebrow">
                                    <span className="pp-status-dot" /> Estudio
                                    de desarrollo & diseño · México
                                </p>
                                <h1>
                                    Tu negocio.
                                    <br />
                                    Tu siguiente
                                    <br />
                                    <em>gran paso.</em>
                                    <span
                                        className="pp-title-dot"
                                        aria-hidden="true"
                                    >
                                        *
                                    </span>
                                </h1>
                                <p className="pp-intro">
                                    Creamos aplicaciones que simplifican tu
                                    trabajo y diseños que hacen destacar tu
                                    marca. A tu medida, de principio a fin.
                                </p>
                                <div className="mt-8 flex flex-wrap items-center gap-5">
                                    <a href="#proyectos" className="pp-button">
                                        Explorar nuestro trabajo{' '}
                                        <ArrowUpRight
                                            size={18}
                                            aria-hidden="true"
                                        />
                                    </a>
                                    <a
                                        href="#contacto"
                                        className="pp-text-link"
                                    >
                                        Tengo una idea{' '}
                                        <ArrowRight
                                            size={17}
                                            aria-hidden="true"
                                        />
                                    </a>
                                </div>
                                <p className="pp-hero-note">
                                    <span /> Desarrollo a medida <span />{' '}
                                    Cuidado en cada detalle
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
                                <p className="pp-preview-caption">
                                    Una mirada a nuestro sistema · Vista
                                    ilustrativa
                                </p>
                            </div>
                        </div>
                        <div className="pp-container pp-hero-bottom">
                            <span>Buenas ideas. Mejor ejecución.</span>
                            <a
                                href="#servicios"
                                aria-label="Descubrir nuestros servicios"
                            >
                                <ArrowDown size={17} aria-hidden="true" />
                            </a>
                            <span>Hecho en México, píxel a píxel.</span>
                        </div>
                    </section>
                    <section className="pp-container pp-section" id="servicios">
                        <div className="pp-section-heading">
                            <div>
                                <p className="pp-eyebrow">
                                    01 / Lo que hacemos
                                </p>
                                <h2>
                                    Menos complicaciones.
                                    <br />
                                    <em>Más posibilidades.</em>
                                </h2>
                            </div>
                            <p>
                                La tecnología debe ayudarte a avanzar.
                                <br />
                                Nos encargamos de que así sea.
                            </p>
                        </div>
                        <div className="grid gap-4 md:grid-cols-3">
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
                    <section className="pp-work-section" id="proyectos">
                        <div className="pp-container pp-section">
                            <div className="pp-section-heading">
                                <div>
                                    <p className="pp-eyebrow">
                                        02 / Nuestro trabajo
                                    </p>
                                    <h2>
                                        De la idea
                                        <br />
                                        <em>a la pantalla.</em>
                                    </h2>
                                </div>
                                <p>
                                    Aplicaciones y diseño con el mismo objetivo:
                                    <br />
                                    hacer que las cosas funcionen mejor.
                                </p>
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
                                            <DialogContent className="pp-project-dialog max-h-[90svh] overflow-y-auto border-[#dcd5e1] bg-[#f8f6f2] text-[#211d29] sm:max-w-2xl">
                                                <DialogHeader>
                                                    <DialogTitle className="pr-5 text-2xl">
                                                        {project.subtitle}
                                                    </DialogTitle>
                                                    <DialogDescription className="text-base leading-7 text-[#6d6475]">
                                                        {project.description}
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <ProjectCover
                                                    project={project}
                                                />
                                                <p className="text-sm text-[#6d6475]">
                                                    {project.note}
                                                </p>
                                                {project.url && (
                                                    <a
                                                        className="pp-live-link"
                                                        href={project.url}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        Visitar sitio público{' '}
                                                        <ArrowUpRight
                                                            size={18}
                                                            aria-hidden="true"
                                                        />
                                                    </a>
                                                )}
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
                                            </DialogContent>
                                        </Dialog>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>
                    <section
                        className="pp-container pp-section pp-companies"
                        id="empresas"
                    >
                        <div>
                            <p className="pp-eyebrow">
                                03 / Empresas & colaboraciones
                            </p>
                            <h2>
                                El mejor trabajo
                                <br />
                                se hace <em>en equipo.</em>
                            </h2>
                            <p className="pp-companies-intro">
                                Detrás de cada proyecto hay personas, ideas y un
                                negocio que quiere llegar más lejos.
                            </p>
                        </div>
                        <div className="pp-company-grid">
                            {companies.map((company) => (
                                <a
                                    key={company.name}
                                    href={`#proyecto-${company.project}`}
                                    onClick={() => setFilter('Todo')}
                                    className="pp-company"
                                >
                                    <strong>{company.name}</strong>
                                    <span>{company.sector}</span>
                                    <ArrowUpRight
                                        size={16}
                                        aria-hidden="true"
                                    />
                                </a>
                            ))}
                        </div>
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
                                        es una buena conversación.
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
                <footer className="pp-container pp-footer">
                    <a
                        href="#inicio"
                        aria-label="PixelPerfect, volver al inicio"
                    >
                        <Wordmark />
                    </a>
                    <p>
                        © {new Date().getFullYear()} PixelPerfect. Hecho con
                        intención en México.
                    </p>
                    <a href="#inicio" className="pp-text-link">
                        Volver arriba{' '}
                        <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                </footer>
            </div>
        </>
    );
}
