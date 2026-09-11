export type PortfolioProject = {
    id: string;
    category: 'Aplicaciones' | 'Sitios web' | 'Diseños';
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    status: string;
    image?: string;
    url?: string;
    preview: 'hotel' | 'restaurant' | 'sports' | 'brand';
    note: string;
};

export const projects: PortfolioProject[] = [
    {
        id: 'buenaventura',
        category: 'Aplicaciones',
        title: 'Tecnología para un grupo hotelero.',
        subtitle: 'Grupo Buenaventura · Sistemas web',
        description:
            'Desarrollo de aplicaciones para Buenaventura Grand, Villa Premiere y Hacienda Buenaventura. Incluye el portal de control de documentos de cuentas por pagar y sistemas que funcionan dentro de los hoteles.',
        tags: ['Hotelería', 'Aplicaciones web'],
        status: 'Portal público + sistemas internos',
        image: '/images/projects/buenaventura.png',
        url: 'https://cxp.buenaventurahoteles.com/',
        preview: 'hotel',
        note: 'La captura muestra el portal público. Las aplicaciones internas se presentarán con imágenes adicionales.',
    },
    {
        id: 'meson-de-mita',
        category: 'Sitios web',
        title: 'La experiencia comienza en la web.',
        subtitle: 'Hotel Mesón de Mita · Sitio web',
        description:
            'Un sitio para descubrir el Hotel Mesón de Mita: habitaciones, servicios, promociones y una experiencia frente al mar en Punta de Mita.',
        tags: ['Hotelería', 'Sitio web'],
        status: 'Sitio público',
        image: '/images/projects/meson-de-mita.png',
        url: 'https://hotelmesondemita.com/',
        preview: 'hotel',
        note: 'Captura del sitio público de Hotel Mesón de Mita.',
    },
    {
        id: 'little-tokyo',
        category: 'Aplicaciones',
        title: 'Detrás de una gran experiencia.',
        subtitle: 'Little Tokyo · Administración',
        description:
            'Una aplicación de administración para el restaurante Little Tokyo en Guadalajara. El sistema cuenta con acceso privado; su presentación visual se incorporará mediante capturas del proyecto.',
        tags: ['Restaurantes', 'Administración'],
        status: 'Acceso privado',
        preview: 'restaurant',
        note: 'Sistema con inicio de sesión. Capturas del proyecto próximamente.',
    },
    {
        id: 'strataz',
        category: 'Aplicaciones',
        title: 'Datos deportivos, otra perspectiva.',
        subtitle: 'Strataz · Plataforma de análisis deportivo',
        description:
            'Una plataforma para visualizar estadísticas deportivas en vivo y explorar análisis potenciados con inteligencia artificial. Un proyecto para una startup que aún no se ha publicado.',
        tags: ['Estadísticas en vivo', 'Inteligencia artificial'],
        status: 'Próximo lanzamiento',
        preview: 'sports',
        note: 'Proyecto aún no publicado. Capturas próximamente.',
    },
    {
        id: 'pixelperfect',
        category: 'Diseños',
        title: 'Una identidad que se siente propia.',
        subtitle: 'PixelPerfect · Identidad y experiencia web',
        description:
            'La dirección visual de PixelPerfect: tipografía de alto contraste, acentos morados y verde lima, y una página de inicio que da protagonismo a lo esencial.',
        tags: ['Diseño web', 'Identidad visual'],
        status: 'Proyecto propio',
        preview: 'brand',
        note: 'Exploración visual basada en la identidad de PixelPerfect.',
    },
];

export const companies = [
    {
        name: 'Buenaventura Grand',
        sector: 'Grupo Buenaventura',
        project: 'buenaventura',
    },
    {
        name: 'Villa Premiere',
        sector: 'Grupo Buenaventura',
        project: 'buenaventura',
    },
    {
        name: 'Hacienda Buenaventura',
        sector: 'Grupo Buenaventura',
        project: 'buenaventura',
    },
    { name: 'Mesón de Mita', sector: 'Hotelería', project: 'meson-de-mita' },
    {
        name: 'Little Tokyo',
        sector: 'Restaurantes · Guadalajara',
        project: 'little-tokyo',
    },
    { name: 'Strataz', sector: 'Tecnología deportiva', project: 'strataz' },
];
