import { Head, Link } from '@inertiajs/react';
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    BarChart3,
    BellRing,
    Boxes,
    CalendarCheck2,
    Check,
    CheckCircle2,
    ChevronRight,
    CircleUserRound,
    Clock3,
    Download,
    FileCheck2,
    FileSignature,
    FileSpreadsheet,
    Headphones,
    Mail,
    Menu,
    MessageCircle,
    PackageCheck,
    PenLine,
    RefreshCcw,
    ShieldCheck,
    Sparkles,
    UsersRound,
    X,
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SiteFooter } from '@/components/site-footer';
import { home } from '@/routes';
import '../../css/welcome.css';
import '../../css/empresarial.css';

const demoMessage =
    'Hola, me gustaría conocer Pixel Perfect Empresarial y los módulos disponibles para mi empresa.';
const demoHref = `https://wa.me/523221974630?text=${encodeURIComponent(demoMessage)}`;
const demoEmailHref = `mailto:pixelperfect.nacif@gmail.com?subject=${encodeURIComponent('Quiero conocer Pixel Perfect Empresarial')}&body=${encodeURIComponent(demoMessage)}`;

const navigation = [
    ['Módulos', '#modulos'],
    ['Cómo funciona', '#como-funciona'],
    ['Suscripción', '#suscripcion'],
    ['Soporte', '#soporte'],
];

const overviewItems = [
    { icon: UsersRound, label: 'Equipo y expedientes' },
    { icon: FileSignature, label: 'Documentos y firmas' },
    { icon: CalendarCheck2, label: 'Vacaciones y permisos' },
    { icon: Boxes, label: 'Uniformes y herramientas' },
];

const workflowModules = [
    {
        icon: CalendarCheck2,
        number: '02',
        title: 'Vacaciones y permisos',
        description:
            'Solicitudes basadas en los días disponibles reales, con el mismo flujo para permisos sin goce de sueldo.',
        points: [
            'Solicitud por el empleado o su supervisor',
            'Aviso por correo con cruces de fechas del equipo',
            'Autorización o rechazo con comentarios y estatus visible',
        ],
        tone: 'lime',
    },
    {
        icon: Clock3,
        number: '03',
        title: 'Horarios por equipo',
        description:
            'Los supervisores organizan quién trabaja, en qué turno y qué día de la semana.',
        points: [
            'Asignación semanal por colaborador',
            'Turnos claros para cada equipo',
            'Envío al administrador para autorización',
        ],
        tone: 'purple',
    },
    {
        icon: Boxes,
        number: '04',
        title: 'Uniformes e inventarios',
        description:
            'Inventarios visuales para controlar lo que entra, lo que sale y a quién se entrega.',
        points: [
            'Uniformes por talla, color y tipo de prenda',
            'Herramientas clasificadas por uso y con imágenes',
            'Historial de altas y bajas de inventario',
        ],
        tone: 'peach',
    },
];

const businessControls = [
    {
        icon: RefreshCcw,
        title: 'Bajas sin empezar de cero',
        text: 'Conserva el expediente de antiguos colaboradores para reintegrarlos fácilmente. Tú defines después de cuánto tiempo se eliminan los registros inactivos.',
    },
    {
        icon: BarChart3,
        title: 'La empresa en perspectiva',
        text: 'Consulta altas, bajas, inventarios, solicitudes, vacaciones pendientes y actividad general desde un resumen ejecutivo.',
    },
    {
        icon: FileSpreadsheet,
        title: 'Información lista para usar',
        text: 'Exporta la información de los módulos en PDF o Excel para compartir, revisar o conservar fuera del sistema.',
    },
    {
        icon: ShieldCheck,
        title: 'Acceso protegido',
        text: 'Cada usuario entra con su propia contraseña y puede reforzar su cuenta con autenticación en dos pasos mediante una aplicación autenticadora.',
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

function ProductMark() {
    return (
        <span className="ppe-product-mark">
            <span className="ppe-product-symbol" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
            </span>
            <span>
                <strong>Pixel Perfect</strong>
                <small>Empresarial</small>
            </span>
        </span>
    );
}

function DashboardPreview() {
    return (
        <div className="ppe-dashboard" aria-label="Vista previa del sistema">
            <div className="ppe-dashboard-topbar">
                <ProductMark />
                <div className="ppe-dashboard-user">
                    <span>
                        <BellRing size={14} aria-hidden="true" />
                    </span>
                    <span>AN</span>
                </div>
            </div>
            <div className="ppe-dashboard-frame">
                <aside className="ppe-dashboard-nav" aria-hidden="true">
                    <span className="is-active">
                        <BarChart3 size={15} /> Resumen
                    </span>
                    <span>
                        <UsersRound size={15} /> Empleados
                    </span>
                    <span>
                        <CalendarCheck2 size={15} /> Solicitudes
                    </span>
                    <span>
                        <Clock3 size={15} /> Horarios
                    </span>
                    <span>
                        <Boxes size={15} /> Inventarios
                    </span>
                </aside>
                <div className="ppe-dashboard-main">
                    <div className="ppe-dashboard-heading">
                        <div>
                            <small>Jueves, 10 de septiembre</small>
                            <strong>Buenos días, Andrea</strong>
                        </div>
                        <button type="button" tabIndex={-1}>
                            + Nuevo empleado
                        </button>
                    </div>
                    <div className="ppe-dashboard-metrics">
                        <article>
                            <span>Equipo activo</span>
                            <strong>48</strong>
                            <small>+3 este mes</small>
                        </article>
                        <article>
                            <span>Por autorizar</span>
                            <strong>07</strong>
                            <small>2 son urgentes</small>
                        </article>
                        <article>
                            <span>Documentos</span>
                            <strong>94%</strong>
                            <small>Expedientes completos</small>
                        </article>
                    </div>
                    <div className="ppe-dashboard-grid">
                        <article className="ppe-dashboard-activity">
                            <div className="ppe-widget-title">
                                <strong>Actividad reciente</strong>
                                <span>Ver todo</span>
                            </div>
                            {[
                                ['AM', 'Ana solicitó vacaciones', 'Hace 8 min'],
                                ['JC', 'Contrato firmado', 'Hace 24 min'],
                                [
                                    'LR',
                                    'Horario enviado a revisión',
                                    'Hace 1 h',
                                ],
                            ].map(([initials, text, time]) => (
                                <div className="ppe-activity-row" key={text}>
                                    <span>{initials}</span>
                                    <div>
                                        <strong>{text}</strong>
                                        <small>{time}</small>
                                    </div>
                                    <ChevronRight size={14} />
                                </div>
                            ))}
                        </article>
                        <article className="ppe-dashboard-chart">
                            <div className="ppe-widget-title">
                                <strong>Esta semana</strong>
                                <span>Solicitudes</span>
                            </div>
                            <div className="ppe-bars" aria-hidden="true">
                                {[42, 68, 51, 85, 64, 38, 27].map(
                                    (height, index) => (
                                        <span key={index}>
                                            <i
                                                style={{ height: `${height}%` }}
                                            />
                                        </span>
                                    ),
                                )}
                            </div>
                            <div
                                className="ppe-chart-labels"
                                aria-hidden="true"
                            >
                                <span>L</span>
                                <span>M</span>
                                <span>M</span>
                                <span>J</span>
                                <span>V</span>
                                <span>S</span>
                                <span>D</span>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Empresarial() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <Head title="Pixel Perfect Empresarial">
                <meta
                    head-key="description"
                    name="description"
                    content="Pixel Perfect Empresarial centraliza empleados, documentos, firmas, vacaciones, horarios, inventarios y estadísticas en un sistema modular para tu negocio."
                />
                <meta name="theme-color" content="#211d29" />
            </Head>
            <div className="pp-site ppe-site" id="inicio" lang="es">
                <a className="pp-skip" href="#contenido">
                    Saltar al contenido
                </a>
                <header className="pp-header pp-container ppe-header">
                    <Link
                        href={home()}
                        aria-label="PixelPerfect, página de inicio"
                        className="flex items-center gap-2.5"
                    >
                        <span className="pp-logo-icon">
                            <Sparkles size={17} aria-hidden="true" />
                        </span>
                        <Wordmark />
                    </Link>
                    <nav
                        aria-label="Navegación de Pixel Perfect Empresarial"
                        className="hidden items-center gap-7 text-sm lg:flex"
                    >
                        {navigation.map(([label, href]) => (
                            <a key={href} className="pp-nav-link" href={href}>
                                {label}
                            </a>
                        ))}
                    </nav>
                    <a
                        href={demoHref}
                        target="_blank"
                        rel="noreferrer"
                        className="pp-header-cta hidden sm:inline-flex"
                    >
                        Solicitar información
                        <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden"
                        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={menuOpen}
                        aria-controls="empresarial-mobile-navigation"
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
                            id="empresarial-mobile-navigation"
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
                            <Link href={home()}>
                                Volver a PixelPerfect
                                <ArrowLeft size={16} aria-hidden="true" />
                            </Link>
                        </nav>
                    )}
                </header>

                <main id="contenido">
                    <section className="ppe-hero">
                        <div className="pp-container ppe-hero-grid">
                            <div className="ppe-hero-copy">
                                <div className="ppe-product-pill">
                                    <ProductMark />
                                    <span>Software modular</span>
                                </div>
                                <h1>
                                    Tu empresa,
                                    <br />
                                    <em>mejor conectada.</em>
                                </h1>
                                <p>
                                    Empleados, documentación, contratos, solicitudes, horarios
                                    e inventarios en un mismo sistema.
                                    Configurado alrededor de la forma en que
                                    realmente trabaja tu negocio.
                                </p>
                                <div className="ppe-hero-actions">
                                    <a
                                        href={demoHref}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="pp-button pp-button-lime"
                                    >
                                        Más información
                                        <ArrowUpRight
                                            size={18}
                                            aria-hidden="true"
                                        />
                                    </a>
                                    <a
                                        href="#modulos"
                                        className="ppe-light-link"
                                    >
                                        Explorar módulos
                                        <ArrowRight
                                            size={17}
                                            aria-hidden="true"
                                        />
                                    </a>
                                </div>
                                <div className="ppe-hero-notes">
                                    <span>
                                        <Check size={14} /> Módulos a tu medida
                                    </span>
                                    <span>
                                        <Check size={14} /> Pagos facturables
                                    </span>
                                    <span>
                                        <Check size={14} /> Soporte directo
                                    </span>
                                </div>
                            </div>
                            <div className="ppe-hero-visual">
                                <div
                                    className="ppe-orbit ppe-orbit-one"
                                    aria-hidden="true"
                                />
                                <div
                                    className="ppe-orbit ppe-orbit-two"
                                    aria-hidden="true"
                                />
                                <DashboardPreview />
                                <div className="ppe-floating-card ppe-floating-card-left">
                                    <span>
                                        <FileCheck2 size={17} />
                                    </span>
                                    <div>
                                        <strong>Contrato firmado</strong>
                                        <small>Expediente actualizado</small>
                                    </div>
                                    <CheckCircle2 size={18} />
                                </div>
                                <div className="ppe-floating-card ppe-floating-card-right">
                                    <span>
                                        <CalendarCheck2 size={17} />
                                    </span>
                                    <div>
                                        <strong>Vacaciones</strong>
                                        <small>Solicitud autorizada</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <section
                        className="ppe-overview"
                        aria-label="Áreas del sistema"
                    >
                        <div className="pp-container ppe-overview-grid">
                            {overviewItems.map((item) => (
                                <div key={item.label}>
                                    <item.icon size={18} aria-hidden="true" />
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </section> */}

                    <section className="pp-container pp-section" id="modulos">
                        <div className="ppe-section-intro">
                            <div>
                                <p className="pp-eyebrow">
                                    01 / El centro de tu operación
                                </p>
                                <h2>
                                    Mantén tus <em>expedientes</em> completos.
                                </h2>
                            </div>
                        </div>
                        <p style={{ margin: "10px 0px" }}>
                            Mantén la información laboral al día y convierte
                            documentos repetitivos en procesos ágiles,
                            claros y fáciles de revisar.
                        </p>

                        <div className="ppe-employee-feature">
                            <div className="ppe-employee-copy">
                                <span className="ppe-module-number">
                                    MÓDULO 01
                                </span>
                                <h3>Administración de empleados</h3>
                                <p>
                                    Centraliza la información personal y de la
                                    vacante, salario, vacaciones, contratos y
                                    toda la documentación de cada colaborador.
                                </p>
                                <ul>
                                    <li>
                                        <Check size={16} /> Expedientes
                                        laborales completos
                                    </li>
                                    <li>
                                        <Check size={16} /> Documentos
                                        requeridos u opcionales definidos por tu
                                        empresa
                                    </li>
                                    <li>
                                        <Check size={16} /> Revisión y
                                        seguimiento desde un solo perfil
                                    </li>
                                    <li>
                                        <Check size={16} /> Contratos configurables y firmables digitalmente
                                    </li>
                                    <li>
                                        <Check size={16} /> Alertas por correo
                                        de vencimientos y renovaciones
                                    </li>
                                </ul>
                            </div>
                            <div className="ppe-document-demo">
                                <div className="ppe-document-toolbar">
                                    <div>
                                        <span />
                                        <span />
                                        <span />
                                    </div>
                                    <strong>Contrato laboral</strong>
                                    <span>Guardado</span>
                                </div>
                                <div className="ppe-document-workspace">
                                    <aside aria-hidden="true">
                                        <strong>Documentos</strong>
                                        <span className="is-selected">
                                            Contrato laboral
                                        </span>
                                        <span>Reglamento interno</span>
                                        <span>Política de privacidad</span>
                                        <span>Acta de entrega</span>
                                        <button type="button" tabIndex={-1}>
                                            + Nuevo
                                        </button>
                                    </aside>
                                    <div className="ppe-document-page">
                                        <div className="ppe-doc-label">
                                            CONTRATO INDIVIDUAL
                                        </div>
                                        <h4>Contrato de trabajo</h4>
                                        <p>
                                            Celebrado entre{' '}
                                            <mark>Empresa Ejemplo</mark> y
                                            <mark> Ana Martínez</mark>, para el
                                            puesto de
                                            <mark>
                                                {' '}
                                                Supervisora de Operaciones
                                            </mark>
                                            ...
                                        </p>
                                        <div className="ppe-doc-lines">
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                        <div className="ppe-signature">
                                            <PenLine size={21} />
                                            <div>
                                                <strong>Ana Martínez</strong>
                                                <span>
                                                    Firma digital · 10/09/2026
                                                </span>
                                            </div>
                                            <FileCheck2 size={19} />
                                        </div>
                                    </div>
                                </div>
                                <div className="ppe-document-actions">
                                    <span>
                                        <FileSignature size={15} /> Solicitar
                                        firma
                                    </span>
                                    <span>
                                        <Download size={15} /> Imprimir sin
                                        firma
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="ppe-doc-capabilities">
                            <div>
                                <FileSignature size={20} />
                                <strong>Editor de documentos</strong>
                                <span>
                                    Redacta contratos, políticas y reglamentos
                                    dentro del sistema.
                                </span>
                            </div>
                            <div>
                                <CircleUserRound size={20} />
                                <strong>Datos automáticos</strong>
                                <span>
                                    Completa cada plantilla con la información
                                    del empleado al imprimir.
                                </span>
                            </div>
                            <div>
                                <PenLine size={20} />
                                <strong>Firma digital o física</strong>
                                <span>
                                    Guarda el documento firmado o imprímelo sin
                                    firma para tu archivo.
                                </span>
                            </div>
                            <div>
                                <Mail size={20} />
                                <strong>Recordatorios por correo</strong>
                                <span>
                                    Anticípate a contratos y documentos próximos
                                    a vencer.
                                </span>
                            </div>
                        </div>
                    </section>

                    <section className="ppe-workflows">
                        <div className="pp-container pp-section">
                            <div className="ppe-section-intro">
                                <div>
                                    <p className="pp-eyebrow">
                                        02 / Flujos coordinados
                                    </p>
                                    <h2>
                                        Menos mensajes sueltos.
                                        <br />
                                        <b><em>Más decisiones visibles.</em></b>
                                    </h2>
                                </div>
                            </div>
                            <p style={{ margin: "10px 0px" }}>
                                Cada solicitud llega a quien debe decidir,
                                con el contexto necesario y un estatus que
                                todos pueden consultar.
                            </p>
                            <div className="ppe-workflow-grid">
                                {workflowModules.map((module) => (
                                    <article
                                        className={`ppe-workflow-card ppe-tone-${module.tone}`}
                                        key={module.title}
                                    >
                                        <div className="ppe-workflow-top">
                                            <span>
                                                <module.icon size={22} />
                                            </span>
                                            <small>{module.number}</small>
                                        </div>
                                        <h3>{module.title}</h3>
                                        <p>{module.description}</p>
                                        <ul>
                                            {module.points.map((point) => (
                                                <li key={point}>
                                                    <CheckCircle2 size={15} />{' '}
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="pp-container pp-section ppe-controls">
                        <div className="ppe-section-intro">
                            <div>
                                <p className="pp-eyebrow">
                                    03 / Control y continuidad
                                </p>
                                <h2>
                                    La información que necesitas,
                                    <br />
                                    <b><em>cuando la necesitas.</em></b>
                                </h2>
                            </div>
                        </div>
                        <div className="ppe-control-grid">
                            {businessControls.map((control) => (
                                <article key={control.title}>
                                    <span>
                                        <control.icon size={21} />
                                    </span>
                                    <h3>{control.title}</h3>
                                    <p>{control.text}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="ppe-steps" id="como-funciona">
                        <div className="pp-container pp-section">
                            <div className="ppe-steps-heading">
                                <p className="pp-eyebrow">
                                    04 / Así de sencillo
                                </p>
                                <h2>
                                    Empieza con lo que tu empresa necesita hoy.
                                </h2>
                            </div>
                            <div className="ppe-step-grid">
                                <article>
                                    <span>01</span>
                                    <strong>Conocemos tu operación</strong>
                                    <p>
                                        Platicamos sobre tu equipo, procesos y
                                        prioridades.
                                    </p>
                                </article>
                                <article>
                                    <span>02</span>
                                    <strong>Seleccionas tus módulos</strong>
                                    <p>
                                        Activas solo las herramientas que
                                        aportan valor a tu negocio.
                                    </p>
                                </article>
                                <article>
                                    <span>03</span>
                                    <strong>Configuramos tu sistema</strong>
                                    <p>
                                        Ajustamos documentos, permisos y flujos
                                        para tu empresa.
                                    </p>
                                </article>
                            </div>
                        </div>
                    </section>

                    <section
                        className="pp-container pp-section"
                        id="suscripcion"
                    >
                        <div className="ppe-subscription-card">
                            <div className="ppe-subscription-copy">
                                <span className="ppe-subscription-label">
                                    Suscripción flexible
                                </span>
                                <h2>
                                    Un sistema tan completo como tu operación.
                                </h2>
                                <p>
                                    El precio se define según los módulos que
                                    elijas al contratar. Puedes pagar
                                    mensualmente o hacer un solo pago anual con
                                    descuento. Todos los pagos son facturables a
                                    nombre de tu empresa.
                                </p>
                                <div className="ppe-payment-options">
                                    <span>
                                        <CalendarCheck2 size={18} /> Pago
                                        mensual
                                    </span>
                                    <span>
                                        <PackageCheck size={18} /> Anual con
                                        descuento
                                    </span>
                                    <span>
                                        <FileCheck2 size={18} /> Facturación
                                        empresarial
                                    </span>
                                </div>
                                <a
                                    href={demoHref}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="pp-button pp-button-lime"
                                >
                                    Armar una propuesta
                                    <ArrowUpRight
                                        size={18}
                                        aria-hidden="true"
                                    />
                                </a>
                            </div>
                            <div
                                className="ppe-module-selector"
                                aria-label="Ejemplo de selección de módulos"
                            >
                                <div className="ppe-selector-head">
                                    <div>
                                        <small>Tu plan</small>
                                        <strong>Configuración modular</strong>
                                    </div>
                                    <span>Flexible</span>
                                </div>
                                {[
                                    ['Empleados y expedientes', true],
                                    ['Documentos y firma digital', true],
                                    ['Vacaciones y permisos', true],
                                    ['Horarios', false],
                                    ['Uniformes y herramientas', false],
                                ].map(([label, selected]) => (
                                    <div
                                        className={
                                            selected ? 'is-selected' : ''
                                        }
                                        key={String(label)}
                                    >
                                        <span>
                                            {selected ? (
                                                <Check size={14} />
                                            ) : (
                                                '+'
                                            )}
                                        </span>
                                        <strong>{label}</strong>
                                        <small>
                                            {selected ? 'Incluido' : 'Opcional'}
                                        </small>
                                    </div>
                                ))}
                                <p>
                                    La propuesta se adapta al alcance de tu
                                    empresa.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="ppe-support" id="soporte">
                        <div className="pp-container ppe-support-grid">
                            <div>
                                <p className="pp-eyebrow">
                                    05 / Soporte directo
                                </p>
                                <h2>
                                    No te dejamos solo después de implementar.
                                </h2>
                            </div>
                            <div className="ppe-support-copy">
                                <p>
                                    El administrador de tu empresa puede
                                    levantar tickets desde el sistema para
                                    reportar un problema, resolver una duda o
                                    dar seguimiento a una solicitud.
                                </p>
                                <div>
                                    <MessageCircle size={20} />
                                    <span>
                                        <strong>¿Necesitas algo nuevo?</strong>
                                        Podemos conversar dentro del ticket
                                        sobre un módulo o apartado adicional y
                                        preparar el costo de desarrollo.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="ppe-final-cta">
                        <div className="pp-container">
                            <ProductMark />
                            <h2>
                                Menos pendientes dispersos.
                                <br />
                                <em>Una empresa más clara.</em>
                            </h2>
                            <p>
                                Cuéntanos cómo trabaja tu negocio y te ayudamos
                                a elegir el punto de partida.
                            </p>
                            <div>
                                <a
                                    href={demoHref}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="pp-button pp-button-lime"
                                >
                                    Platiquemos por WhatsApp
                                    <MessageCircle size={18} />
                                </a>
                                <a
                                    href={demoEmailHref}
                                    className="ppe-final-email"
                                >
                                    <Mail size={17} />{' '}
                                    pixelperfect.nacif@gmail.com
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
