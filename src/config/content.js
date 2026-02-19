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
        badge: "Vinos Finos - Whiskies Excepcionales - Coches Clásicos - Joyas Antiguas - Relojes de Edición Limitada",
        title: {
            main: "Convierte bienes exclusivos",
            highlight: "en activos alternativos"
        },
        subtitle: "Te invitamos a invertir en valores refugio ligados al lujo y al coleccionismo",
        buttons: {
            primary: "Entra en WOTfinance",
            secondary: "Tasador IA"
        },
        trust: {
            rating: "Vinos Finos - Whiskies Excepcionales",
            clients: "",
            clientsLabel: "Coches Clásicos - Joyas Antiguas - Relojes de Edición Limitada"
        }
    },

    // How It Works Section
    howItWorks: {
        title: "Cómo Funciona",
        subtitle: "",
        steps: [
            {
                number: "01",
                title: "Consulta nuestro Catálogo",
                description: "Descubre una valiosa colección de piezas únicas que destacan por su originalidad, belleza o antigüedad. Vinos finos de añadas cotizadas, coches lujosos de modelos legendarios, joyas raras y relojes de ediciones limitadas.",
                icon: "🎯",
                image: "/LA-TACHE.jpeg"
            },
            {
                number: "02",
                title: "Control del proceso",
                description: "Toma el control de tus finanzas a través de nuestro avanzado dashboard, cuyo diseño te ofrece una visión de 360° de tu patrimonio en tiempo real.",
                icon: "⚡",
                image: "/JOYAS.jpeg"
            },
            {
                number: "03",
                title: "Gestión de tus activos",
                description: "Decide cuánto tiempo conservarlos, cuándo promover una salida de inversión o cómo transferir la propiedad de tus bienes.",
                icon: "📊",
                image: "/CADILLAC-ROJO.png"
            }
        ],
        cta: "Ver Catálogo"
    },

    // Benefits Section
    benefits: {
        title: "Cómodo y seguro",
        subtitle: "Una elección inteligente",
        items: [
            {
                icon: "📜",
                title: "Trazabilidad Documentada",
                description: "Implementamos un riguroso registro digital para cada activo. Centralizamos certificados de autenticidad, historial de propiedad y documentación legal en un formato seguro y accesible."
            },
            {
                icon: "🔒",
                title: "Líquidos y Sólidos",
                description: "A diferencia de los activos sintéticos, los bienes tangibles han demostrado su resiliencia frente a crisis económicas."
            },
            {
                icon: "🏆",
                title: "Reconocimiento Profesional",
                description: "Trabajamos con un panel de expertos reconocidos de diversas industrias, tasadores independientes y casas de certificación."
            },
            {
                icon: "🛡️",
                title: "Bajo control",
                description: "Todas las transacciones se documentan y ejecutan bajo el control interno de WOTfinance."
            },
            {
                icon: "🚀",
                title: "Salida de inversión",
                description: "Nuestra estructura te ofrece ventanas de salida flexibles."
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
        title: "Nuestro Equipo",
        subtitle: "",
        members: [
            {
                name: "Víctor Rodríguez Esteban",
                role: "CEO",
                specialty: "",
                image: "/team/VICTOR-RODRIGUEZ-GR.jpg",
                imagePosition: "center 30%"
            },
            {
                name: "Juan Carlos Gil Vega",
                role: "Director comercial",
                specialty: "",
                image: "/team/JUAN-CARLOS-GIL-GR NEW.jpg.jpeg"
            },
            {
                name: "Pablo García de los Salmones",
                role: "CTO",
                specialty: "",
                image: "/team/PABLO-GARCIA.jpeg",
                grayscale: true,
                imagePosition: "center 25%"
            },
            {
                name: "Corpus Pascua",
                role: "Especialista en Joyas y Relojes",
                specialty: "",
                image: "/team/CORPUS-PASCUA.jpeg",
                grayscale: true,
                imagePosition: "center top"
            },
            {
                name: "Francisco Carrión Cárdenas",
                role: "Experto en Coches Clásicos",
                specialty: "",
                image: "/team/FRANCISCO-CARRION-GR.jpg",
                imagePosition: "center 30%"
            },
            {
                name: "Ángel Arellano Del Olmo",
                role: "Desarrollo de software",
                specialty: "",
                image: "/team/wot-angel.jpg"
            }
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
        description: "WOTfinance (Operado por INTERVALUE S.L.) – Plataforma tecnológica de gestión y digitalización de activos tangibles de alto valor.",
        sections: {
            product: {
                title: "Catálogo",
                links: [
                    { text: "Vinos Finos", href: "#" },
                    { text: "Whiskies Excepcionales", href: "#" },
                    { text: "Coches Clásicos", href: "#" },
                    { text: "Joyas Antiguas", href: "#" },
                    { text: "Relojes de Edición Limitada", href: "#" }
                ]
            },
            company: {
                title: "Empresa",
                links: [
                    { text: "Sobre Nosotros", href: "#" },
                    { text: "Equipo de Expertos", href: "#" },
                    { text: "Blog", href: "#" },
                    { text: "Prensa", href: "#" },
                    { text: "Administración", href: "/admin" }
                ]
            },
            support: {
                title: "Soporte",
                links: [
                    { text: "Centro de Ayuda", href: "#" },
                    { text: "Contacto", href: "#" },
                    { text: "FAQ", href: "#" },
                    { text: "Aviso Legal", href: "#" }
                ]
            }
        },
        legal: {
            terms: "Términos de Servicio",
            privacy: "Política de Privacidad",
            cookies: "Cookies"
        },
        copyright: "Todos los derechos reservados.",
        disclaimer: "Aviso importante: WOTfinance es una empresa de soporte tecnológico (CNAE 6201) dedicada a la intermediación comercial, digitalización y logística, operando bajo un modelo especializado en activos tangibles no cotizados (activos reales). No es una Empresa de Servicios de Inversión (ESI) ni un establecimiento de crédito."
    }
};

export default content;
