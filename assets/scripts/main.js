const bodyHidden = () => {
  document.querySelector("body").style.overflow = "hidden";
};

const bodyVisible = () => {
  document.querySelector("body").style.overflow = "visible";
};

const phoneInp = document.querySelectorAll('input[type="tel"]');

if (phoneInp.length) {
  phoneInp.forEach((el) => {
    IMask(el, {
      mask: "+{7}(000) 000-00-00",
    });
  });
}

const homeSwp = new Swiper(".home-swp", {
  effect: "fade",
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// let swiper = new Swiper(".treatmentsSwiper", {
//   slidesPerView: 1.10,
//   spaceBetween: 28,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 2.2,
//       spaceBetween: 28,
//     },
//     993: {
//       slidesPerView: 3.2,
//       spaceBetween: 28,
//     },
//     1200: {
//       slidesPerView: 3.6,
//       spaceBetween: 40,
//     },
//   },
// });
