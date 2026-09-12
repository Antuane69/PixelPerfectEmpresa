import { Head, Link } from '@inertiajs/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { empresarial, home } from '@/routes';

export default function NotFound() {
    return (
        <>
            <Head title="Página no encontrada" />
            <main
                className="relative isolate flex min-h-svh overflow-hidden bg-[#f8f6f2] text-[#211d29] dark:bg-[#17131c] dark:text-[#f7f2ff]"
                aria-labelledby="not-found-title"
                aria-describedby="not-found-description"
            >
                <div
                    className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(33,29,41,0.036)_1px,transparent_1px),linear-gradient(to_bottom,rgba(33,29,41,0.036)_1px,transparent_1px)] [background-size:4rem_4rem] opacity-60 dark:opacity-20"
                    aria-hidden="true"
                />
                <div
                    className="pointer-events-none absolute -top-28 right-[-8rem] size-[34rem] rounded-full bg-[#e9d5ff]/70 blur-3xl dark:bg-[#7e22ce]/20"
                    aria-hidden="true"
                />
                <div
                    className="pointer-events-none absolute top-[28rem] left-[-12rem] size-[28rem] rounded-full bg-[#d9f99d]/60 blur-3xl dark:bg-[#65a30d]/10"
                    aria-hidden="true"
                />

                <div className="mx-auto flex w-full max-w-7xl flex-col px-6 py-6 sm:px-10 lg:px-12">
                    <header className="flex items-center justify-between gap-6">
                        <Link
                            href={home()}
                            aria-label="PixelPerfect, inicio"
                            className="group flex items-center gap-3"
                        >
                            <span className="grid size-9 place-items-center rounded-full bg-[#211d29] text-[#f8f6f2] transition-transform group-hover:rotate-12 dark:bg-[#f7f2ff] dark:text-[#211d29]">
                                <Sparkles size={18} aria-hidden="true" />
                            </span>
                            <span className="flex items-baseline text-[1.15rem] leading-none tracking-[-0.08em]">
                                <span className="font-black">PIXEL</span>
                                <span className="font-serif font-semibold text-[#a855f7] italic dark:text-[#d8b4fe]">
                                    PERFECT
                                </span>
                            </span>
                        </Link>
                        <span className="text-xs font-semibold tracking-[0.18em] text-[#8d8292] uppercase dark:text-[#978a9e]">
                            PixelPerfect
                        </span>
                    </header>

                    <section className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.75fr)] lg:gap-20 lg:py-24">
                        <div className="max-w-2xl">
                            <p className="mb-7 flex items-center gap-3 text-[0.7rem] font-bold tracking-[0.22em] text-[#9743d5] uppercase dark:text-[#d8b4fe]">
                                <span className="size-2 rounded-full bg-[#a855f7] shadow-[0_0_0_5px_rgba(168,85,247,0.12)]" />
                                Error 404
                            </p>
                            <h1
                                id="not-found-title"
                                className="max-w-3xl text-[clamp(3.5rem,8vw,7rem)] leading-[0.88] font-black tracking-[-0.09em] text-balance"
                            >
                                Esta página tomó
                                <br />
                                <em className="font-serif font-medium text-[#9743d5] dark:text-[#d8b4fe]">
                                    otra ruta.
                                </em>
                            </h1>
                            <p
                                id="not-found-description"
                                className="mt-8 max-w-lg text-lg leading-8 text-[#6d6475] dark:text-[#b9acbf]"
                            >
                                La dirección que intentaste abrir no existe o ya
                                no está disponible. Regresemos a un lugar
                                conocido.
                            </p>
                            <div className="mt-10 flex flex-wrap items-center gap-4">
                                <Link
                                    href={home()}
                                    className="inline-flex h-12 items-center gap-3 rounded-full bg-[#211d29] px-6 text-sm font-semibold text-[#f8f6f2] shadow-xl shadow-[#211d29]/15 transition-transform hover:-translate-y-0.5 hover:bg-[#3c3446] focus-visible:ring-2 focus-visible:ring-[#9743d5] focus-visible:ring-offset-4 dark:bg-[#f7f2ff] dark:text-[#211d29] dark:hover:bg-white"
                                >
                                    Volver al inicio
                                    <ArrowUpRight
                                        size={18}
                                        aria-hidden="true"
                                    />
                                </Link>
                                <Link
                                    href={empresarial()}
                                    className="inline-flex h-12 items-center rounded-full px-5 text-sm font-semibold text-[#6d6475] transition-colors hover:bg-white hover:text-[#211d29] focus-visible:ring-2 focus-visible:ring-[#9743d5] focus-visible:ring-offset-4 dark:text-[#b9acbf] dark:hover:bg-white/10 dark:hover:text-[#f7f2ff]"
                                >
                                    Ver Empresarial
                                </Link>
                            </div>
                        </div>

                        <div
                            className="relative flex min-h-80 items-center justify-center overflow-hidden rounded-[2rem] bg-[#211d29] p-8 text-[#f8f6f2] shadow-2xl shadow-[#211d29]/20"
                            aria-hidden="true"
                        >
                            <div className="absolute -top-20 right-[-4rem] size-64 rounded-full bg-[#9743d5]/30 blur-3xl" />
                            <div className="absolute -bottom-24 left-[-3rem] size-64 rounded-full bg-[#d9f99d]/25 blur-3xl" />
                            <div className="relative text-center">
                                <p className="text-xs font-semibold tracking-[0.2em] text-[#d9f99d] uppercase">
                                    Route not found
                                </p>
                                <span className="mt-3 block text-[clamp(7rem,18vw,12rem)] leading-none font-black tracking-[-0.12em] text-[#f8f6f2]">
                                    404
                                </span>
                                <div className="mx-auto mt-5 flex w-fit items-center gap-2">
                                    <span className="size-2 rounded-full bg-[#d9f99d]" />
                                    <span className="size-2 rounded-full bg-[#c4b5fd]" />
                                    <span className="size-2 rounded-full bg-[#f9a8d4]" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <footer className="flex items-center justify-between gap-4 border-t border-[#211d29]/10 pt-5 text-xs text-[#8d8292] dark:border-white/10 dark:text-[#978a9e]">
                        <span>Pixel Perfect · México</span>
                        <span>Diseño y desarrollo a la medida</span>
                    </footer>
                </div>
            </main>
        </>
    );
}
