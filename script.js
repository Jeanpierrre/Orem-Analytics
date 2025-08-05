// Language switching functionality
let currentLang = "es"

function switchLanguage(lang) {
  currentLang = lang
  localStorage.setItem("currentLang", lang) // Save language to localStorage

  // Update active button
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active")
  })
  document.querySelector(`[data-lang="${lang}"]`).classList.add("active")

  // Update all text elements
  document.querySelectorAll("[data-es][data-en]").forEach((element) => {
    element.textContent = element.getAttribute(`data-${lang}`)
  })

  // Update placeholders
  document.querySelectorAll("input[data-placeholder-es], textarea[data-placeholder-es]").forEach((element) => {
    const placeholder = element.getAttribute(`data-placeholder-${lang}`)
    if (placeholder) {
      element.placeholder = placeholder
    }
  })

  // Update meta tags for SEO
  document.querySelector("title").textContent = document.querySelector("title").getAttribute(`data-${lang}`)
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", document.querySelector('meta[name="description"]').getAttribute(`data-${lang}`))
}

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
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

// Enhanced scroll animations
const observerOptions = {
  threshold: 0.02,
  rootMargin: "0px 0px -20px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const delay = entry.target.getAttribute("data-delay") || 0
      setTimeout(() => {
        entry.target.classList.add("animated")
      }, delay)
    }
  })
}, observerOptions)

// EmailJS contact form functionality
function setupContactForm() {
  const contactForm = document.getElementById("contactForm")
  if (!contactForm) return

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    // Get form data
    const formData = new FormData(this)
    const firstName = formData.get("firstName")
    const lastName = formData.get("lastName")
    const companyName = formData.get("companyName") // New field
    const email = formData.get("email")
    const message = formData.get("message") // Now optional

    // Validation
    if (!firstName || !lastName || !email) {
      // Message is no longer required
      showNotification(
        currentLang === "es"
          ? "Por favor, completa los campos obligatorios (Nombre, Apellido, Email)."
          : "Please fill in the required fields (First Name, Last Name, Email).",
        "error",
      )
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      showNotification(
        currentLang === "es" ? "Por favor, ingresa un email válido." : "Please enter a valid email address.",
        "error",
      )
      return
    }

    const privacyCheckbox = document.getElementById("privacy")
    if (!privacyCheckbox.checked) {
      showNotification(
        currentLang === "es" ? "Debes aceptar la política de privacidad." : "You must accept the privacy policy.",
        "error",
      )
      return
    }

    // Show loading state
    const submitButton = this.querySelector('button[type="submit"]')
    const originalText = submitButton.innerHTML
    submitButton.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> ' + (currentLang === "es" ? "Enviando..." : "Sending...")
    submitButton.disabled = true

    // EmailJS parameters
    const templateParams = {
      firstName: firstName,
      lastName: lastName,
      companyName: companyName, // Include new field
      email: email,
      message: message,
    }

    window.emailjs
      .send("service_7h5z4bm", "template_ajvwydp", templateParams) // Replace with your Service ID and Template ID
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text)
          showNotification(
            currentLang === "es"
              ? "¡Solicitud enviada! Te contactaremos pronto para tu diagnóstico."
              : "Request sent! We will contact you soon for your diagnostic.",
            "success",
          )
          contactForm.reset()
          submitButton.innerHTML = originalText
          submitButton.disabled = false
        },
        (error) => {
          console.log("FAILED...", error)
          showNotification(
            currentLang === "es"
              ? "Error al enviar la solicitud. Por favor, inténtalo de nuevo."
              : "Failed to send request. Please try again.",
            "error",
          )
          submitButton.innerHTML = originalText
          submitButton.disabled = false
        },
      )
  })
}

// Notification system
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification ${type}`
  notification.innerHTML = `
      <i class="fas fa-${type === "success" ? "check-circle" : type === "error" ? "exclamation-circle" : "info-circle"}"></i>
      <span>${message}</span>
      <button onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>
  `

  // Add notification styles
  notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: ${type === "success" ? "linear-gradient(135deg, #10b981, #059669)" : type === "error" ? "linear-gradient(135deg, #ef4444, #dc2626)" : "linear-gradient(135deg, #667eea, #764ba2)"};
      color: white;
      padding: 15px 20px;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      z-index: 10000;
      display: flex;
      align-items: center;
      gap: 10px;
      max-width: 400px;
      animation: slideInRight 0.3s ease;
  `

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease"
    setTimeout(() => notification.remove(), 300)
  }, 5000)
}

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
      switchLanguage(btn.getAttribute("data-lang"))
    })
  })

  // Setup navigation links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      scrollToSection(targetId)
    })
  })

  // Initialize all components
  const animateElements = document.querySelectorAll(".animate-on-scroll")
  animateElements.forEach((el) => observer.observe(el))

  setupContactForm()
  setupMobileMenu()

  // Trigger initial animations
  setTimeout(() => {
    document.body.classList.add("loaded")
  }, 100)

  // Set initial language from localStorage or default
  const storedLang = localStorage.getItem("currentLang")
  if (storedLang) {
    switchLanguage(storedLang)
  } else {
    switchLanguage("es") // Default to Spanish
  }
})
