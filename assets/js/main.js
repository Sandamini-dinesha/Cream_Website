document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Intersection Observer for fade-in animations
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  fadeElements.forEach(el => {
    appearOnScroll.observe(el);
  });

  // Universal Back Button (Except for Home and Success page)
  const path = window.location.pathname.toLowerCase();
  const isHomePage = path.endsWith('index.html') || path === '/' || path.endsWith('\\');
  const isSuccessPage = path.endsWith('success.html');

  if (!isHomePage && !isSuccessPage) {
    const backBtn = document.createElement('button');
    backBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
    backBtn.className = 'fixed bottom-8 left-8 z-[100] bg-white border border-[#D4AF37]/50 text-[#D4AF37] w-14 h-14 rounded-full shadow-lg hover:bg-[#D4AF37] hover:text-white hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex items-center justify-center text-xl cursor-pointer';
    backBtn.onclick = (e) => {
        e.preventDefault();
        window.history.back();
    };
    backBtn.title = "Go Back";
    document.body.appendChild(backBtn);
  }
});
