import { cloneElement, isValidElement, type ReactNode } from 'react';
import { Link, usePage } from '@inertiajs/react';

export type Locale = 'es' | 'en';

const englishTranslations: Record<string, string> = {
    'Seleccionar idioma': 'Select language',
    Español: 'Spanish',
    'Hola, me gustaría platicar sobre una aplicación para mi negocio.':
        "Hi, I'd like to discuss an application for my business.",
    'Tengo un proyecto en mente': 'I have a project in mind',
    'Solicitud de cotización': 'Quote request',
    'Hola, quiero hacer una cotización con Pixel Perfect. ¿Me pueden ayudar, por favor?':
        "Hi, I'd like a quote from Pixel Perfect. Can you help me, please?",
    'Pixel Perfect Empresarial': 'Pixel Perfect Business',
    Empresarial: 'Business',
    Módulos: 'Modules',
    Suscripción: 'Subscription',
    Soporte: 'Support',
    Resumen: 'Overview',
    Empleados: 'Employees',
    Solicitudes: 'Requests',
    Horarios: 'Schedules',
    Inventarios: 'Inventory',
    Documentos: 'Documents',
    Vacaciones: 'Vacation',
    Guardado: 'Saved',
    Flexible: 'Flexible',
    Incluido: 'Included',
    Opcional: 'Optional',
    Personas: 'People',
    Accesos: 'Access',
    Catálogos: 'Catalogs',
    Aplicaciones: 'Applications',
    'Sitios web': 'Websites',
    Diseños: 'Designs',
    Hotelería: 'Hospitality',
    'Aplicaciones web': 'Web applications',
    'Portal público + sistemas internos privados':
        'Public portal + private internal systems',
    'Sitio web': 'Website',
    'Sitio público': 'Public website',
    Restaurantes: 'Restaurants',
    Administración: 'Administration',
    'Acceso privado': 'Private access',
    'Estadísticas en vivo': 'Live statistics',
    'Inteligencia artificial': 'Artificial intelligence',
    'Proyecto en preparación': 'Project in progress',
    'Diseño web': 'Web design',
    'Identidad visual': 'Visual identity',
    'Proyecto propio': 'In-house project',
    Captura: 'Screenshot',
    captura: 'Screenshot',
    Mockup: 'Mockup',
    mockup: 'Mockup',
    Exploración: 'Exploration',
    exploración: 'Exploration',
    'Tecnología para un grupo hotelero.': 'Technology for a hotel group.',
    'Grupo Buenaventura · Sistemas web': 'Grupo Buenaventura · Web systems',
    'Desarrollo de aplicaciones para los hoteles Buenaventura Grand, Villa Premiere y Hacienda Buenaventura. Incluye el módulo de control de documentos de cuentas por pagar y sistemas internos que funcionan dentro de los hoteles para sus 600 colaboradores.':
        'Applications for Buenaventura Grand, Villa Premiere, and Hacienda Buenaventura hotels. Includes an accounts payable document control module and internal hotel systems used by 600 team members.',
    'La captura muestra el módulo público de acceso para las propiedades del grupo.':
        'This screenshot shows the public access module for the group’s properties.',
    'La experiencia comienza en la web.': 'The experience starts online.',
    'Hotel Mesón de Mita · Sitio web': 'Hotel Mesón de Mita · Website',
    'Un sitio para descubrir el Hotel Mesón de Mita: habitaciones, servicios, promociones y reservas para bodas directamente desde el sitio.':
        'A website to discover Hotel Mesón de Mita: rooms, services, promotions, and wedding bookings, all in one place.',
    'Captura del sitio público de Hotel Mesón de Mita, con navegación y módulo de reservaciones.':
        'Screenshot of Hotel Mesón de Mita’s public website, with navigation and a reservation module.',
    'Detrás de una gran experiencia.': 'Behind a great experience.',
    'Little Tokyo · Administración': 'Little Tokyo · Administration',
    'Una aplicación de administración para el restaurante Little Tokyo en Guadalajara. El sistema cuenta con acceso privado para administradores y se encarga de gestionar empleados, contratos, vacaciones, permisos y horarios.':
        'A management app for Little Tokyo restaurant in Guadalajara. Administrators can privately manage employees, contracts, vacation, leave, and schedules.',
    'Mockup visual de referencia para presentar el sistema sin exponer información privada.':
        'A reference mockup that presents the system without exposing private information.',
    'Datos deportivos, otra perspectiva.': 'Sports data, a new perspective.',
    'Strataz · Plataforma de análisis deportivo':
        'Strataz · Sports analytics platform',
    'Una plataforma para visualizar estadísticas deportivas en vivo y explorar análisis potenciados con inteligencia artificial. Un proyecto para una startup que aún no se ha publicado.':
        'A platform for live sports statistics and AI-powered analysis. A project for a startup that has not launched yet.',
    'Mockup visual de referencia; la plataforma todavía no se encuentra publicada.':
        'A reference mockup; the platform is not available yet.',
    'Una identidad que se siente propia.':
        'An identity that feels like your own.',
    'PixelPerfect · Identidad y experiencia web':
        'PixelPerfect · Brand identity and web experience',
    'Una empresa enfocada en crear experiencias digitales únicas y memorables.':
        'A company focused on creating unique, memorable digital experiences.',
    'Captura de exploración visual basada en la identidad de PixelPerfect.':
        'An exploration of PixelPerfect’s visual identity.',
    'Grupo Hotelero Buenaventura': 'Grupo Hotelero Buenaventura',
    'Módulo de control de documentos de cuentas por pagar de Hoteles Buenaventura':
        'Accounts payable document control module for Hoteles Buenaventura',
    'Mesón de Mita': 'Mesón de Mita',
    'Sitio web de Hotel Mesón de Mita': 'Hotel Mesón de Mita website',
    'Mockup del sistema de administración de Little Tokyo':
        'Little Tokyo management system mockup',
    'Startup deportiva': 'Sports startup',
    'Mockup de la plataforma de análisis deportivo Strataz':
        'Strataz sports analytics platform mockup',
    Empresa: 'Business',
    'Sistema de identidad visual de PixelPerfect, con exploración de colores y tipografía':
        'PixelPerfect visual identity system, exploring color and typography',
    'Diseño y creación de páginas web': 'Website design and development',
    'Creamos páginas web para presentar tu negocio, mostrar tus servicios y facilitar que tus clientes te contacten. Diseño adaptable a celulares, tabletas y computadoras.':
        'We build websites to present your business, showcase your services, and make it easy for customers to contact you. Designed for phones, tablets, and computers.',
    'Páginas web · Para todos los dispositivos': 'Websites · For every device',
    'Sistemas de gestión para negocios': 'Business management systems',
    'Desarrollamos sistemas de administración de empresas para centralizar información, automatizar procesos y consultar estadísticas y reportes. Herramientas que crecen con tu negocio.':
        'We build business management systems to centralize information, automate processes, and view reports and analytics. Tools that grow with your business.',
    'Gestión · Automatización · Integraciones':
        'Management · Automation · Integrations',
    'Programación y diseño a la medida': 'Custom software and design',
    'Trabaja con un equipo de programadores que entiende tu operación. Desarrollamos aplicaciones e interfaces claras para resolver necesidades concretas de tu empresa.':
        'Work with a team of developers who understand your operations. We build clear applications and interfaces to solve your company’s specific needs.',
    'Diseño enfocado en la experiencia del usuario':
        'Design focused on the user experience',
    'Proyectos de empresas que han confiado en PixelPerfect':
        'Projects from companies that trust PixelPerfect',
    'IMAGENES DEL PROYECTO': 'PROJECT IMAGES',
    'Vista de portafolio': 'Portfolio preview',
    'Diseño y desarrollo a la medida': 'Custom design and development',
    'Más información': 'Learn more',
    'Seleccionar empresa': 'Select a company',
    'Controles del carrusel': 'Carousel controls',
    'Cliente anterior': 'Previous client',
    'Cliente siguiente': 'Next client',
    'Seleccionar cliente': 'Select a client',
    'Pausar movimiento automático': 'Pause automatic movement',
    'Reanudar movimiento automático': 'Resume automatic movement',
    'Visitar sitio público': 'Visit public website',
    'Quiero algo así para mi negocio':
        'I want something like this for my business',
    'Saltar al contenido': 'Skip to content',
    'PixelPerfect, inicio': 'PixelPerfect, home',
    'Pixel Perfect, inicio': 'Pixel Perfect, home',
    'Navegación principal': 'Main navigation',
    'Cerrar menú': 'Close menu',
    'Abrir menú': 'Open menu',
    'Cerrar navegación': 'Close navigation',
    'Abrir navegación': 'Open navigation',
    'Navegación móvil': 'Mobile navigation',
    Servicios: 'Services',
    Contacto: 'Contact',
    Plantillas: 'Templates',
    Inicio: 'Home',
    'Diseño web para negocios de todo México':
        'Web design for businesses across Mexico',
    'Da el siguiente': 'Take the next',
    'gran paso': 'big step',
    'en tu negocio.': 'in your business.',
    'Creamos páginas web y sistemas para negocios de todo México, incluidos Guadalajara y Puerto Vallarta. Diseño y desarrollo de software para crecer y destacar.':
        'We build websites and software for businesses across Mexico, including Guadalajara and Puerto Vallarta. Digital products designed to help you grow and stand out.',
    'A tu medida, de principio a fin.': 'Made for you, from start to finish.',
    'Nuestro trabajo': 'Our work',
    'Optimización de búsqueda en Google': 'Google search optimization',
    'Desarrollo a tu medida': 'Custom development',
    'Diseño responsivo para tabletas, celulares y computadoras':
        'Responsive design for tablets, phones, and computers',
    'IDEA → DISEÑO → DESARROLLO': 'IDEA → DESIGN → DEVELOPMENT',
    'Hecho para tu negocio.': 'Built for your business.',
    'No al revés.': 'Never the other way around.',
    '01 / Lo que hacemos': '01 / What we do',
    'Páginas web y sistemas.': 'Websites and software.',
    'Diseñados para hacer crecer tu negocio.':
        'Designed to grow your business.',
    'La tecnología debe ayudarte a avanzar. Nuestro principal objetivo es que tu negocio optimice sus procesos y desarrolle herramientas que eviten trabajo repetitivo.':
        'Technology should help you move forward. Our goal is to help your business improve its processes and use tools that reduce repetitive work.',
    'Nuestro sistema': 'Our platform',
    'Todo lo que pasa en tu empresa,': 'Everything happening in your business,',
    'en un solo lugar.': 'all in one place.',
    'Prueba nuestra plataforma modular para organizar empleados, expedientes, documentos y firmas, vacaciones, horarios, inventarios y estadísticas sin perder el control entre archivos y mensajes sueltos.':
        'Try our modular platform to organize employees, records, documents and signatures, vacation, schedules, inventory, and analytics without losing track across scattered files and messages.',
    'Elige solo los módulos que necesitas': 'Choose only the modules you need',
    'Suscripción mensual o anual': 'Monthly or annual subscription',
    'Soporte desde la plataforma': 'Support from the platform',
    'Conocer nuestro sistema de gestión': 'Explore our management system',
    'Resumen de tu empresa': 'Business overview',
    Hoy: 'Today',
    'Equipo activo': 'Active team',
    '+3 este mes': '+3 this month',
    'Por autorizar': 'Awaiting approval',
    '2 urgentes': '2 urgent',
    '2 son urgentes': '2 are urgent',
    'Actividad reciente': 'Recent activity',
    'Vacaciones autorizadas': 'Vacation approved',
    Ayer: 'Yesterday',
    'Contrato firmado': 'Contract signed',
    'Inventario actualizado': 'Inventory updated',
    'Documento firmado': 'Document signed',
    'Expediente actualizado': 'Employee record updated',
    '03 / Hagamos que suceda': '03 / Let’s make it happen',
    '03 / Empresas que han confiado en nosotros':
        '03 / Businesses that trust us',
    'Grandes ideas,': 'Big ideas,',
    'grandes clientes.': 'great clients.',
    'Detrás de cada proyecto hay un equipo, una idea y un negocio que quiere llegar más lejos.':
        'Behind every project is a team, an idea, and a business ready to go further.',
    y: 'and',
    '¿Tienes una idea?': 'Have an idea?',
    'Démosle forma.': 'Let’s shape it.',
    'Cuéntanos qué necesitas. El primer paso es una buena conversación, nuestro equipo te escuchará y te ayudará a definir la mejor solución para tu negocio.':
        'Tell us what you need. It starts with a good conversation. Our team will listen and help you find the right solution for your business.',
    'Platiquemos por WhatsApp': 'Let’s talk on WhatsApp',
    'Hola, me interesó una de las plantillas de Pixel Perfect. Quisiera recibir más información.':
        "Hi, I'm interested in one of Pixel Perfect's templates. I'd like to learn more.",
    'Información sobre plantillas': 'Information about templates',
    'Implementación rápida': 'Quick launch',
    'Partimos de una experiencia ya diseñada y probada para publicar tu sitio en mucho menos tiempo.':
        'Start with a proven, ready-made design and get your website online much faster.',
    'Inversión accesible': 'Affordable investment',
    'El costo es menor que un desarrollo desde cero porque la base visual y funcional ya está construida.':
        'It costs less than a custom build because the visual and functional foundation is already in place.',
    'Personalizada para ti': 'Made for you',
    'Adaptamos colores, contenidos, imágenes y datos de contacto para que la plantilla represente a tu negocio.':
        'We tailor the colors, content, images, and contact details so the template feels like your business.',
    'Soluciones listas para crecer': 'Ready-to-grow solutions',
    'Tu negocio en línea,': 'Your business online,',
    'más rápido.': 'faster.',
    'Esta colección reúne plantillas profesionales que podemos implementar y personalizar para tu negocio. Una alternativa rápida y más económica que desarrollar cada pantalla desde cero.':
        'This collection features professional templates we can customize and launch for your business. A faster, more affordable option than building every screen from scratch.',
    'Ver plantillas': 'View templates',
    'Ver menú': 'View menu',
    'Cuéntanos de tu negocio': 'Tell us about your business',
    'Primera plantilla': 'First template',
    '01 / Plantillas disponibles': '01 / Available templates',
    'Una base profesional, lista para hacerla tuya.':
        'A professional foundation, ready to make your own.',
    'Empezamos con restaurantes. La colección crecerá con nuevas opciones para distintos tipos de negocio.':
        'We’re starting with restaurants. The collection will grow with options for more types of businesses.',
    'Abrir la demo de la plantilla para restaurantes':
        'Open the restaurant template demo',
    'Interior cálido de un restaurante con mesas de madera y plantas':
        'A warm restaurant interior with wooden tables and plants',
    'Demo disponible': 'Demo available',
    'Navega la experiencia completa': 'Explore the full experience',
    Gastronomía: 'Food and dining',
    Restaurante: 'Restaurant',
    Menú: 'Menu',
    'Sitio completo con página de inicio, menú por categorías, galería, promoción, ubicación y llamadas de contacto.':
        'A complete website with a home page, menu categories, gallery, promotion, location, and contact options.',
    'Diseño adaptable a celular y computadora':
        'Designed for phones and computers',
    'WhatsApp y correo listos para recibir clientes':
        'WhatsApp and email ready to connect with customers',
    'Colores, platillos e imágenes personalizables':
        'Customizable colors, dishes, and images',
    'Abrir demo del restaurante': 'Open the restaurant demo',
    '¿Te gustó una plantilla?': 'Like a template?',
    'La adaptamos a tu negocio y te ayudamos a publicarla.':
        'We’ll tailor it to your business and help you launch it.',
    'Contactar por WhatsApp': 'Contact us on WhatsApp',
    'Contactar por correo': 'Contact us by email',
    'Me intereso la demo de restaurantes. Quisiera recibir más información.':
        "I'm interested in the restaurant demo. I'd like to learn more.",
    'Demo de restaurantes': 'Restaurant demo',
    Todo: 'All',
    Entradas: 'Starters',
    'Platos fuertes': 'Main courses',
    Ensaladas: 'Salads',
    Bebidas: 'Drinks',
    Postres: 'Desserts',
    'Pasta de la casa': 'House pasta',
    'Salsa cremosa, tomates cherry y albahaca.':
        'Creamy sauce, cherry tomatoes, and basil.',
    'Hamburguesa artesanal': 'Craft burger',
    'Carne a la parrilla, queso y papas doradas.':
        'Grilled beef, cheese, and golden fries.',
    'Ensalada del huerto': 'Garden salad',
    'Hojas frescas, aguacate y vegetales de temporada.':
        'Fresh greens, avocado, and seasonal vegetables.',
    Bruschettas: 'Bruschetta',
    'Pan tostado, tomate y albahaca fresca.':
        'Toasted bread, tomato, and fresh basil.',
    'Limonada natural': 'Fresh lemonade',
    'Limón recién exprimido y un toque de frescura.':
        'Freshly squeezed lemon with a refreshing twist.',
    'Tarta de frutos rojos': 'Berry tart',
    'El final dulce perfecto para tu comida.':
        'The perfect sweet ending to your meal.',
    'Av. México s/n, Hipódromo, Cuauhtémoc, 06100 Ciudad de México, CDMX':
        'Av. México s/n, Hipódromo, Cuauhtémoc, 06100 Mexico City, CDMX',
    'Ingredientes de calidad': 'Quality ingredients',
    'Productos frescos y locales para un sabor auténtico.':
        'Fresh, local ingredients for authentic flavor.',
    'Cocina con pasión': 'Made with care',
    'Recetas cuidadas en cada detalle.':
        'Recipes crafted with care in every detail.',
    'Ambiente único': 'A one-of-a-kind atmosphere',
    'Un lugar para compartir y crear buenos recuerdos.':
        'A place to gather and make good memories.',
    'Atención cercana': 'Friendly service',
    'Te recibimos como en casa, siempre con una sonrisa.':
        'We welcome you like family, always with a smile.',
    'El espacio': 'The space',
    'Nuestra cocina': 'Our kitchen',
    Momentos: 'Moments',
    'Un rincón para compartir': 'A place to gather',
    'Interior cálido del restaurante con mesas de madera y plantas':
        'A warm restaurant interior with wooden tables and plants',
    'El sabor de la casa': 'A taste of home',
    'Pasta de la casa servida en una mesa del restaurante':
        'House pasta served at a restaurant table',
    'También para llevar': 'Also available to go',
    'Presentación de comida para llevar del restaurante':
        'Restaurant takeout meal presentation',
    'Pasta hecha al momento': 'Freshly made pasta',
    'Pasta cremosa con tomates cherry y albahaca':
        'Creamy pasta with cherry tomatoes and basil',
    'Nuestra hamburguesa artesanal': 'Our craft burger',
    'Hamburguesa artesanal acompañada de papas doradas':
        'Craft burger served with golden fries',
    'Fresco y de temporada': 'Fresh and seasonal',
    'Ensalada del huerto con aguacate y vegetales frescos':
        'Garden salad with avocado and fresh vegetables',
    'Para comenzar juntos': 'Made for sharing',
    'Bruschettas para compartir con tomate y albahaca':
        'Bruschetta to share with tomato and basil',
    'Sobremesas que se alargan': 'Stay a little longer',
    'Limonada natural servida en la mesa': 'Fresh lemonade served at the table',
    'El momento dulce': 'A sweet moment',
    'Tarta de frutos rojos preparada en el restaurante':
        'Berry tart made at the restaurant',
    'Ingredientes frescos': 'Fresh ingredients',
    'Lo mejor de cada temporada.': 'The best of every season.',
    'Hecho al momento': 'Made to order',
    'Cocina al instante para más sabor.': 'Made fresh for more flavor.',
    'Para todos los gustos': 'Something for every taste',
    'Opciones para cada antojo.': 'Something for every craving.',
    'Ambiente acogedor': 'A welcoming atmosphere',
    'Buena comida, mejores momentos.': 'Good food, even better moments.',
    'Roma–Condesa': 'Roma–Condesa',
    'Restaurante Pixel Perfect. Todos los derechos reservados.':
        'Restaurant Pixel Perfect. All rights reserved.',
    'Cocina hecha con cariño. Descubre los platillos, bebidas y postres de Restaurante Pixel Perfect.':
        'Thoughtful cooking. Discover Restaurant Pixel Perfect’s dishes, drinks, and desserts.',
    'Me gustaría conocer Pixel Perfect Empresarial y los módulos disponibles para mi empresa.':
        "I'd like to learn about Pixel Perfect Business and the modules available for my company.",
    'Hola, me gustaría conocer Pixel Perfect Empresarial y los módulos disponibles para mi empresa.':
        "Hi, I'd like to learn about Pixel Perfect Business and the modules available for my company.",
    'Quiero conocer Pixel Perfect Empresarial':
        'Learn about Pixel Perfect Business',
    'Cómo funciona': 'How it works',
    'Equipo y expedientes': 'Team and employee records',
    'Documentos y firmas': 'Documents and signatures',
    'Vacaciones y permisos': 'Vacation and leave',
    'Uniformes y herramientas': 'Uniforms and equipment',
    'Solicitudes basadas en los días disponibles reales, con el mismo flujo para permisos sin goce de sueldo.':
        'Requests use each employee’s actual available days, with the same workflow for unpaid leave.',
    'Solicitud por el empleado o su supervisor':
        'Requests from employees or supervisors',
    'Aviso por correo con cruces de fechas del equipo':
        'Email alerts for overlapping team dates',
    'Autorización o rechazo con comentarios y estatus visible':
        'Approve or reject with comments and a visible status',
    'Horarios por equipo': 'Team schedules',
    'Los supervisores organizan quién trabaja, en qué turno y qué día de la semana.':
        'Supervisors organize who works, which shift they work, and on what days.',
    'Asignación semanal por colaborador':
        'Weekly assignments for each team member',
    'Turnos claros para cada equipo': 'Clear shifts for every team',
    'Envío al administrador para autorización':
        'Send to an administrator for approval',
    'Uniformes e inventarios': 'Uniforms and inventory',
    'Inventarios visuales para controlar lo que entra, lo que sale y a quién se entrega.':
        'Visual inventory tools track what comes in, what goes out, and who receives it.',
    'Uniformes por talla, color y tipo de prenda':
        'Uniforms by size, color, and garment type',
    'Herramientas clasificadas por uso y con imágenes':
        'Equipment organized by use and images',
    'Historial de altas y bajas de inventario':
        'Inventory additions and removals history',
    'Bajas sin empezar de cero': 'Keep records when someone leaves',
    'Conserva el expediente de antiguos colaboradores para reintegrarlos fácilmente. Tú defines después de cuánto tiempo se eliminan los registros inactivos.':
        'Keep former employees’ records so you can bring them back easily. Choose how long inactive records stay in the system.',
    'La empresa en perspectiva': 'Your business at a glance',
    'Consulta altas, bajas, inventarios, solicitudes, vacaciones pendientes y actividad general desde un resumen ejecutivo.':
        'Review hires, departures, inventory, requests, pending vacation, and overall activity in one executive overview.',
    'Información lista para usar': 'Information ready to use',
    'Exporta la información de los módulos en PDF o Excel para compartir, revisar o conservar fuera del sistema.':
        'Export module information to PDF or Excel to share, review, or keep outside the system.',
    'Acceso protegido': 'Protected access',
    'Cada usuario entra con su propia contraseña y puede reforzar su cuenta con autenticación en dos pasos mediante una aplicación autenticadora.':
        'Each user signs in with their own password and can add two-step verification with an authenticator app.',
    'Vista previa del sistema': 'System preview',
    'Jueves, 10 de septiembre': 'Thursday, September 10',
    'Buenos días, Andrea': 'Good morning, Andrea',
    '+ Nuevo empleado': '+ New employee',
    'Expedientes completos': 'Complete records',
    'Ver todo': 'View all',
    'Ana solicitó vacaciones': 'Ana requested time off',
    'Hace 8 min': '8 min ago',
    'Hace 24 min': '24 min ago',
    'Horario enviado a revisión': 'Schedule sent for review',
    'Hace 1 h': '1 hr ago',
    'Esta semana': 'This week',
    'PixelPerfect, página de inicio': 'PixelPerfect, home page',
    'Navegación de Pixel Perfect Empresarial':
        'Pixel Perfect Business navigation',
    'Solicitar información': 'Request information',
    'Volver a PixelPerfect': 'Back to PixelPerfect',
    'Software modular': 'Modular business software',
    'Tu empresa,': 'Your business,',
    'mejor conectada.': 'better connected.',
    'Un sistema de gestión y administración para tu empresa: empleados, documentos, contratos, vacaciones, horarios e inventarios en un solo lugar. Configurado a la medida de tu negocio.':
        'A management system for your business: employees, documents, contracts, vacation, schedules, and inventory in one place, tailored to your needs.',
    'Explorar módulos': 'Explore modules',
    'Módulos a tu medida': 'Modules tailored to you',
    'Pagos facturables': 'Business invoicing',
    'Soporte directo': 'Direct support',
    'Solicitud autorizada': 'Request approved',
    '01 / El centro de tu operación': '01 / At the heart of your operations',
    'Mantén tus': 'Keep your',
    expedientes: 'records',
    completos: 'complete.',
    'completos.': 'complete.',
    'Mantén la información laboral al día y convierte documentos repetitivos en procesos ágiles, claros y fáciles de revisar.':
        'Keep employee information up to date and turn repetitive paperwork into streamlined, clear processes that are easy to review.',
    'MÓDULO 01': 'MODULE 01',
    'Administración de empleados': 'Employee management',
    'Centraliza la información personal y de la vacante, salario, vacaciones, contratos y toda la documentación de cada colaborador.':
        'Centralize personal details, role and salary information, vacation, contracts, and all documents for each team member.',
    'Expedientes laborales completos': 'Complete employee records',
    'Documentos requeridos u opcionales definidos por tu empresa':
        'Required or optional documents set by your company',
    'Revisión y seguimiento desde un solo perfil':
        'Review and follow up from one profile',
    'Contratos configurables y firmables digitalmente':
        'Customizable contracts with digital signatures',
    'Alertas por correo de vencimientos y renovaciones':
        'Email alerts for expirations and renewals',
    'Contrato laboral': 'Employment contract',
    'Reglamento interno': 'Employee handbook',
    'Política de privacidad': 'Privacy policy',
    'Acta de entrega': 'Equipment handover form',
    '+ Nuevo': '+ New',
    'CONTRATO INDIVIDUAL': 'INDIVIDUAL EMPLOYMENT CONTRACT',
    'Contrato de trabajo': 'Employment agreement',
    'Celebrado entre': 'Entered into by',
    'Empresa Ejemplo': 'Example Company',
    'Ana Martínez': 'Ana Martinez',
    ', para el puesto de': ', for the role of',
    'Supervisora de Operaciones': 'Operations Supervisor',
    'Firma digital · 10/09/2026': 'Digital signature · 09/10/2026',
    'Solicitar firma': 'Request signature',
    'Imprimir sin firma': 'Print without signature',
    'Editor de documentos': 'Document editor',
    'Redacta contratos, políticas y reglamentos dentro del sistema.':
        'Draft contracts, policies, and handbooks in the system.',
    'Datos automáticos': 'Automatic data',
    'Completa cada plantilla con la información del empleado al imprimir.':
        'Fill in each template with employee information when printing.',
    'Firma digital o física': 'Digital or physical signatures',
    'Guarda el documento firmado o imprímelo sin firma para tu archivo.':
        'Save the signed document or print an unsigned copy for your records.',
    'Recordatorios por correo': 'Email reminders',
    'Anticípate a contratos y documentos próximos a vencer.':
        'Stay ahead of expiring contracts and documents.',
    '02 / Flujos coordinados': '02 / Coordinated workflows',
    'Menos mensajes sueltos.': 'Fewer scattered messages.',
    'Más decisiones visibles.': 'Clearer decisions.',
    'Cada solicitud llega a quien debe decidir, con el contexto necesario y un estatus que todos pueden consultar.':
        'Each request reaches the right decision-maker with the context they need and a status everyone can see.',
    '03 / Control y continuidad': '03 / Control and continuity',
    'La información que necesitas,': 'The information you need,',
    'cuando la necesitas.': 'when you need it.',
    '04 / Así de sencillo': '04 / Simple to get started',
    'Empieza con lo que tu empresa necesita hoy.':
        'Start with what your business needs today.',
    'Conocemos tu operación': 'We learn how you work',
    'Platicamos sobre tu equipo, procesos y prioridades.':
        'We talk about your team, processes, and priorities.',
    'Seleccionas tus módulos': 'You choose your modules',
    'Activas solo las herramientas que aportan valor a tu negocio.':
        'You activate only the tools that add value to your business.',
    'Configuramos tu sistema': 'We configure your system',
    'Ajustamos documentos, permisos y flujos para tu empresa.':
        'We tailor documents, permissions, and workflows for your company.',
    'Suscripción flexible': 'Flexible subscription',
    'Un sistema tan completo como tu operación.':
        'A system as complete as your operations.',
    'El precio se define según los módulos que elijas al contratar. Puedes pagar mensualmente o hacer un solo pago anual con descuento. Todos los pagos son facturables a nombre de tu empresa.':
        'Pricing depends on the modules you choose. Pay monthly or make one discounted annual payment. All payments can be invoiced to your company.',
    'Pago mensual': 'Monthly payment',
    'Anual con descuento': 'Annual with a discount',
    'Facturación empresarial': 'Business invoicing',
    'Armar una propuesta': 'Build a proposal',
    'Ejemplo de selección de módulos': 'Example module selection',
    'Tu plan': 'Your plan',
    'Configuración modular': 'Modular setup',
    'Empleados y expedientes': 'Employees and records',
    'Documentos y firma digital': 'Documents and digital signatures',
    'La propuesta se adapta al alcance de tu empresa.':
        'The proposal is tailored to your business.',
    '05 / Soporte directo': '05 / Direct support',
    'No te dejamos solo después de implementar.':
        'We stay with you after launch.',
    'El administrador de tu empresa puede levantar tickets desde el sistema para reportar un problema, resolver una duda o dar seguimiento a una solicitud.':
        'Your company administrator can submit support tickets to report a problem, get an answer, or follow up on a request.',
    '¿Necesitas algo nuevo?': 'Need something new?',
    'Podemos conversar dentro del ticket sobre un módulo o apartado adicional y preparar el costo de desarrollo.':
        'We can discuss an additional module or section in the ticket and provide a development estimate.',
    'Menos pendientes dispersos.': 'Fewer loose ends.',
    'Una empresa más clara.': 'A clearer business.',
    'Atendemos negocios en todo México, incluidos Guadalajara y Puerto Vallarta. Cuéntanos cómo trabaja tu empresa y te ayudamos a elegir tus módulos.':
        'We work with businesses across Mexico, including Guadalajara and Puerto Vallarta. Tell us how your company works and we’ll help choose the right modules.',
    'Copyright © 2022 -': 'Copyright © 2022 -',
    'PixelPerfect. Todos los derechos reservados.':
        'PixelPerfect. All rights reserved.',
    'PixelPerfect. Todos': 'PixelPerfect. All',
    'los derechos reservados.': 'rights reserved.',
    'Restaurante Pixel': 'Restaurant Pixel',
    'Perfect. Todos los derechos reservados.': 'Perfect. All rights reserved.',
    'Enlaces de contacto': 'Contact links',
    'La marca Pixel Perfect es una orgullosa start-up mexicana.':
        'Pixel Perfect is a proud Mexican startup.',
    'Ir al inicio': 'Go to home',
    'Enviar correo a Pixel Perfect': 'Email Pixel Perfect',
    'Correo electrónico': 'Email',
    'Contactar a Pixel Perfect por WhatsApp':
        'Contact Pixel Perfect on WhatsApp',
    'Pedir para llevar': 'Order for takeout',
    'Sabores que': 'Flavors that',
    'cuentan historias': 'tell a story',
    'Cocina hecha con cariño, para disfrutar aquí':
        'Thoughtful cooking to enjoy here',
    'o donde quieras.': 'or wherever you like.',
    'Nuestros favoritos': 'Our favorites',
    'PLATOS QUE HACEN LA VIDA MÁS RICA': 'DISHES THAT MAKE LIFE MORE DELICIOUS',
    'Descubre todos los sabores': 'Discover all the flavors',
    'Cada plato tiene': 'Every dish has',
    'algo que contar.': 'a story to tell.',
    'Restaurante Pixel Perfect': 'Restaurant Pixel Perfect',
    'Nuestro menú | Restaurante Pixel Perfect':
        'Our menu | Restaurant Pixel Perfect',
    'Galería | Restaurante Pixel Perfect': 'Gallery | Restaurant Pixel Perfect',
    'Descubre la cocina de la casa': 'Discover our kitchen',
    Galería: 'Gallery',
    'Conoce el lugar donde nacen los buenos momentos':
        'Come see where good memories begin',
    'Un vistazo a nuestra mesa, nuestra cocina y esos pequeños detalles que hacen especial cada visita.':
        'A look at our table, our kitchen, and the little details that make every visit special.',
    'Ver galería completa': 'View the full gallery',
    'Ver galería: interior del restaurante':
        'View gallery: restaurant interior',
    'Interior cálido de nuestro restaurante':
        'The warm interior of our restaurant',
    'Ver galería: nuestra mesa': 'View gallery: our table',
    'Pasta servida en nuestra mesa': 'Pasta served at our table',
    'Ver las nueve fotos de la galería': 'View all nine gallery photos',
    'Bruschettas listas para compartir': 'Bruschetta ready to share',
    'Bruschettas de tomate y albahaca': 'Tomato and basil bruschetta',
    'Pasta cremosa con albahaca y parmesano en nuestra mesa':
        'Creamy pasta with basil and parmesan at our table',
    'Nuestra galería': 'Our gallery',
    'Hecho al momento,': 'Made fresh to order,',
    'con ingredientes frescos': 'with fresh ingredients',
    'Cocina de gran sabor, con alma casera.':
        'Big flavor with a homemade touch.',
    'Ingredientes de calidad, recetas que inspiran.':
        'Quality ingredients and inspiring recipes.',
    'Ver menú completo': 'View the full menu',
    'Nuestro restaurante, cálido y acogedor, con mesas de madera y plantas':
        'Our cozy, welcoming restaurant with wooden tables and plants',
    '¿Por qué elegir Restaurante Pixel Perfect?':
        'Why choose Restaurant Pixel Perfect?',
    VISÍTANOS: 'VISIT US',
    'Estamos cerca de ti': 'We’re close by',
    'Av. México s/n, Hipódromo': 'Av. México s/n, Hipódromo',
    'Cuauhtémoc, 06100 CDMX': 'Cuauhtémoc, 06100 Mexico City',
    'Lun–Dom · 13:00–22:00': 'Mon–Sun · 1:00–10:00 pm',
    'Explorar la zona': 'Explore the neighborhood',
    'Un espacio para compartir buena comida': 'A place to share good food',
    'Tu próxima': 'Your next',
    'comida te espera': 'meal is waiting',
    'Tu mesa, tus personas favoritas': 'Your table, your favorite people',
    'y algo delicioso.': 'and something delicious.',
    Contactar: 'Contact us',
    'Tu comida, donde quieras': 'Good food, wherever you are',
    'Tu antojo, para llevar': 'Your favorite, to go',
    'Disfruta nuestros platillos en la comodidad':
        'Enjoy our dishes from the comfort',
    'de tu casa, oficina o donde estés.':
        'of your home, office, or wherever you are.',
    'Empaques para llevar de Restaurante Pixel Perfect':
        'Takeout packaging from Restaurant Pixel Perfect',
    'Elige tus platillos': 'Choose your dishes',
    'Contáctanos para pedir': 'Contact us to order',
    'Recoge y disfruta': 'Pick up and enjoy',
    'Buena comida, también fuera de casa.': 'Good food, wherever you are.',
    'De nuestra cocina a tu mesa': 'From our kitchen to your table',
    'Nuestro menú': 'Our menu',
    'Ingredientes frescos, recetas con cariño y algo delicioso para cada antojo.':
        'Fresh ingredients, thoughtfully made recipes, and something delicious for every craving.',
    'Filtrar platillos por categoría': 'Filter dishes by category',
    'Pasta recién preparada, el sabor de la casa':
        'Freshly made pasta, our house favorite',
    'Descubre nuestros favoritos.': 'Discover our favorites.',
    'platillos en': 'dishes in',
    SECCIÓN: 'CATEGORY',
    'Precios de ejemplo en MXN': 'Sample prices in MXN',
    opción: 'option',
    opciones: 'options',
    'Historias servidas en imágenes': 'Stories told through images',
    'Filtrar fotografías por categoría': 'Filter photos by category',
    '9 fotos': '9 photos',
    'fotografías en': 'photos in',
    'Ver foto': 'View photo',
    'Síguenos en redes sociales': 'Follow us on social media',
    PIXEL: 'PIXEL',
    PERFECT: 'PERFECT',
    'Pixel Perfect': 'Pixel Perfect',
    'COCINA CON ALMA': 'COOKING WITH SOUL',
    'Una mesa para compartir, sabores para recordar.':
        'A table to share, flavors to remember.',
    'Redes sociales': 'Social media',
    'Ver galería': 'View gallery',
    'Abrir en Google Maps': 'Open in Google Maps',
    'Navegación del pie de página': 'Footer navigation',
    'Hablemos de tu próximo antojo': 'Let’s talk about your next craving',
    'Para consultar disponibilidad y hacer pedidos para llevar.':
        'Ask about availability and place takeout orders.',
    'Cuéntanos qué te gustó de esta demo y te ayudamos a adaptarla para tu restaurante.':
        'Tell us what you like about this demo and we’ll help tailor it to your restaurant.',
    'Explorar el menú': 'Explore the menu',
    Ejemplo: 'Example',
    'Ver promoción': 'View promotion',
    'Esta oferta es ilustrativa y todavía no está disponible para canjear.':
        'This is a sample offer and is not available to redeem yet.',
    Condiciones: 'Terms',
    'Consultar promoción': 'Ask about this offer',
    'Martes de pasta': 'Pasta Tuesday',
    'Tu segunda pasta al 50%': 'Get 50% off your second pasta',
    'Martes · 13:00–22:00': 'Tuesday · 1:00–10:00 pm',
    'Una buena pasta sabe mejor en compañía. Elige dos pastas de la casa y comparte el antojo.':
        'Good pasta tastes even better together. Choose two house pastas and share the craving.',
    'El descuento aplica a la pasta de igual o menor precio.':
        'The discount applies to the pasta of equal or lower price.',
    'Válido únicamente para consumo en el restaurante.':
        'Valid for dine-in only.',
    'No acumulable con otras promociones. Sujeto a disponibilidad.':
        'Cannot be combined with other offers. Subject to availability.',
    'Promoción del restaurante': 'Restaurant promotion',
    'Pasta de la casa con tomates cherry y albahaca':
        'House pasta with cherry tomatoes and basil',
    'Promoción de ejemplo': 'Sample offer',
    'Para compartir y disfrutar': 'Made to share and enjoy',
    'Condiciones de ejemplo': 'Sample terms',
    'Galería de proyectos': 'Project gallery',
    'Imagen anterior': 'Previous image',
    'Imagen siguiente': 'Next image',
    'Ver en grande': 'View larger',
    'Capturas próximamente': 'Screenshots coming soon',
    'Exploración visual de la identidad PixelPerfect':
        'Visual exploration of the PixelPerfect identity',
    'ESTUDIO DE DESARROLLO & DISEÑO': 'DEVELOPMENT & DESIGN STUDIO',
    'Ideas claras. Cada píxel cuenta.': 'Clear ideas. Every pixel counts.',
    'Vista ilustrativa del sistema de gestión PixelPerfect, con datos de ejemplo':
        'Illustrative preview of the PixelPerfect management system with sample data',
    'TODO EN SU LUGAR': 'EVERYTHING IN ITS PLACE',
    'Tu operación, en foco.': 'Your operations, in focus.',
    'Personas activas': 'Active people',
    'Tu equipo, conectado': 'Your team, connected',
    'Accesos seguros': 'Secure access',
    'Todo bajo control': 'Everything under control',
    'Vista general': 'Overview',
    'Nuevo expediente creado': 'New record created',
    'Permiso actualizado': 'Permission updated',
    'Catálogo sincronizado': 'Catalog synced',
    'Cada proceso, conectado.': 'Every process, connected.',
    'Galería de Hotel Mesón de Mita · Sitio web':
        'Gallery of Hotel Mesón de Mita · Website',
};

export function translateText(text: string, locale: Locale): string {
    if (locale === 'es') {
        return text;
    }

    const exactTranslation = englishTranslations[text];

    if (exactTranslation !== undefined) {
        return exactTranslation;
    }

    const imageLabel = text.match(
        /^(Captura|Mockup|Exploración|Logo) (\d+) de (.+)$/,
    );

    if (imageLabel) {
        return `${translateText(imageLabel[1], locale)} ${imageLabel[2]} of ${translateText(imageLabel[3], locale)}`;
    }

    const prefixes: Record<string, string> = {
        'Galería de ': 'Gallery of ',
        'Mapa de ': 'Map of ',
        'Mostrar ': 'Show ',
        'Ver proyecto: ': 'View project: ',
        'Visitar ': 'Visit ',
        'Captura de ': 'Screenshot of ',
        'Mockup de ': 'Mockup of ',
        'Exploración de ': 'Exploration of ',
        'captura de ': 'Screenshot of ',
        'mockup de ': 'Mockup of ',
        'exploración de ': 'Exploration of ',
    };

    for (const [spanishPrefix, englishPrefix] of Object.entries(prefixes)) {
        if (text.startsWith(spanishPrefix)) {
            return `${englishPrefix}${translateText(text.slice(spanishPrefix.length), locale)}`;
        }
    }

    return text;
}

function translateNode(node: ReactNode, locale: Locale): ReactNode {
    if (typeof node === 'string') {
        const trimmedText = node.trim();

        if (!trimmedText) {
            return node;
        }

        const start = node.indexOf(trimmedText);
        const end = start + trimmedText.length;

        return `${node.slice(0, start)}${translateText(trimmedText, locale)}${node.slice(end)}`;
    }

    if (Array.isArray(node)) {
        return node.map((child) => translateNode(child, locale));
    }

    if (!isValidElement(node)) {
        return node;
    }

    const props = { ...(node.props as Record<string, unknown>) };

    for (const [attribute, value] of Object.entries(props)) {
        if (
            [
                'alt',
                'aria-description',
                'aria-label',
                'placeholder',
                'title',
            ].includes(attribute) &&
            typeof value === 'string'
        ) {
            props[attribute] = translateText(value, locale);
        } else if (
            attribute === 'href' &&
            typeof value === 'string' &&
            value.startsWith('/') &&
            !value.startsWith('//')
        ) {
            props.href = localizeUrl(value, locale);
        } else if (
            attribute === 'href' &&
            typeof value === 'object' &&
            value !== null &&
            'url' in value &&
            typeof value.url === 'string'
        ) {
            props.href = { ...value, url: localizeUrl(value.url, locale) };
        } else if (attribute === 'children') {
            props.children = translateNode(value as ReactNode, locale);
        } else {
            props[attribute] = translateNestedElements(value, locale);
        }
    }

    return cloneElement(node, props);
}

function translateNestedElements(value: unknown, locale: Locale): unknown {
    if (isValidElement(value)) {
        return translateNode(value, locale);
    }

    if (Array.isArray(value)) {
        return value.map((item) => translateNestedElements(item, locale));
    }

    if (
        value !== null &&
        typeof value === 'object' &&
        Object.getPrototypeOf(value) === Object.prototype
    ) {
        return Object.fromEntries(
            Object.entries(value).map(([key, item]) => [
                key,
                translateNestedElements(item, locale),
            ]),
        );
    }

    return value;
}

export function LocalizedContent({
    children,
    locale,
}: {
    children: ReactNode;
    locale: Locale;
}) {
    return <>{localizeContent(children, locale)}</>;
}

export function localizeContent(
    children: ReactNode,
    locale: Locale,
): ReactNode {
    return translateNode(children, locale);
}

export function localizeUrl(url: string, locale: Locale): string {
    const parsedUrl = new URL(url, 'https://pixelperfectmx.com');
    const spanishPath = parsedUrl.pathname.replace(/^\/en(?=\/|$)/, '') || '/';
    const pathname =
        locale === 'en'
            ? `/en${spanishPath === '/' ? '' : spanishPath}`
            : spanishPath;

    return `${pathname}${parsedUrl.search}${parsedUrl.hash}`;
}

export function LocaleSwitcher({ locale }: { locale: Locale }) {
    const { url } = usePage();
    const currentUrl = url;
    const labels = {
        en: { es: 'Spanish', en: 'English', language: 'Select language' },
        es: { es: 'Español', en: 'English', language: 'Seleccionar idioma' },
    }[locale];

    return (
        <nav
            aria-label={labels.language}
            className="inline-flex shrink-0 items-center rounded-full border border-current/20 p-0.5 text-xs font-semibold"
        >
            <Link
                href={localizeUrl(currentUrl, 'es')}
                hrefLang="es-MX"
                aria-label={labels.es}
                aria-current={locale === 'es' ? 'page' : undefined}
                className={`rounded-full px-2.5 py-1 transition-colors ${locale === 'es' ? 'bg-current/10' : 'opacity-65 hover:opacity-100'}`}
            >
                ES
            </Link>
            <Link
                href={localizeUrl(currentUrl, 'en')}
                hrefLang="en"
                aria-label={labels.en}
                aria-current={locale === 'en' ? 'page' : undefined}
                className={`rounded-full px-2.5 py-1 transition-colors ${locale === 'en' ? 'bg-current/10' : 'opacity-65 hover:opacity-100'}`}
            >
                EN
            </Link>
        </nav>
    );
}
