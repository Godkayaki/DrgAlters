// Small interactive touches: keyboard focus, nav highlighting, back link behavior

document.addEventListener('DOMContentLoaded', () => {
  // simple active nav highlight by hash
  const links = document.querySelectorAll('.main-nav .nav-link');
  links.forEach(a => {
    a.addEventListener('click', (e) => {
      links.forEach(x => x.classList.remove('active'));
      a.classList.add('active');
    });
  });

  // Back to Work anchor: smooth scroll to top as placeholder behavior
  const back = document.getElementById('backToWork');
  back.addEventListener('click', (ev) => {
    ev.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Accessibility: show outline when keyboard navigating
  function handleFirstTab(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing');
      window.removeEventListener('keydown', handleFirstTab);
    }
  }
  window.addEventListener('keydown', handleFirstTab);
});

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image-grid-four img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

    // Open lightbox
  images.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('visible');
    });
  });

  // Close lightbox when clicking outside the image
  lightbox.addEventListener('click', (e) => {
    // Only close if the background itself was clicked
    if (e.target === lightbox) {
      lightbox.classList.remove('visible');
      setTimeout(() => {
        lightboxImg.src = '';
      }, 400); // match CSS transition duration
    }
  });  
});