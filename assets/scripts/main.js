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

// slider_stories
const customSwiper = new Swiper(".customSwiper", {
  slidesPerView: 5,
  centeredSlides: true,
  spaceBetween: 0,
  initialSlide: 2,
  speed: 600,

  grabCursor: true,

  watchSlidesProgress: true,

  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },

    576: {
      slidesPerView: 2.3,
    },

    850: {
      slidesPerView: 3,
    },

    1200: {
      slidesPerView: 5,
    },
  },
});
// slider_stories

// similarSwiper
let swiper = new Swiper(".similarSwiper", {
  slidesPerView: 1.1,
  spaceBetween: 0,
  breakpoints: {
    420: {
      slidesPerView: 2.3,
    },
    640: {
      slidesPerView: 3.3,
    },
    993: {
      slidesPerView: 4.3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
// similarSwiper

// includedSwiper
let swiper2 = new Swiper(".includedSwiper", {
  slidesPerView: 1.2,
  spaceBetween: 10,
  breakpoints: {
    680: {
      slidesPerView: 5,
    },
  },
});
// includedSwiper

// cookSwiper
let swiper3 = new Swiper(".cookSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".cook-pagination",
    clickable: true,
  },
});
// cookSwiper
