document.addEventListener("DOMContentLoaded", function() {
  
  // 1. Reveal Observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el);
  });


  // 2. Mobile Menu Toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }


  // 3. Glassmorphism Nav on Scroll
  const siteNav = document.getElementById('site-nav');
  const navInner = document.getElementById('nav-inner');

  if (siteNav && navInner) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        // Scrolled state: Frosted glass, border, tighter padding
        siteNav.classList.add('bg-void/60', 'backdrop-blur-md', '!border-hair');
        navInner.classList.remove('py-6');
        navInner.classList.add('py-3');
      } else {
        // Top of page: Transparent, no border, relaxed padding
        siteNav.classList.remove('bg-void/60', 'backdrop-blur-md', '!border-hair');
        navInner.classList.add('py-6');
        navInner.classList.remove('py-3');
      }
    });
  }

});