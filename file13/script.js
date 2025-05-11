// Sticky Navigation
window.onscroll = function() {
    let nav = document.querySelector('header');
    if (window.pageYOffset > 0) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  
    // Scroll to Top Button
    let scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  };
  
  // Scroll to Top Function
  document.getElementById('scrollToTopBtn').onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  