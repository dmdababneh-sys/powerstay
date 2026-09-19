document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const header = document.getElementById('main-header');

  let isScrolling = false;

  // Function to update header background
  function updateHeaderBackground() {
    const isMenuOpen = !mobileMenu.classList.contains('danial-dababneh-bwd-hidden');
    if (window.scrollY > 20 || isMenuOpen) {
      header.classList.add('danial-dababneh-bwd-bg-primary', 'danial-dababneh-bwd-backdrop-blur-md', 'danial-dababneh-bwd-shadow-lg', 'danial-dababneh-bwd-border-b', 'danial-dababneh-bwd-border-white/10');
      header.classList.remove('danial-dababneh-bwd-bg-transparent', 'danial-dababneh-bwd-shadow-sm', 'danial-dababneh-bwd-border-transparent', 'danial-dababneh-bwd-bg-primary/95');
    } else {
      header.classList.add('danial-dababneh-bwd-bg-transparent', 'danial-dababneh-bwd-border-transparent');
      header.classList.remove('danial-dababneh-bwd-bg-primary', 'danial-dababneh-bwd-bg-primary/95', 'danial-dababneh-bwd-backdrop-blur-md', 'danial-dababneh-bwd-shadow-lg', 'danial-dababneh-bwd-border-b', 'danial-dababneh-bwd-border-white/10');
    }
    isScrolling = false;
  }

  // Mobile menu toggle
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('danial-dababneh-bwd-hidden');
      menuIcon.classList.toggle('danial-dababneh-bwd-hidden');
      closeIcon.classList.toggle('danial-dababneh-bwd-hidden');
      if(header) requestAnimationFrame(updateHeaderBackground);
    });
  }

  // Header scroll effect - Optimized with requestAnimationFrame for INP
  if (header) {
    window.addEventListener('scroll', () => {
      if (!isScrolling) {
        window.requestAnimationFrame(updateHeaderBackground);
        isScrolling = true;
      }
    }, { passive: true });

    // Trigger once on load to initialize header state
    requestAnimationFrame(updateHeaderBackground);
  }

  // Close menu when clicking a link
  if (mobileMenu && menuIcon && closeIcon) {
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('danial-dababneh-bwd-hidden');
        closeIcon.classList.add('danial-dababneh-bwd-hidden');
        menuIcon.classList.remove('danial-dababneh-bwd-hidden');
      });
    });
  }
});
