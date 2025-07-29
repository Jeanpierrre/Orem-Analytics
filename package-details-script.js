// Language switching functionality for package details page
let currentLang = "es"

const packageData = {
  Starter: {
    es: {
      title: "Paquete Starter",
      subtitle: "Análisis básico para empresas en crecimiento",
      iconClass: "fas fa-rocket",
      price: "1,500",
      period: "por proyecto",
      isPopular: false,
      isEnterprise: false,
      features: [
        {
          icon: "fas fa-chart-bar",
          title: "Análisis de 3 Variables Clave",
          description:
            "Identificamos y analizamos las 3 métricas más importantes para tu negocio, proporcionando insights claros sobre su comportamiento y tendencias.",
        },
        {
          icon: "fas fa-tachometer-alt",
          title: "Dashboard Básico Interactivo",
          description:
            "Dashboard personalizado con visualizaciones claras y fáciles de entender, actualizable en tiempo real para monitorear tu progreso.",
        },
        {
          icon: "fas fa-file-pdf",
          title: "Reporte Ejecutivo en PDF",
          description:
            "Documento profesional con hallazgos clave, recomendaciones estratégicas y plan de acción para implementar mejoras.",
        },
        {
          icon: "fas fa-users",
          title: "1 Sesión de Consultoría",
          description:
            "Reunión de 60 minutos con nuestros expertos para explicar resultados, responder preguntas y definir próximos pasos.",
        },
      ],
      timeline: [
        {
          number: 1,
          title: "Reunión Inicial (Día 1)",
          description:
            "Definimos objetivos, identificamos fuentes de datos y establecemos las 3 variables clave a analizar.",
        },
        {
          number: 2,
          title: "Análisis de Datos (Días 2-7)",
          description:
            "Procesamos y analizamos tus datos, creamos visualizaciones y desarrollamos el dashboard interactivo.",
        },
        {
          number: 3,
          title: "Entrega de Resultados (Día 10)",
          description:
            "Presentamos el dashboard, entregamos el reporte ejecutivo y realizamos la sesión de consultoría.",
        },
      ],
      idealFor: [
        { icon: "fas fa-seedling", text: "Startups y empresas en crecimiento" },
        { icon: "fas fa-store", text: "PYMEs que buscan optimizar operaciones" },
        { icon: "fas fa-chart-line", text: "Empresas que necesitan insights básicos" },
        { icon: "fas fa-dollar-sign", text: "Presupuestos limitados pero con visión de crecimiento" },
      ],
      purchaseBenefits: [
        { icon: "fas fa-check", text: "Entrega en 10 días" },
        { icon: "fas fa-check", text: "Soporte incluido" },
        { icon: "fas fa-check", text: "Garantía de satisfacción" },
      ],
      guarantee: {
        icon: "fas fa-shield-alt",
        title: "Garantía de Satisfacción",
        description: "Si no estás completamente satisfecho con los resultados, te devolvemos el 100% de tu inversión.",
      },
      pageTitle: "Paquete Starter - Orem Analytics",
      pageDescription: "Paquete Starter de Orem Analytics - Análisis básico para empresas en crecimiento",
    },
    en: {
      title: "Starter Package",
      subtitle: "Basic analysis for growing companies",
      iconClass: "fas fa-rocket",
      price: "1,500",
      period: "per project",
      isPopular: false,
      isEnterprise: false,
      features: [
        {
          icon: "fas fa-chart-bar",
          title: "Analysis of 3 Key Variables",
          description:
            "We identify and analyze the 3 most important metrics for your business, providing clear insights into their behavior and trends.",
        },
        {
          icon: "fas fa-tachometer-alt",
          title: "Basic Interactive Dashboard",
          description:
            "Customized dashboard with clear and easy-to-understand visualizations, real-time updatable to monitor your progress.",
        },
        {
          icon: "fas fa-file-pdf",
          title: "Executive PDF Report",
          description:
            "Professional document with key findings, strategic recommendations, and an action plan to implement improvements.",
        },
        {
          icon: "fas fa-users",
          title: "1 Consulting Session",
          description:
            "60-minute meeting with our experts to explain results, answer questions, and define next steps.",
        },
      ],
      timeline: [
        {
          number: 1,
          title: "Initial Meeting (Day 1)",
          description: "We define objectives, identify data sources, and establish the 3 key variables to analyze.",
        },
        {
          number: 2,
          title: "Data Analysis (Days 2-7)",
          description:
            "We process and analyze your data, create visualizations, and develop the interactive dashboard.",
        },
        {
          number: 3,
          title: "Results Delivery (Day 10)",
          description: "We present the dashboard, deliver the executive report, and conduct the consulting session.",
        },
      ],
      idealFor: [
        { icon: "fas fa-seedling", text: "Startups and growing companies" },
        { icon: "fas fa-store", text: "SMEs looking to optimize operations" },
        { icon: "fas fa-chart-line", text: "Companies needing basic insights" },
        { icon: "fas fa-dollar-sign", text: "Limited budgets with a vision for growth" },
      ],
      purchaseBenefits: [
        { icon: "fas fa-check", text: "Delivery in 10 days" },
        { icon: "fas fa-check", text: "Support included" },
        { icon: "fas fa-check", text: "Satisfaction guarantee" },
      ],
      guarantee: {
        icon: "fas fa-shield-alt",
        title: "Satisfaction Guarantee",
        description: "If you are not completely satisfied with the results, we will refund 100% of your investment.",
      },
      pageTitle: "Starter Package - Orem Analytics",
      pageDescription: "Orem Analytics Starter Package - Basic analysis for growing companies",
    },
  },
  Professional: {
    es: {
      title: "Paquete Professional",
      subtitle: "Análisis avanzado para empresas establecidas",
      iconClass: "fas fa-chart-line",
      price: "3,500",
      period: "por proyecto",
      isPopular: true,
      isEnterprise: false,
      features: [
        {
          icon: "fas fa-chart-bar",
          title: "Análisis de 7 Variables Clave",
          description:
            "Análisis profundo de las 7 métricas más críticas para tu negocio, incluyendo correlaciones, tendencias y patrones ocultos.",
        },
        {
          icon: "fas fa-robot",
          title: "Dashboard Avanzado con IA",
          description:
            "Dashboard inteligente con capacidades de IA que aprende de tus datos y proporciona recomendaciones automáticas.",
        },
        {
          icon: "fas fa-crystal-ball",
          title: "Análisis Predictivo",
          description:
            "Modelos de machine learning para predecir tendencias futuras, demanda y oportunidades de crecimiento.",
        },
        {
          icon: "fas fa-users-cog",
          title: "3 Sesiones de Consultoría",
          description:
            "Tres reuniones estratégicas: inicial, intermedia y final para asegurar el máximo aprovechamiento de los insights.",
        },
        {
          icon: "fas fa-headset",
          title: "Soporte por 60 Días",
          description:
            "Soporte técnico completo durante 60 días para resolver dudas, ajustes y optimizaciones del dashboard.",
        },
      ],
      timeline: [
        {
          number: 1,
          title: "Consultoría Inicial (Día 1)",
          description:
            "Análisis profundo de objetivos, identificación de 7 variables clave y definición de modelos predictivos.",
        },
        {
          number: 2,
          title: "Desarrollo y Análisis (Días 2-10)",
          description:
            "Procesamiento avanzado de datos, desarrollo de modelos de IA y creación del dashboard inteligente.",
        },
        {
          number: 3,
          title: "Consultoría Intermedia (Día 12)",
          description: "Revisión de avances, ajustes basados en feedback y refinamiento de modelos predictivos.",
        },
        {
          number: 4,
          title: "Entrega Final (Día 15)",
          description:
            "Presentación completa, entrega de dashboard, capacitación del equipo y inicio del soporte de 60 días.",
        },
      ],
      idealFor: [
        { icon: "fas fa-building", text: "Empresas establecidas con datos complejos" },
        { icon: "fas fa-chart-line", text: "Negocios que buscan ventaja competitiva" },
        { icon: "fas fa-brain", text: "Organizaciones que necesitan análisis predictivo" },
        { icon: "fas fa-rocket", text: "Empresas en fase de expansión o escalamiento" },
      ],
      purchaseBenefits: [
        { icon: "fas fa-check", text: "Entrega en 15 días" },
        { icon: "fas fa-check", text: "Soporte por 60 días" },
        { icon: "fas fa-check", text: "IA y Machine Learning" },
        { icon: "fas fa-check", text: "3 sesiones de consultoría" },
      ],
      guarantee: {
        icon: "fas fa-shield-alt",
        title: "Garantía de Satisfacción",
        description: "Si no estás completamente satisfecho con los resultados, te devolvemos el 100% de tu inversión.",
      },
      pageTitle: "Paquete Professional - Orem Analytics",
      pageDescription: "Paquete Professional de Orem Analytics - Análisis avanzado para empresas establecidas",
    },
    en: {
      title: "Professional Package",
      subtitle: "Advanced analysis for established companies",
      iconClass: "fas fa-chart-line",
      price: "3,500",
      period: "per project",
      isPopular: true,
      isEnterprise: false,
      features: [
        {
          icon: "fas fa-chart-bar",
          title: "Analysis of 7 Key Variables",
          description:
            "In-depth analysis of the 7 most critical metrics for your business, including correlations, trends, and hidden patterns.",
        },
        {
          icon: "fas fa-robot",
          title: "Advanced AI-Powered Dashboard",
          description:
            "Intelligent dashboard with AI capabilities that learns from your data and provides automatic recommendations.",
        },
        {
          icon: "fas fa-crystal-ball",
          title: "Predictive Analytics",
          description: "Machine learning models to predict future trends, demand, and growth opportunities.",
        },
        {
          icon: "fas fa-users-cog",
          title: "3 Consulting Sessions",
          description:
            "Three strategic meetings: initial, intermediate, and final to ensure maximum utilization of insights.",
        },
        {
          icon: "fas fa-headset",
          title: "60-Day Support",
          description:
            "Full technical support for 60 days to resolve questions, adjustments, and dashboard optimizations.",
        },
      ],
      timeline: [
        {
          number: 1,
          title: "Initial Consulting (Day 1)",
          description:
            "In-depth analysis of objectives, identification of 7 key variables, and definition of predictive models.",
        },
        {
          number: 2,
          title: "Development and Analysis (Days 2-10)",
          description: "Advanced data processing, AI model development, and creation of the intelligent dashboard.",
        },
        {
          number: 3,
          title: "Intermediate Consulting (Day 12)",
          description: "Review of progress, adjustments based on feedback, and refinement of predictive models.",
        },
        {
          number: 4,
          title: "Final Delivery (Day 15)",
          description: "Complete presentation, dashboard delivery, team training, and start of 60-day support.",
        },
      ],
      idealFor: [
        { icon: "fas fa-building", text: "Established companies with complex data" },
        { icon: "fas fa-chart-line", text: "Businesses seeking a competitive advantage" },
        { icon: "fas fa-brain", text: "Organizations needing predictive analysis" },
        { icon: "fas fa-rocket", text: "Companies in expansion or scaling phase" },
      ],
      purchaseBenefits: [
        { icon: "fas fa-check", text: "Delivery in 15 days" },
        { icon: "fas fa-check", text: "60-day support" },
        { icon: "fas fa-check", text: "AI and Machine Learning" },
        { icon: "fas fa-check", text: "3 consulting sessions" },
      ],
      guarantee: {
        icon: "fas fa-shield-alt",
        title: "Satisfaction Guarantee",
        description: "If you are not completely satisfied with the results, we will refund 100% of your investment.",
      },
      pageTitle: "Professional Package - Orem Analytics",
      pageDescription: "Orem Analytics Professional Package - Advanced analysis for established companies",
    },
  },
  Enterprise: {
    es: {
      title: "Paquete Enterprise",
      subtitle: "Solución completa para grandes corporaciones",
      iconClass: "fas fa-crown",
      price: "7,500",
      period: "por proyecto",
      isPopular: false,
      isEnterprise: true,
      features: [
        {
          icon: "fas fa-infinity",
          title: "Análisis Ilimitado de Variables",
          description:
            "Análisis completo de todas las variables relevantes para tu negocio, sin límites en la cantidad de métricas a evaluar.",
        },
        {
          icon: "fas fa-brain",
          title: "IA y Machine Learning Avanzado",
          description:
            "Implementación de algoritmos de deep learning, redes neuronales y modelos de IA de última generación.",
        },
        {
          icon: "fas fa-plug",
          title: "Integración con Sistemas ERP",
          description:
            "Conexión directa con SAP, Oracle, Microsoft Dynamics y otros sistemas empresariales para análisis en tiempo real.",
        },
        {
          icon: "fas fa-users-cog",
          title: "Consultoría Ilimitada",
          description: "Acceso ilimitado a nuestro equipo de expertos durante todo el proyecto y período de soporte.",
        },
        {
          icon: "fas fa-headset",
          title: "Soporte 24/7 Prioritario",
          description:
            "Soporte técnico premium las 24 horas, los 7 días de la semana con tiempo de respuesta garantizado.",
        },
      ],
      timeline: [
        {
          number: 1,
          title: "Análisis Estratégico (Días 1-3)",
          description:
            "Evaluación completa de la arquitectura de datos, objetivos empresariales y definición de estrategia de IA.",
        },
        {
          number: 2,
          title: "Integración de Sistemas (Días 4-10)",
          description:
            "Conexión con sistemas ERP, configuración de pipelines de datos y establecimiento de arquitectura de IA.",
        },
        {
          number: 3,
          title: "Desarrollo de IA (Días 11-20)",
          description:
            "Implementación de modelos de machine learning avanzados y desarrollo de dashboards empresariales.",
        },
        {
          number: 4,
          title: "Capacitación y Go-Live (Días 21-25)",
          description: "Capacitación completa del equipo, puesta en producción y inicio del soporte 24/7.",
        },
      ],
      idealFor: [
        { icon: "fas fa-building", text: "Grandes corporaciones y multinacionales" },
        { icon: "fas fa-industry", text: "Empresas con sistemas ERP complejos" },
        { icon: "fas fa-globe", text: "Organizaciones con operaciones globales" },
        { icon: "fas fa-shield-alt", text: "Empresas que requieren máxima seguridad y soporte" },
      ],
      purchaseBenefits: [
        { icon: "fas fa-check", text: "Entrega en 25 días" },
        { icon: "fas fa-check", text: "Soporte 24/7 prioritario" },
        { icon: "fas fa-check", text: "Integración ERP completa" },
        { icon: "fas fa-check", text: "IA y ML de última generación" },
        { icon: "fas fa-check", text: "Consultoría ilimitada" },
      ],
      guarantee: {
        icon: "fas fa-award",
        title: "Garantía Enterprise",
        description:
          "Garantía extendida de satisfacción con SLA garantizado y soporte prioritario durante todo el proyecto.",
      },
      pageTitle: "Paquete Enterprise - Orem Analytics",
      pageDescription: "Paquete Enterprise de Orem Analytics - Solución completa para grandes corporaciones",
    },
  },
}

function switchLanguagePackage(lang) {
  currentLang = lang

  // Update active button
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active")
  })
  document.querySelector(`[data-lang="${lang}"]`).classList.add("active")

  // Update all text elements
  document.querySelectorAll("[data-es][data-en]").forEach((element) => {
    element.textContent = element.getAttribute(`data-${lang}`)
  })

  // Update meta tags for SEO
  document.querySelector("title").textContent = document.querySelector("title").getAttribute(`data-${lang}`)
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", document.querySelector('meta[name="description"]').getAttribute(`data-${lang}`))

  // Reload package details for current language
  loadPackageDetails()
}

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(param)
}

function loadPackageDetails() {
  const packageName = getQueryParam("package")
  const data = packageData[packageName]?.[currentLang]

  if (!data) {
    // Handle case where package name is invalid or data is missing
    document.getElementById("packageHero").innerHTML =
      `<h1 class="package-title">Paquete no encontrado</h1><p class="package-subtitle">Por favor, regresa a la página principal.</p>`
    document.getElementById("featuresDetailed").innerHTML = ""
    document.getElementById("timeline").innerHTML = ""
    document.getElementById("idealFor").innerHTML = ""
    document.getElementById("purchaseCard").innerHTML = ""
    document.getElementById("guaranteeCard").innerHTML = ""
    return
  }

  // Update page title and description
  document.getElementById("packagePageTitle").textContent = data.pageTitle
  document.getElementById("packagePageDescription").setAttribute("content", data.pageDescription)

  // Render Package Hero
  const heroHtml = `
        ${
          data.isPopular
            ? `<div class="popular-badge-large" data-es="Más Popular" data-en="Most Popular">
            <i class="fas fa-crown"></i>
            <span data-es="Más Popular" data-en="Most Popular">Más Popular</span>
        </div>`
            : ""
        }
        ${
          data.isEnterprise
            ? `<div class="enterprise-badge-large" data-es="Enterprise" data-en="Enterprise">
            <i class="fas fa-crown"></i>
            <span data-es="Enterprise" data-en="Enterprise">Enterprise</span>
        </div>`
            : ""
        }
        <div class="package-icon-large">
            <i class="${data.iconClass}"></i>
        </div>
        <h1 class="package-title" data-es="${packageData[packageName].es.title}" data-en="${packageData[packageName].en.title}">${data.title}</h1>
        <p class="package-subtitle" data-es="${packageData[packageName].es.subtitle}" data-en="${packageData[packageName].en.subtitle}">${data.subtitle}</p>
        <div class="package-price-large">
            <span class="currency">$</span>
            <span class="amount">${data.price}</span>
            <span class="period" data-es="${packageData[packageName].es.period}" data-en="${packageData[packageName].en.period}">${data.period}</span>
        </div>
    `
  document.getElementById("packageHero").innerHTML = heroHtml
  if (data.isPopular) document.getElementById("packageHero").classList.add("popular")
  if (data.isEnterprise) document.getElementById("packageHero").classList.add("enterprise")

  // Render Features
  const featuresHtml = data.features
    .map(
      (f) => `
        <div class="feature-item">
            <div class="feature-icon">
                <i class="${f.icon}"></i>
            </div>
            <div class="feature-content">
                <h3>${f.title}</h3>
                <p>${f.description}</p>
            </div>
        </div>
    `,
    )
    .join("")
  document.getElementById("featuresDetailed").innerHTML = featuresHtml

  // Render Timeline
  const timelineHtml = data.timeline
    .map(
      (t) => `
        <div class="timeline-item">
            <div class="timeline-number">${t.number}</div>
            <div class="timeline-content">
                <h3>${t.title}</h3>
                <p>${t.description}</p>
            </div>
        </div>
    `,
    )
    .join("")
  document.getElementById("timeline").innerHTML = timelineHtml

  // Render Ideal For
  const idealForHtml = data.idealFor
    .map(
      (i) => `
        <div class="ideal-item">
            <i class="${i.icon}"></i>
            <span>${i.text}</span>
        </div>
    `,
    )
    .join("")
  document.getElementById("idealFor").innerHTML = idealForHtml

  // Render Purchase Card
  const purchaseBenefitsHtml = data.purchaseBenefits
    .map(
      (b) => `
        <div class="benefit">
            <i class="${b.icon}"></i>
            <span>${b.text}</span>
        </div>
    `,
    )
    .join("")

  const purchaseCardHtml = `
        <div class="purchase-header">
            <h3 data-es="${packageName === "Enterprise" ? "Solución Enterprise" : "¿Listo para comenzar?"}" data-en="${packageName === "Enterprise" ? "Enterprise Solution" : "Ready to start?"}">${packageName === "Enterprise" ? data.purchaseHeaderTitle : currentLang === "es" ? "¿Listo para comenzar?" : "Ready to start?"}</h3>
            <p data-es="${packageName === "Enterprise" ? "La solución más completa y avanzada" : "Transforma tus datos en decisiones inteligentes"}" data-en="${packageName === "Enterprise" ? "The most complete and advanced solution" : "Transform your data into intelligent decisions"}">${packageName === "Enterprise" ? data.purchaseHeaderSubtitle : currentLang === "es" ? "Transforma tus datos en decisiones inteligentes" : "Transform your data into intelligent decisions"}</p>
        </div>
        
        <div class="purchase-price">
            <span class="currency">$</span>
            <span class="amount">${data.price}</span>
            <span class="period" data-es="${packageData[packageName].es.period}" data-en="${packageData[packageName].en.period}">${data.period}</span>
        </div>
        
        <div class="purchase-benefits">
            ${purchaseBenefitsHtml}
        </div>
        
        <button class="btn btn-primary purchase-btn" onclick="contactForPurchase('${packageName}')">
            <i class="${packageName === "Enterprise" ? "fas fa-phone" : "fas fa-shopping-cart"}"></i>
            <span data-es="${packageName === "Enterprise" ? "Contactar Ventas" : "Comprar Ahora"}" data-en="${packageName === "Enterprise" ? "Contact Sales" : "Buy Now"}">${packageName === "Enterprise" ? (currentLang === "es" ? "Contactar Ventas" : "Contact Sales") : currentLang === "es" ? "Comprar Ahora" : "Buy Now"}</span>
        </button>
        
        <button class="btn btn-secondary contact-btn" onclick="contactForInfo('${packageName}')">
            <i class="fas fa-comments"></i>
            <span data-es="Más Información" data-en="More Information">Más Información</span>
        </button>
    `
  document.getElementById("purchaseCard").innerHTML = purchaseCardHtml
  if (data.isPopular) document.getElementById("purchaseCard").classList.add("popular")
  if (data.isEnterprise) document.getElementById("purchaseCard").classList.add("enterprise")

  // Render Guarantee Card
  const guaranteeCardHtml = `
        <div class="guarantee-icon">
            <i class="${data.guarantee.icon}"></i>
        </div>
        <h4>${data.guarantee.title}</h4>
        <p>${data.guarantee.description}</p>
    `
  document.getElementById("guaranteeCard").innerHTML = guaranteeCardHtml

  // Update language attributes for dynamic content
  document.querySelectorAll("#packageHero [data-es], #packageHero [data-en]").forEach((el) => {
    el.textContent = el.getAttribute(`data-${currentLang}`)
  })
  document.querySelectorAll("#purchaseCard [data-es], #purchaseCard [data-en]").forEach((el) => {
    el.textContent = el.getAttribute(`data-${currentLang}`)
  })
}

// Contact functions for package pages
function contactForPurchase(packageName) {
  const data = packageData[packageName]?.[currentLang]
  if (!data) return

  const message = `🛒 *${currentLang === "es" ? "QUIERO COMPRAR" : "I WANT TO BUY"} - ${data.title}*

${currentLang === "es" ? "¡Hola! Estoy listo para adquirir el" : "Hello! I am ready to purchase the"} ${data.title} ${currentLang === "es" ? "de Orem Analytics." : "from Orem Analytics."}

💰 *${currentLang === "es" ? "Precio" : "Price"}:* $${data.price}
⏱️ *${currentLang === "es" ? "Entrega" : "Delivery"}:* ${
    data.purchaseBenefits
      .find((b) => b.text.includes("Entrega") || b.text.includes("Delivery"))
      ?.text.replace("Entrega en ", "")
      .replace("Delivery in ", "") || "N/A"
  }
📋 *${currentLang === "es" ? "Incluye" : "Includes"}:* ${data.features.map((f) => f.title).join(", ")}

*${currentLang === "es" ? "¿Cuáles son los próximos pasos para proceder con la compra?" : "What are the next steps to proceed with the purchase?"}*

${currentLang === "es" ? "Por favor, envíenme:" : "Please send me:"}
• ${currentLang === "es" ? "Proceso de pago" : "Payment process"}
• ${currentLang === "es" ? "Contrato o términos" : "Contract or terms"}
• ${currentLang === "es" ? "Cronograma detallado" : "Detailed timeline"}
• ${currentLang === "es" ? "Información para comenzar" : "Information to get started"}

${currentLang === "es" ? "¡Espero su respuesta para iniciar el proyecto!" : "I look forward to your response to start the project!"}
  `

  const whatsappUrl = `https://wa.me/51926883329?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, "_blank")
}

function contactForInfo(packageName) {
  const data = packageData[packageName]?.[currentLang]
  if (!data) return

  const message = `ℹ️ *${currentLang === "es" ? "Consulta sobre" : "Inquiry about"} ${data.title}*

${currentLang === "es" ? "Hola, estoy interesado en el" : "Hello, I am interested in the"} ${data.title} ${currentLang === "es" ? "y me gustaría obtener más información sobre:" : "and would like to get more information about:"}

• ${currentLang === "es" ? "Detalles técnicos del proceso" : "Technical details of the process"}
• ${currentLang === "es" ? "Ejemplos de proyectos similares" : "Examples of similar projects"}
• ${currentLang === "es" ? "Metodología de trabajo" : "Work methodology"}
• ${currentLang === "es" ? "Garantías y términos" : "Guarantees and terms"}
• ${currentLang === "es" ? "Posibilidad de personalización" : "Customization possibilities"}

${currentLang === "es" ? "¿Podrían agendar una llamada para resolver mis dudas?" : "Could you schedule a call to answer my questions?"}

${currentLang === "es" ? "¡Gracias!" : "Thank you!"}
  `

  const whatsappUrl = `https://wa.me/51926883329?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, "_blank")
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar")
  const scrollY = window.scrollY

  if (scrollY > 30) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Mobile menu toggle
function setupMobileMenu() {
  const navToggle = document.querySelector(".nav-toggle")
  const navMenu = document.querySelector(".nav-menu")

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      navToggle.classList.toggle("active")
    })
  }
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Setup language switching
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      switchLanguagePackage(btn.getAttribute("data-lang"))
    })
  })

  // Setup navigation links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      // For links pointing to index.html sections, let the browser handle it
      if (this.getAttribute("href").startsWith("index.html#")) {
        return
      }
      // For internal links on the same page (if any, though not expected for package-details)
      if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault()
        const targetId = this.getAttribute("href").substring(1)
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    })
  })

  loadPackageDetails() // Load content based on URL parameter
  setupMobileMenu()

  // Set initial language
  switchLanguagePackage(currentLang)
})
