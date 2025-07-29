// Contact functions for package pages
function contactForPurchase(packageName) {
  const packageDetails = {
    Starter: {
      price: "$1,500",
      delivery: "10 días",
      features: "Análisis de 3 variables, Dashboard básico, Reporte PDF, 1 consultoría",
    },
    Professional: {
      price: "$3,500",
      delivery: "15 días",
      features: "Análisis de 7 variables, Dashboard con IA, Análisis predictivo, 3 consultorías, Soporte 60 días",
    },
    Enterprise: {
      price: "$7,500",
      delivery: "25 días",
      features: "Análisis ilimitado, IA avanzada, Integración ERP, Consultoría ilimitada, Soporte 24/7",
    },
  }

  const details = packageDetails[packageName]

  const message = `🛒 *QUIERO COMPRAR - Paquete ${packageName}*

¡Hola! Estoy listo para adquirir el Paquete ${packageName} de Orem Analytics.

💰 *Precio:* ${details.price}
⏱️ *Entrega:* ${details.delivery}
📋 *Incluye:* ${details.features}

*¿Cuáles son los próximos pasos para proceder con la compra?*

Por favor, envíenme:
• Proceso de pago
• Contrato o términos
• Cronograma detallado
• Información para comenzar

¡Espero su respuesta para iniciar el proyecto!`

  const whatsappUrl = `https://wa.me/51926883329?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, "_blank")
}

function contactForInfo(packageName) {
  const message = `ℹ️ *Consulta sobre Paquete ${packageName}*

Hola, estoy interesado en el Paquete ${packageName} y me gustaría obtener más información sobre:

• Detalles técnicos del proceso
• Ejemplos de proyectos similares
• Metodología de trabajo
• Garantías y términos
• Posibilidad de personalización

¿Podrían agendar una llamada para resolver mis dudas?

¡Gracias!`

  const whatsappUrl = `https://wa.me/51926883329?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, "_blank")
}

// Initialize navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar")
  const scrollY = window.scrollY

  if (scrollY > 30) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Add smooth scrolling for navigation links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    if (this.getAttribute("href").startsWith("index.html#")) {
      // Let the browser handle navigation to index.html with hash
      return
    }
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
