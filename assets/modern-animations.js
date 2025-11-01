/**
 * Modern Animations and Interactions
 * Handles scroll reveal animations and modern UI interactions
 */

class ModernAnimations {
  constructor() {
    this.init();
  }

  init() {
    // Initialize on DOM ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    this.initScrollReveal();
    this.initParallax();
    this.initSmoothScroll();
    this.initModernHovers();
  }

  /**
   * Scroll Reveal Animations
   * Reveals elements as they come into view
   */
  initScrollReveal() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Skip animations if user prefers reduced motion
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');

          // Optionally unobserve after animation
          if (!entry.target.hasAttribute('data-reveal-repeat')) {
            observer.unobserve(entry.target);
          }
        } else if (entry.target.hasAttribute('data-reveal-repeat')) {
          entry.target.classList.remove('active');
        }
      });
    }, observerOptions);

    // Observe all reveal elements
    const revealElements = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale');
    revealElements.forEach(el => observer.observe(el));

    // Store observer for cleanup
    this.revealObserver = observer;
  }

  /**
   * Parallax Effect
   * Creates subtle parallax scrolling for designated elements
   */
  initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    if (parallaxElements.length === 0) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;

      parallaxElements.forEach(element => {
        const speed = element.dataset.parallax || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    // Use requestAnimationFrame for smooth scrolling
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /**
   * Smooth Scroll
   * Enhances anchor link scrolling
   */
  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if it's just "#" or if smooth scroll is disabled
        if (href === '#' || href === '#!') return;

        const target = document.querySelector(href);

        if (target) {
          e.preventDefault();

          const headerOffset = 80; // Adjust based on your header height
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // Update URL without jumping
          if (history.pushState) {
            history.pushState(null, null, href);
          }
        }
      });
    });
  }

  /**
   * Modern Hover Effects
   * Adds interactive hover effects to products and cards
   */
  initModernHovers() {
    const cards = document.querySelectorAll('.product-card--modern, .collection-card--modern');

    cards.forEach(card => {
      // Mouse move effect for subtle tilt
      card.addEventListener('mousemove', (e) => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  /**
   * Cleanup method
   */
  destroy() {
    if (this.revealObserver) {
      this.revealObserver.disconnect();
    }
  }
}

// Initialize when script loads
const modernAnimations = new ModernAnimations();

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ModernAnimations;
}

/**
 * Additional Utility Functions
 */

// Lazy load images with modern approach
function initModernLazyLoad() {
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
    });
  } else {
    // Fallback to Intersection Observer
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.add('loaded');
          }
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// Add modern loading states
function addModernLoadingStates() {
  document.addEventListener('click', (e) => {
    const button = e.target.closest('button, .btn, [role="button"]');

    if (button && button.type === 'submit') {
      button.classList.add('loading-pulse');

      // Remove loading state after form submission or timeout
      setTimeout(() => {
        button.classList.remove('loading-pulse');
      }, 3000);
    }
  });
}

// Performance optimization: Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', () => {
  initModernLazyLoad();
  addModernLoadingStates();

  // Add entrance animation to page
  document.body.classList.add('page-loaded');

  // Update viewport height for mobile browsers
  const updateVH = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  updateVH();
  window.addEventListener('resize', debounce(updateVH, 250));
});

// Page transition support
if (document.startViewTransition) {
  // Modern browsers with View Transitions API support
  window.addEventListener('beforeunload', () => {
    document.documentElement.classList.add('page-transitioning');
  });
}

// Accessibility: Announce dynamic content changes
function announceToScreenReader(message, priority = 'polite') {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.classList.add('sr-only');
  announcement.textContent = message;

  document.body.appendChild(announcement);

  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

// Export utilities
window.modernUtils = {
  debounce,
  announceToScreenReader
};
