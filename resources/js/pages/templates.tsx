import { Head, Link } from '@inertiajs/react';
import {
    ArrowRight,
    ArrowUpRight,
    BadgeDollarSign,
    Check,
    Clock3,
    LayoutTemplate,
    Mail,
    Menu,
    MessageCircle,
    Paintbrush,
    Sparkles,
    X,
    Zap,
} from 'lucide-react';
import { useState } from 'react';
import { MarketingWordmark } from '@/components/marketing-wordmark';
import { SeoHead } from '@/components/seo-head';
import { SiteFooter } from '@/components/site-footer';
import { Button } from '@/components/ui/button';
import { home, templates } from '@/routes';
import { home as restaurantHome } from '@/routes/restaurant';
import '../../css/welcome.css';

const contactMessage =
    'Hola, me interesó una de las plantillas de Pixel Perfect. Quisiera recibir más información.';
const whatsappHref = `https://wa.me/523221974630?text=${encodeURIComponent(contactMessage)}`;
const emailHref = `mailto:pixelperfect.nacif@gmail.com?subject=${encodeURIComponent('Información sobre plantillas')}&body=${encodeURIComponent(contactMessage)}`;

const benefits = [
    {
        icon: Clock3,
        title: 'Implementación rápida',
        description:
            'Partimos de una experiencia ya diseñada y probada para publicar tu sitio en mucho menos tiempo.',
    },
    {
        icon: BadgeDollarSign,
        title: 'Inversión accesible',
        description:
            'El costo es menor que un desarrollo desde cero porque la base visual y funcional ya está construida.',
    },
    {
        icon: Paintbrush,
        title: 'Personalizada para ti',
        description:
            'Adaptamos colores, contenidos, imágenes y datos de contacto para que la plantilla represente a tu negocio.',
    },
];

export default function Templates() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <SeoHead />
            <Head>
                <meta name="theme-color" content="#f8f6f2" />
            </Head>
            <div className="pp-site min-h-screen" lang="es">
                <a className="pp-skip" href="#contenido">
                    Saltar al contenido
                </a>
                <header className="pp-header pp-container">
                    <Link
                        href={home()}
                        aria-label="PixelPerfect, inicio"
                        className="flex items-center gap-2.5"
                    >
                        <span className="pp-logo-icon">
                            <Sparkles size={17} aria-hidden="true" />
                        </span>
                        <MarketingWordmark />
                    </Link>
                    <nav
                        aria-label="Navegación principal"
                        className="hidden items-center gap-7 text-sm lg:flex"
                    >
                        <Link className="pp-nav-link" href={home()}>
                            Inicio
                        </Link>
                        <a
                            className="pp-nav-link"
                            href={home.url() + '#servicios'}
                        >
                            Servicios
                        </a>
                        <Link
                            className="pp-nav-link font-semibold text-[#9743d5]"
                            href={templates()}
                            aria-current="page"
                        >
                            Plantillas
                        </Link>
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
                        aria-controls="templates-mobile-navigation"
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
                            id="templates-mobile-navigation"
                            aria-label="Navegación móvil"
                            className="pp-mobile-nav lg:hidden"
                        >
                            <Link
                                href={home()}
                                onClick={() => setMenuOpen(false)}
                            >
                                Inicio
                                <ArrowUpRight size={16} aria-hidden="true" />
                            </Link>
                            <a
                                href={home.url() + '#servicios'}
                                onClick={() => setMenuOpen(false)}
                            >
                                Servicios
                                <ArrowUpRight size={16} aria-hidden="true" />
                            </a>
                            <Link
                                href={templates()}
                                aria-current="page"
                                onClick={() => setMenuOpen(false)}
                            >
                                Plantillas
                                <ArrowUpRight size={16} aria-hidden="true" />
                            </Link>
                        </nav>
                    )}
                </header>

                <main id="contenido">
                    <section className="pp-container grid gap-12 pt-12 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-20 lg:pb-28">
                        <div>
                            <p className="pp-eyebrow">
                                <span className="pp-status-dot" />
                                Soluciones listas para crecer
                            </p>
                            <h1 className="mt-7 max-w-4xl text-[clamp(3.6rem,7vw,7.4rem)] leading-[0.9] font-semibold tracking-[-0.075em]">
                                Tu negocio en línea,
                                <br />
                                <em className="font-serif font-medium text-[#9743d5]">
                                    más rápido.
                                </em>
                            </h1>
                            <p className="pp-intro max-w-xl">
                                Esta colección reúne plantillas profesionales
                                que podemos implementar y personalizar para tu
                                negocio. Una alternativa rápida y más económica
                                que desarrollar cada pantalla desde cero.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <a href="#plantillas" className="pp-button">
                                    Ver plantillas
                                    <ArrowRight size={18} aria-hidden="true" />
                                </a>
                                <a
                                    href={whatsappHref}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-[#211d2920] px-5 py-3.5 text-sm font-semibold transition hover:border-[#9743d5] hover:text-[#9743d5]"
                                >
                                    <MessageCircle
                                        size={18}
                                        aria-hidden="true"
                                    />
                                    Cuéntanos de tu negocio
                                </a>
                            </div>
                        </div>

                        <div
                            className="relative mx-auto w-full max-w-xl"
                            aria-hidden="true"
                        >
                            <div className="absolute -inset-7 rotate-3 rounded-[2.5rem] bg-[#d9f99d]/70 blur-2xl" />
                            <div className="relative -rotate-2 overflow-hidden rounded-[2rem] border border-[#211d2917] bg-white p-4 shadow-[0_32px_90px_#211d2924] dark:bg-[#241d2a]">
                                <img
                                    src="/images/restaurant/hero.jpg"
                                    alt=""
                                    className="aspect-[4/3] w-full rounded-[1.35rem] object-cover"
                                />
                                <div className="flex items-center justify-between gap-4 px-2 pt-4 pb-1">
                                    <div>
                                        <span className="text-xs font-semibold tracking-[0.14em] text-[#9743d5] uppercase">
                                            Primera plantilla
                                        </span>
                                        <p className="mt-1 text-lg font-semibold">
                                            Restaurante
                                        </p>
                                    </div>
                                    <span className="grid size-11 place-items-center rounded-full bg-[#211d29] text-white dark:bg-white dark:text-[#211d29]">
                                        <LayoutTemplate
                                            size={19}
                                            aria-hidden="true"
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="border-y border-[#211d2914] bg-white/45 py-16 backdrop-blur-sm dark:bg-white/[0.03]">
                        <div className="pp-container">
                            <div className="grid gap-8 md:grid-cols-3">
                                {benefits.map((benefit) => (
                                    <article
                                        key={benefit.title}
                                        className="grid gap-4 border-[#211d2914] md:border-r md:pr-8 md:last:border-r-0"
                                    >
                                        <span className="grid size-11 place-items-center rounded-2xl bg-[#ead7f7] text-[#6f259f] dark:bg-[#7e22ce45] dark:text-[#e9d5ff]">
                                            <benefit.icon
                                                size={21}
                                                aria-hidden="true"
                                            />
                                        </span>
                                        <div>
                                            <h2 className="text-xl font-semibold tracking-tight">
                                                {benefit.title}
                                            </h2>
                                            <p className="mt-2 text-sm leading-7 text-[#6d6475] dark:text-[#b9acbf]">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section
                        id="plantillas"
                        className="pp-container scroll-mt-8 py-20 lg:py-28"
                    >
                        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                            <div>
                                <p className="pp-eyebrow">
                                    01 / Plantillas disponibles
                                </p>
                                <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                                    Una base profesional, lista para hacerla
                                    tuya.
                                </h2>
                            </div>
                            <p className="max-w-md text-sm leading-7 text-[#6d6475] dark:text-[#b9acbf]">
                                Empezamos con restaurantes. La colección crecerá
                                con nuevas opciones para distintos tipos de
                                negocio.
                            </p>
                        </div>

                        <Link
                            href={restaurantHome()}
                            className="group grid overflow-hidden rounded-[2rem] border border-[#211d2917] bg-[#fffdf9] shadow-[0_18px_60px_#211d2912] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_#211d2920] focus-visible:outline-none md:grid-cols-[1.15fr_0.85fr] dark:bg-white/[0.04]"
                            aria-label="Abrir la demo de la plantilla para restaurantes"
                        >
                            <div className="relative min-h-80 overflow-hidden md:min-h-[31rem]">
                                <img
                                    src="/images/restaurant/interior.jpg"
                                    alt="Interior cálido de un restaurante con mesas de madera y plantas"
                                    className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-[1.035]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#21121b]/65 via-transparent to-transparent" />
                                <span className="absolute top-6 left-6 rounded-full bg-white/90 px-4 py-2 text-xs font-bold tracking-[0.12em] text-[#6f2641] uppercase backdrop-blur">
                                    Demo disponible
                                </span>
                                <p className="absolute bottom-6 left-6 flex items-center gap-2 text-sm font-semibold text-white">
                                    <Zap
                                        size={17}
                                        fill="currentColor"
                                        aria-hidden="true"
                                    />
                                    Navega la experiencia completa
                                </p>
                            </div>
                            <div className="flex flex-col justify-between gap-10 p-7 sm:p-10 lg:p-12">
                                <div>
                                    <div className="mb-7 flex items-center justify-between">
                                        <span className="text-xs font-bold tracking-[0.16em] text-[#9743d5] uppercase">
                                            Gastronomía
                                        </span>
                                        <span className="grid size-12 place-items-center rounded-full border border-[#211d2917] transition group-hover:border-[#9743d5] group-hover:bg-[#9743d5] group-hover:text-white">
                                            <ArrowUpRight
                                                size={20}
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </div>
                                    <h3 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                                        Restaurante
                                    </h3>
                                    <p className="mt-5 text-base leading-8 text-[#6d6475] dark:text-[#b9acbf]">
                                        Sitio completo con página de inicio,
                                        menú por categorías, galería, promoción,
                                        ubicación y llamadas de contacto.
                                    </p>
                                </div>
                                <ul className="grid gap-3 text-sm">
                                    {[
                                        'Diseño adaptable a celular y computadora',
                                        'WhatsApp y correo listos para recibir clientes',
                                        'Colores, platillos e imágenes personalizables',
                                    ].map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-start gap-3"
                                        >
                                            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#d9f99d] text-[#31431d]">
                                                <Check
                                                    size={13}
                                                    strokeWidth={3}
                                                    aria-hidden="true"
                                                />
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <span className="inline-flex items-center gap-3 text-sm font-bold text-[#7c2bab]">
                                    Abrir demo del restaurante
                                    <ArrowRight size={18} aria-hidden="true" />
                                </span>
                            </div>
                        </Link>
                    </section>

                    <section
                        id="contacto"
                        className="border-t border-[#211d2914] bg-[#211d29] py-16 text-[#f8f6f2]"
                    >
                        <div className="pp-container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                            <div>
                                <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-[#d9f99d] uppercase">
                                    <LayoutTemplate
                                        size={16}
                                        aria-hidden="true"
                                    />
                                    ¿Te gustó una plantilla?
                                </p>
                                <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                                    La adaptamos a tu negocio y te ayudamos a
                                    publicarla.
                                </h2>
                            </div>
                            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                                <a
                                    href={whatsappHref}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d9f99d] px-6 py-4 text-sm font-bold text-[#26351b] transition hover:-translate-y-0.5 hover:bg-[#e4fdb8]"
                                >
                                    <MessageCircle
                                        size={18}
                                        aria-hidden="true"
                                    />
                                    Contactar por WhatsApp
                                </a>
                                <a
                                    href={emailHref}
                                    className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 px-6 py-4 text-sm font-bold transition hover:bg-white/10"
                                >
                                    <Mail size={18} aria-hidden="true" />
                                    Contactar por correo
                                </a>
                            </div>
                        </div>
                    </section>
                </main>

                <SiteFooter />
            </div>
        </>
    );
}
