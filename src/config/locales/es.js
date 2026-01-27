// Spanish translations - Default language
const es = {
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
            testimonials: "Testimonios",
            financialPlan: "Plan Financiero"
        },
        buttons: {
            login: "Iniciar Sesión",
            getStarted: "Comenzar"
        }
    },

    // Hero Section
    hero: {
        badge: "Vinos Finos - Whiskies Excepcionales - Coches Clásicos - Joyas Antiguas - Relojes de Colección",
        title: {
            main: "Acceso a bienes de lujo",
            highlight: "como activos alternativos"
        },
        subtitle: "La plataforma que asesora y orienta sobre cómo invertir en valores refugio ligados al lujo o al coleccionismo con la seguridad blockchain",
        buttons: {
            primary: "Entra en WOTfinance",
            secondary: "Tasador"
        },
        trust: {
            rating: "Vinos Finos - Whiskies Excepcionales",
            clients: "",
            clientsLabel: "Coches Clásicos - Joyas Antiguas - Relojes de Colección"
        }
    },

    // How It Works Section
    howItWorks: {
        title: "Saber invertir",
        subtitle: "Tres pasos para acceder a tu colección",
        steps: [
            {
                number: "01",
                title: "Consulta nuestro Catálogo",
                description: "Cada pieza de nuestra colección cuenta con certificación de origen y trazabilidad documental registrada en blockchain.",
                icon: "🎯",
                image: "/TONDONIA.jpeg"
            },
            {
                number: "02",
                title: "Logística y Custodia",
                description: "Nos encargamos de la verificación física, el transporte seguro y el almacenamiento en condiciones óptimas de conservación y seguro a todo riesgo.",
                icon: "⚡",
                image: "/JOYAS.jpeg"
            },
            {
                number: "03",
                title: "Gestión de la Colección",
                description: "Sigue la evolución de valor de mercado de tus activos desde tu panel de control. Decide cuándo mantener, retirar o transferir la propiedad de tus bienes.",
                icon: "📊",
                image: "/LLANTA-WOT.jpeg"
            }
        ],
        cta: "Ver Catálogo"
    },

    // Benefits Section
    benefits: {
        title: "Cómodo y seguro",
        subtitle: "Una buena elección",
        items: [
            {
                icon: "📜",
                title: "Trazabilidad Documental",
                description: "Implementamos un registro digital riguroso para cada activo. Centralizamos certificados de autenticidad, historial de propiedad y documentación legal en un formato seguro y accesible."
            },
            {
                icon: "🔒",
                title: "Respaldo Real",
                description: "Hazte propietario de bienes tangibles. A diferencia de los activos sintéticos, aquí eres dueño de piezas físicas resguardadas en instalaciones de máxima seguridad."
            },
            {
                icon: "🏆",
                title: "Validación Profesional",
                description: "Trabajamos con un panel de reconocidos expertos en sectores diversos, peritos independientes y casas de certificación, además de contemplar diversos acuerdos con proveedores de garantía."
            },
            {
                icon: "🛡️",
                title: "Bajo control",
                description: "Reglaje y mantenimiento de los vehículos, vigilancia ambiental de los vinos y seguridad acorazada para las joyas. El valor e integridad de tu patrimonio están plenamente garantizados."
            },
            {
                icon: "🚀",
                title: "Salida de inversión",
                description: "Al final del plazo de inversión, WOTfinance implementa la estrategia de salida más adecuada (subastas, reventas privadas, ventas a través de un agente especializado). Existe la opción de reinvertir o cerrar la inversión definitivamente."
            }
        ]
    },

    // Stats Section
    stats: {
        items: [
            {
                value: "12",
                suffix: "%",
                label: "Revalorización media histórica Coches Clásicos*"
            },
            {
                value: "100",
                suffix: "B€",
                label: "Volumen global coleccionismo de lujo"
            },
            {
                value: "100",
                suffix: "%",
                label: "Trazabilidad digital WOTfinance"
            }
        ],
        disclaimer: "*Fuentes: Knight Frank Luxury Index. Revalorizaciones pasadas no garantizan resultados futuros."
    },

    // Team Section
    team: {
        title: "Nuestro Equipo",
        subtitle: "Especialistas con experiencia en inversiones alternativas y activos de lujo",
        members: [
            {
                name: "Víctor Rodríguez Esteban",
                role: "CEO",
                specialty: "Especialista en inversiones",
                image: "/team/VICTOR-RODRIGUEZ-GR.jpg",
                imagePosition: "center 30%"
            },
            {
                name: "Juan Carlos Gil Vega",
                role: "Gestor de negocios",
                specialty: "Marketing digital",
                image: "/team/JUAN-CARLOS-GIL-GR NEW.jpg.jpeg"
            },
            {
                name: "Ángel Arellano Del Olmo",
                role: "IT Director",
                specialty: "Desarrollo de software y seguridad de la información",
                image: "/team/wot-angel.jpg"
            },
            {
                name: "Corpus Pascua",
                role: "Especialista en Joyas y Relojes",
                specialty: "Responsable de tasaciones homologadas",
                image: "/team/CORPUS-PASCUA.jpeg",
                grayscale: true,
                imagePosition: "center top"
            },
            {
                name: "Francisco Carrión Cárdenas",
                role: "Experto en Coches Clásicos",
                specialty: "Coordinador de subastas",
                image: "/team/FRANCISCO-CARRION-GR.jpg",
                imagePosition: "center 30%"
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
        description: "WOTfinance (Operado por INTERVALUE S.L.) - Plataforma tecnológica de gestión y digitalización de activos tangibles de alto valor.",
        sections: {
            product: {
                title: "Catálogo",
                links: [
                    { text: "Vinos Premium", href: "#" },
                    { text: "Coches Clásicos", href: "#" },
                    { text: "Joyas Antiguas", href: "#" },
                    { text: "Ver Catálogo", href: "#" }
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
        disclaimer: "Aviso Importante: WOTfinance es una empresa de servicios tecnológicos (CNAE 6201) y no una Empresa de Servicios de Inversión (ESI) ni una Entidad de Crédito. Los servicios prestados se limitan a la intermediación comercial, digitalización y logística de bienes muebles. La información sobre revalorizaciones históricas es meramente ilustrativa del mercado y no constituye una oferta de productos financieros ni asesoramiento de inversión regulado."
    },

    // Test Selection Page
    testSelection: {
        title: "Selecciona tu Test",
        subtitle: "Elige el test que necesitas realizar para continuar",
        convenienceTest: {
            title: "Realizar test de conveniencia",
            description: "Evalúa tus conocimientos y experiencia para inversiones no asesoradas",
            badge: "Obligatorio"
        },
        suitabilityTest: {
            title: "Test de Idoneidad",
            description: "Para servicios de asesoramiento personalizado",
            badge: "Asesoramiento"
        }
    },

    // Convenience Test
    convenienceTest: {
        title: "Test de Conveniencia",
        subtitle: "(Aplicable a comercialización simple o contratación no asesorada)",
        objectiveTitle: "Objetivo",
        objective: "Evaluar si el cliente posee los conocimientos y la experiencia suficientes para comprender los riesgos de los productos financieros ofrecidos fuera del marco del asesoramiento personalizado.",
        blockLabel: "Bloque",
        yes: "Sí",
        no: "No",
        blocks: {
            financial: "Conocimientos Financieros Generales",
            experience: "Experiencia en Inversiones",
            risks: "Comprensión de Productos y Riesgos",
            complexity: "Nivel de Complejidad"
        },
        questions: {
            1: "¿Tiene formación académica o profesional en materia financiera, económica o de inversión?",
            2: "¿Conoce los conceptos de rentabilidad, riesgo y diversificación de una cartera de inversión?",
            3: "¿Sabe que el valor de una inversión puede disminuir y generar pérdidas parciales o totales?",
            4: "¿Ha invertido anteriormente en activos reales o tangibles (vino, arte, relojes, joyas, coches clásicos, etc.)?",
            5: "¿Durante cuánto tiempo ha mantenido inversiones en este tipo de productos?",
            6: "¿Con qué frecuencia ha realizado operaciones de inversión en los últimos 3 años?",
            7: "¿Cuál ha sido el importe medio de las inversiones realizadas?",
            8: "¿Conoce los riesgos de iliquidez y volatilidad de los activos tangibles no cotizados?",
            9: "¿Entiende que estos activos pueden carecer de mercado secundario inmediato?",
            10: "¿Comprende los costes asociados a su mantenimiento, custodia y seguro?",
            11: "¿Es consciente de que los precios pueden variar en función del estado físico, autenticidad o demanda del activo?",
            12: "¿Entiende la documentación contractual asociada a la titularidad y conservación de un activo tangible?",
            13: "¿Conoce la diferencia entre inversión directa, fraccionada o asesorada?",
            14: "¿Sabe que no existe garantía de rentabilidad mínima en estos productos?"
        },
        options: {
            less1year: "<1 año",
            "1to3years": "1–3 años",
            more3years: ">3 años",
            none: "Ninguna",
            "1to5": "1–5",
            more5: ">5",
            less10k: "<10.000 €",
            "10kto50k": "10.000–50.000 €",
            more50k: ">50.000 €"
        },
        scoreLabel: "Puntuación",
        results: {
            apt: {
                title: "APTO",
                message: "Puede contratar productos no asesorados",
                action: "Continuar con la contratación"
            },
            conditional: {
                title: "APTO CONDICIONADO",
                message: "Contratación permitida con advertencia de riesgos",
                action: "Continuar con advertencias"
            },
            notapt: {
                title: "NO APTO",
                message: "Requiere asesoramiento obligatorio o denegación de contratación",
                action: "Solicitar asesoramiento"
            }
        },
        warning: {
            title: "Advertencia",
            message: "En caso de resultado \"No Apto\", se generará una advertencia automática y se bloqueará la contratación sin asesoramiento, conforme al artículo 62 del Reglamento Delegado (UE) 2017/565."
        },
        errors: {
            incomplete: "Por favor, responda todas las preguntas antes de continuar."
        },
        buttons: {
            submit: "Enviar Test",
            retry: "Repetir Test",
            back: "Volver"
        }
    },

    // Suitability Test
    suitabilityTest: {
        title: "Test de Idoneidad",
        subtitle: "(Aplicable al servicio de asesoramiento o recomendación personalizada)",
        objectiveTitle: "Objetivo",
        objective: "Evaluar los conocimientos, experiencia, situación financiera, objetivos y tolerancia al riesgo del cliente para recomendar productos acordes a su perfil.",
        blockLabel: "Bloque",
        yes: "Sí",
        no: "No",
        blocks: {
            knowledge: "Conocimientos y Experiencia",
            financial: "Situación Financiera",
            objectives: "Objetivos de Inversión",
            risk: "Capacidad y Tolerancia al Riesgo"
        },
        questions: {
            1: "¿Posee formación o experiencia profesional relacionada con inversiones o gestión patrimonial?",
            2: "¿Ha invertido anteriormente en activos tangibles o alternativos?",
            3: "¿Durante cuánto tiempo ha mantenido inversiones de este tipo?",
            4: "¿Conoce los principales riesgos de los activos tangibles (valoración, conservación, liquidez)?",
            5: "¿Sabe cómo se determina el valor de un activo tangible (tasaciones, índices, comparables)?",
            6: "Ingresos anuales aproximados",
            7: "Patrimonio neto aproximado",
            8: "Porcentaje de patrimonio que destinará a esta inversión",
            9: "Nivel de endeudamiento actual",
            10: "¿Cuál es el objetivo principal de la inversión?",
            11: "Horizonte temporal de inversión",
            12: "¿Requiere liquidez inmediata o puede mantener la inversión a largo plazo?",
            13: "¿Cuál es su expectativa de rentabilidad anual?",
            14: "¿Qué porcentaje de su inversión podría asumir perder sin comprometer su estabilidad financiera?",
            15: "¿Cómo reaccionaría ante una pérdida temporal del 10 % en el valor de su inversión?",
            16: "¿Cuál de las siguientes afirmaciones refleja mejor su perfil?"
        },
        options: {
            less1year: "<1 año",
            "1to3years": "1–3 años",
            more3years: ">3 años",
            incomeLow: "<40.000 €",
            incomeMedium: "40.000–100.000 €",
            incomeHigh: ">100.000 €",
            wealthLow: "<100.000 €",
            wealthMedium: "100.000–500.000 €",
            wealthHigh: ">500.000 €",
            allocationLow: "<10 %",
            allocationMedium: "10–30 %",
            allocationHigh: ">30 %",
            debtLow: "Bajo (<20 %)",
            debtMedium: "Medio (20–50 %)",
            debtHigh: "Alto (>50 %)",
            goalPreserve: "Preservar capital",
            goalDiversify: "Diversificar",
            goalReturns: "Rentabilidad",
            horizonShort: "<1 año",
            horizonMedium: "1–3 años",
            horizonLong: ">3 años",
            liquidityImmediate: "Necesito liquidez",
            liquidityMaintain: "Puedo mantener",
            liquidityLongterm: "Largo plazo",
            returnLow: "<3 %",
            returnMedium: "3–6 %",
            returnHigh: ">6 %",
            lossLow: "<10 %",
            lossMedium: "10–25 %",
            lossHigh: ">25 %",
            reactionWithdraw: "Retiraría inmediatamente",
            reactionMaintain: "Mantendría",
            reactionIncrease: "Aumentaría inversión",
            profileConservative: "Prefiero seguridad y liquidez aunque gane menos",
            profileBalanced: "Busco rentabilidad equilibrada",
            profileAggressive: "Asumo riesgos elevados por rentabilidad superior"
        },
        resultTitle: "Perfil de Inversor",
        scoreLabel: "puntos",
        profiles: {
            conservative: {
                title: "Conservador",
                description: "Prioriza seguridad y liquidez, baja tolerancia a pérdidas"
            },
            moderate: {
                title: "Moderado",
                description: "Acepta cierta volatilidad buscando rentabilidad superior"
            },
            dynamic: {
                title: "Dinámico",
                description: "Dispuesto a asumir riesgos intermedios por diversificación"
            },
            aggressive: {
                title: "Agresivo",
                description: "Alta tolerancia al riesgo y horizonte de largo plazo"
            },
            veryAggressive: {
                title: "Muy Agresivo",
                description: "Busca rentabilidad elevada, asume volatilidad y liquidez limitada"
            }
        },
        validity: {
            title: "Vigencia",
            message: "Este test tiene una vigencia de 24 meses, salvo que cambie su situación."
        },
        info: {
            title: "Información",
            message: "Toda operación deberá estar dentro de su perfil de riesgo asignado. Si desea invertir fuera de su perfil, se aplicará el procedimiento de autorización reforzada."
        },
        errors: {
            incomplete: "Por favor, responda todas las preguntas antes de continuar."
        },
        buttons: {
            submit: "Enviar Test",
            retry: "Repetir Test",
            back: "Volver"
        }
    }
};

export default es;

