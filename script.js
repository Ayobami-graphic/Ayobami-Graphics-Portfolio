const sliders = document.querySelectorAll('.slider-wrapper');

sliders.forEach(slider => {
  const container = slider.querySelector('.slider-container');
  const prevBtn = slider.querySelector('.prev');
  const nextBtn = slider.querySelector('.next');

  prevBtn.addEventListener('click', () => {
    container.scrollBy({ left: -320, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    container.scrollBy({ left: 320, behavior: 'smooth' });
  });
});
    const aboutLink = document.querySelector('a[href="#about"]');
    const aboutSection = document.getElementById('about');

    aboutLink.addEventListener('click', (e) => {
      e.preventDefault();
      aboutSection.classList.toggle('hidden');
    });
  


    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
    // Auto-sliding testimonials
const testimonialContainer = document.querySelector(".testimonial-container");
const testimonialImages = document.querySelectorAll(".testimonial-container img");

let testimonialIndex = 0;

function slideTestimonials() {
  testimonialIndex++;
  if (testimonialIndex >= testimonialImages.length) {
    testimonialIndex = 0;
  }
  testimonialContainer.style.transform = `translateX(${-testimonialIndex * 100}%)`;
}

setInterval(slideTestimonials, 4000); // change every 4 seconds
// Back to Top Button
const backToTopBtn = document.getElementById("backToTop");

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
document.querySelectorAll(".slider").forEach((slider) => {
    const container = slider.querySelector(".slider-container");
    const images = container.querySelectorAll("img");
    const prevBtn = slider.querySelector(".prev");
    const nextBtn = slider.querySelector(".next");
  
    let currentIndex = 0;
  
    function updateSlider() {
      container.style.transform = `translateX(${-currentIndex * 100}%)`;
    }
  
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateSlider();
    });
  
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlider();
    });
  });
  

