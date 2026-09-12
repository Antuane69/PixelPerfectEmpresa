export type PortfolioProject = {
    id: string;
    category: 'Aplicaciones' | 'Sitios web' | 'Diseños';
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    status: string;
    images: string[];
    imageType: 'captura' | 'mockup' | 'exploración';
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
            'Desarrollo de aplicaciones para los hoteles Buenaventura Grand, Villa Premiere y Hacienda Buenaventura. Incluye el módulo de control de documentos de cuentas por pagar y sistemas internos que funcionan dentro de los hoteles para sus 600 colaboradores.',
        tags: ['Hotelería', 'Aplicaciones web'],
        status: 'Portal público + sistemas internos privados',
        imageType: 'captura',
        images: [
            '/images/projects/cxp-1.png',
            '/images/projects/cxp-2.png',
            '/images/projects/buenaventura-logo.png',
        ],
        url: 'https://cxp.buenaventurahoteles.com/',
        preview: 'hotel',
        note: 'La captura muestra el módulo público de acceso para las propiedades del grupo.',
    },
    {
        id: 'meson-de-mita',
        category: 'Sitios web',
        title: 'La experiencia comienza en la web.',
        subtitle: 'Hotel Mesón de Mita · Sitio web',
        description:
            'Un sitio para descubrir el Hotel Mesón de Mita: habitaciones, servicios, promociones y reservas para bodas directamente desde el sitio.',
        tags: ['Hotelería', 'Sitio web'],
        status: 'Sitio público',
        imageType: 'captura',
        images: [
            '/images/projects/meson-1.png',
            '/images/projects/meson-2.png',
            '/images/projects/meson-3.png',
            '/images/projects/meson-4.png',
            '/images/projects/meson-5.png',
            '/images/projects/meson-6.png',
        ],
        url: 'https://hotelmesondemita.com/',
        preview: 'hotel',
        note: 'Captura del sitio público de Hotel Mesón de Mita, con navegación y módulo de reservaciones.',
    },
    {
        id: 'little-tokyo',
        category: 'Aplicaciones',
        title: 'Detrás de una gran experiencia.',
        subtitle: 'Little Tokyo · Administración',
        description:
            'Una aplicación de administración para el restaurante Little Tokyo en Guadalajara. El sistema cuenta con acceso privado para administradores y se encarga de gestionar empleados, contratos, vacaciones, permisos y horarios.',
        tags: ['Restaurantes', 'Administración'],
        status: 'Acceso privado',
        imageType: 'mockup',
        images: [
            '/images/projects/little-tokyo-1.png',
            '/images/projects/little-tokyo-2.png',
            '/images/projects/little-tokyo-3.png',
            '/images/projects/little-tokyo-4.png',
            '/images/projects/little-tokyo-5.png',
            '/images/projects/little-tokyo-6.png',
            '/images/projects/little-tokyo-logo.png',
        ],
        preview: 'restaurant',
        note: 'Mockup visual de referencia para presentar el sistema sin exponer información privada.',
    },
    {
        id: 'strataz',
        category: 'Aplicaciones',
        title: 'Datos deportivos, otra perspectiva.',
        subtitle: 'Strataz · Plataforma de análisis deportivo',
        description:
            'Una plataforma para visualizar estadísticas deportivas en vivo y explorar análisis potenciados con inteligencia artificial. Un proyecto para una startup que aún no se ha publicado.',
        tags: ['Estadísticas en vivo', 'Inteligencia artificial'],
        status: 'Proyecto en preparación',
        imageType: 'mockup',
        images: [
            '/images/projects/strataz-1.png',
            '/images/projects/strataz-2.png',
            '/images/projects/strataz-3.png',
            '/images/projects/strataz-4.png',
            '/images/projects/strataz-5.png',
            '/images/projects/strataz-6.png',
            '/images/projects/strataz-logo.png',
        ],
        preview: 'sports',
        note: 'Mockup visual de referencia; la plataforma todavía no se encuentra publicada.',
    },
    {
        id: 'pixelperfect',
        category: 'Diseños',
        title: 'Una identidad que se siente propia.',
        subtitle: 'PixelPerfect · Identidad y experiencia web',
        description:
            'Una empresa enfocada en crear experiencias digitales únicas y memorables.',
        tags: ['Diseño web', 'Identidad visual'],
        status: 'Proyecto propio',
        imageType: 'exploración',
        images: [
            '/images/projects/pixel-restaurantes-1.png',
            '/images/projects/pixel-restaurantes-2.png',
            '/images/projects/pixel-restaurantes-3.png',
            '/images/projects/pixel-restaurantes-4.png',
            '/images/projects/pixel-restaurantes-5.png',
            '/images/projects/pixel-restaurantes-6.png',
            '/images/projects/pixel-1.png',
            '/images/projects/pixel-2.png',
            '/images/projects/pixelperfect-logo.png',
        ],
        preview: 'brand',
        note: 'Captura de exploración visual basada en la identidad de PixelPerfect.',
    },
];

export const companies = [
    {
        name: 'Grupo Hotelero Buenaventura',
        sector: 'Hotelería',
        project: 'buenaventura',
        mark: 'HB',
        tone: 'navy',
        logo: '/images/projects/buenaventura-logo.png',
        image: '/images/projects/cxp-1.png',
        imageAlt:
            'Módulo de control de documentos de cuentas por pagar de Hoteles Buenaventura',
    },
    {
        name: 'Mesón de Mita',
        sector: 'Hotelería',
        project: 'meson-de-mita',
        mark: 'MM',
        tone: 'sunset',
        logo: '/images/projects/meson-de-mita-logo.png',
        image: '/images/projects/meson-1.png',
        imageAlt: 'Sitio web de Hotel Mesón de Mita',
    },
    {
        name: 'Little Tokyo',
        sector: 'Restaurantes',
        project: 'little-tokyo',
        mark: 'LT',
        tone: 'sakura',
        logo: '/images/projects/little-tokyo-logo.png',
        image: '/images/projects/little-tokyo-1.png',
        imageAlt: 'Mockup del sistema de administración de Little Tokyo',
    },
    {
        name: 'Strataz',
        sector: 'Startup deportiva',
        project: 'strataz',
        mark: 'S',
        tone: 'violet',
        logo: '/images/projects/strataz-logo.png',
        image: '/images/projects/strataz-1.png',
        imageAlt: 'Mockup de la plataforma de análisis deportivo Strataz',
    },
    {
        name: 'Pixel Perfect',
        sector: 'Empresa',
        project: 'pixelperfect',
        mark: 'PP',
        tone: 'violet',
        logo: '/images/projects/pixelperfect-logo.png',
        image: '/images/projects/pixel-restaurantes-1.png',
        imageAlt: 'Sistema de identidad visual de PixelPerfect, con exploración de colores y tipografía',
    },
];
