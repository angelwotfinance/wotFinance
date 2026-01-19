// Archivo de configuración de contenidos - Similar a properties de Java
// Centraliza todos los textos del sitio web para fácil mantenimiento

const content = {
    // Configuración general
    brand: {
        name: "WOTfinance",
        tagline: "Win Over Time"
    },

    // Navbar
    navbar: {
        links: {
            home: "Inicio",
            howItWorks: "Cómo Funciona",
            benefits: "Beneficios",
            team: "Equipo",
            testimonials: "Testimonios"
        },
        buttons: {
            login: "Iniciar Sesión",
            getStarted: "Comenzar"
        }
    },

    // Hero Section
    hero: {
        badge: "Inversiones en activos tangibles de lujo",
        title: {
            main: "Inversiones exclusivas en",
            highlight: "vinos, whiskies, coches clásicos y joyas"
        },
        subtitle: "WOT proporciona asesoramiento de inversión en activos refugio o alternativos vinculados al lujo: vinos finos, whiskies raros, coches clásicos, relojes exclusivos y joyas antiguas. Abrimos las puertas a particulares al mundo de la inversión en estos objetos especiales con rentabilidad probada.",
        buttons: {
            primary: "Comenzar Ahora",
            secondary: "Tasador IA"
        },
        trust: {
            rating: "Calificación 4.9/5",
            clients: "850+",
            clientsLabel: "Inversores satisfechos"
        }
    },

    // How It Works Section
    howItWorks: {
        title: "Cómo Funciona",
        subtitle: "Tres simples pasos para comenzar a invertir",
        steps: [
            {
                number: "01",
                title: "Selecciona tu activo",
                description: "Explora nuestra colección curada de vinos premium, coches clásicos certificados y joyas antiguas autenticadas. Cada pieza ha sido verificada por expertos.",
                icon: "🎯",
                image: "/wot-selecciona-activo.png"
            },
            {
                number: "02",
                title: "Nosotros gestionamos todo",
                description: "Nos encargamos del almacenamiento en condiciones óptimas, seguro, mantenimiento y toda la logística. Tu inversión está en las mejores manos.",
                icon: "⚡",
                image: "/nosotros-gestionamos.png"
            },
            {
                number: "03",
                title: "Obtén rentabilidad",
                description: "Sigue la apreciación de tu activo en tiempo real. Vende cuando quieras o disfruta de tu colección. Liquidez y flexibilidad garantizadas.",
                icon: "📈",
                image: "/obten-rentabilidad.png"
            }
        ],
        cta: "Comenzar Ahora"
    },

    // Benefits Section
    benefits: {
        title: "¿Por qué invertir con nosotros?",
        subtitle: "Ventajas exclusivas para inversores inteligentes",
        items: [
            {
                icon: "💎",
                title: "Retornos Superiores",
                description: "Los vinos raros, coches clásicos y joyas antiguas han ofrecido históricamente retornos del 10-15% anual, superando índices tradicionales."
            },
            {
                icon: "🔒",
                title: "Activos Tangibles",
                description: "Invierte en bienes físicos con valor intrínseco. Baja correlación con mercados tradicionales, excelente protección contra inflación."
            },
            {
                icon: "🏆",
                title: "Autenticación Experta",
                description: "Cada pieza es verificada por especialistas certificados. Proveniencia documentada, certificados de autenticidad y valuación profesional."
            },
            {
                icon: "📊",
                title: "Gestión Profesional",
                description: "Almacenamiento en condiciones óptimas, seguro completo, mantenimiento especializado. Tu inversión está protegida y cuidada."
            }
        ]
    },

    // Stats Section
    stats: {
        items: [
            {
                value: "250",
                suffix: "M€",
                label: "Activos bajo gestión"
            },
            {
                value: "850",
                suffix: "+",
                label: "Inversores"
            },
            {
                value: "14",
                suffix: "%",
                label: "Rentabilidad media anual"
            },
            {
                value: "35",
                suffix: "+",
                label: "Países"
            }
        ]
    },

    // Team Section
    team: {
        title: "Nuestro Equipo de Expertos",
        subtitle: "Especialistas con experiencia en inversiones alternativas y activos de lujo",
        members: [
            {
                name: "Victor Rodriguez Esteban",
                role: "Especialista en Inversiones en Vino",
                specialty: "Amplia experiencia en inversiones en vinos de alta calidad",
                image: "/team/VICTOR-RODRIGUEZ-GR.jpg"
            },
            {
                name: "Juan Carlos Gil Vega",
                role: "Especialista en Negocio",
                specialty: "Experiencia en gestión de negocios y marketing digital",
                image: "/team/JUAN-CARLOS-GIL-GR NEW.jpg.jpeg"
            },
            {
                name: "Ángel Arellano Del Olmo",
                role: "Especialista en IT",
                specialty: "Experiencia en desarrollo de software y seguridad de la información",
                image: "/team/ANGEL-ARELLANO-GR.jpg"
            },
            /*{
                name: "Francisco Carrión Cárdenas",
                role: "Especialista en Inversiones en Coches Clásicos",
                specialty: "Experiencia en inversiones en coches clásicos y automóviles de lujo",
                image: "/team/FRANCISCO-CARRION-GR.jpg"
            }*/
        ]
    },

    // Testimonials Section
    testimonials: {
        title: "Lo que dicen nuestros inversores",
        subtitle: "Historias reales de inversores reales",
        items: [
            {
                text: "La experiencia ha sido fenomenal. Invertí en un Bordeaux 1982 y un Porsche 911 clásico. El proceso fue muy fluido y la selección de activos es excepcional. La valorización ha superado mis expectativas.",
                name: "María González",
                location: "Madrid, España"
            },
            {
                text: "Realmente hicieron que la inversión en coches clásicos fuera accesible. Mi Ferrari 250 se ha revalorizado un 18% en dos años. El equipo de expertos es increíble. ¡Altamente recomendado!",
                name: "Carlos Ruiz",
                location: "Ciudad de México, México"
            },
            {
                text: "Acabo de adquirir mi primera colección de joyas antiguas Art Déco junto con mi esposa. El equipo ha sido excelente durante todo el proceso. Autenticación impecable, información detallada y servicio al cliente de primera clase.",
                name: "Ana Silva",
                location: "Buenos Aires, Argentina"
            },
            {
                text: "¡Han hecho que invertir en vino sea un sueño! Tengo una cartera diversificada de Borgoña y Toscana. La capacidad de rastrear la valorización en tiempo real también es una gran ventaja.",
                name: "Jorge Martínez",
                location: "Bogotá, Colombia"
            }
        ]
    },

    // Footer
    footer: {
        description: "Inversiones exclusivas en vino de colección, coches clásicos y joyas antiguas. Rendimientos excepcionales en activos tangibles.",
        sections: {
            product: {
                title: "Inversiones",
                links: [
                    { text: "Vinos Premium", href: "#" },
                    { text: "Coches Clásicos", href: "#" },
                    { text: "Joyas Antiguas", href: "#" },
                    { text: "Catálogo Completo", href: "#" }
                ]
            },
            company: {
                title: "Empresa",
                links: [
                    { text: "Sobre Nosotros", href: "#" },
                    { text: "Equipo de Expertos", href: "#" },
                    { text: "Blog", href: "#" },
                    { text: "Prensa", href: "#" }
                ]
            },
            support: {
                title: "Soporte",
                links: [
                    { text: "Centro de Ayuda", href: "#" },
                    { text: "Contacto", href: "#" },
                    { text: "FAQ", href: "#" },
                    { text: "Privacidad", href: "#" }
                ]
            }
        },
        legal: {
            terms: "Términos de Servicio",
            privacy: "Política de Privacidad",
            cookies: "Cookies"
        },
        copyright: "Todos los derechos reservados."
    }
};

export default content;
