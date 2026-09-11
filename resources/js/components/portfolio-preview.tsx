import {
    ArrowUpRight,
    Blocks,
    Check,
    LayoutDashboard,
    LockKeyhole,
    MoreHorizontal,
    Sparkles,
    UsersRound,
} from 'lucide-react';

export function PortfolioPreview({
    variant,
}: {
    variant: 'platform' | 'brand';
}) {
    if (variant === 'brand') {
        return (
            <div
                className="pp-brand-preview"
                aria-label="Exploración visual de la identidad PixelPerfect"
            >
                <div className="pp-brand-top">
                    <Sparkles size={20} aria-hidden="true" />
                    <span>ESTUDIO DE DESARROLLO & DISEÑO</span>
                </div>
                <div className="pp-brand-type">
                    <strong>PIXEL</strong>
                    <em>PERFECT</em>
                    <span>Ideas claras. Cada píxel cuenta.</span>
                </div>
                <div className="pp-brand-bottom">
                    <div className="pp-brand-swatches">
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    <span>
                        Aa <em>Aa</em>
                    </span>
                    <ArrowUpRight size={27} aria-hidden="true" />
                </div>
            </div>
        );
    }

    return (
        <div
            className="pp-dashboard-preview"
            aria-label="Vista ilustrativa del sistema de gestión PixelPerfect, con datos de ejemplo"
        >
            <div className="pp-dashboard-bar">
                <div>
                    <Sparkles size={15} aria-hidden="true" />
                    <strong>
                        PIXEL<span> / workspace</span>
                    </strong>
                </div>
                <MoreHorizontal size={21} aria-hidden="true" />
            </div>
            <div className="pp-dashboard-body">
                <div className="pp-dashboard-sidebar" aria-hidden="true">
                    <span className="is-selected">
                        <LayoutDashboard size={17} />
                    </span>
                    <UsersRound size={17} />
                    <Blocks size={17} />
                    <LockKeyhole size={17} />
                    <span className="pp-sidebar-avatar">P</span>
                </div>
                <div className="pp-dashboard-content">
                    <div className="pp-dashboard-greeting">
                        <div>
                            <span>TODO EN SU LUGAR</span>
                            <h3>Tu operación, en foco.</h3>
                        </div>
                        <span className="pp-dashboard-avatar">P</span>
                    </div>
                    <div className="pp-dashboard-stats">
                        <div>
                            <span>
                                Personas activas{' '}
                                <UsersRound size={14} aria-hidden="true" />
                            </span>
                            <strong>248</strong>
                            <small>
                                Tu equipo, conectado{' '}
                                <ArrowUpRight size={13} aria-hidden="true" />
                            </small>
                        </div>
                        <div>
                            <span>
                                Accesos seguros{' '}
                                <LockKeyhole size={14} aria-hidden="true" />
                            </span>
                            <strong>100%</strong>
                            <small>
                                Todo bajo control{' '}
                                <Check size={13} aria-hidden="true" />
                            </small>
                        </div>
                    </div>
                    <div className="pp-dashboard-activity">
                        <div className="pp-activity-title">
                            <strong>Actividad reciente</strong>
                            <span>Vista general</span>
                        </div>
                        {[
                            ['Nuevo expediente creado', 'Personas', 'lime'],
                            ['Permiso actualizado', 'Accesos', 'purple'],
                            ['Catálogo sincronizado', 'Catálogos', 'peach'],
                        ].map(([label, category, color]) => (
                            <div className="pp-activity-row" key={label}>
                                <span
                                    className={`pp-activity-dot pp-${color}`}
                                />
                                <span>{label}</span>
                                <small>{category}</small>
                                <Check size={13} aria-hidden="true" />
                            </div>
                        ))}
                    </div>
                    <div className="pp-dashboard-footer">
                        <span>
                            <span /> Cada proceso, conectado.
                        </span>
                        <span>PIXEL PERFECT</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
