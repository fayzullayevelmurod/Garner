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

// includedSwiper
let swiper3 = new Swiper(".recommendationsSwiper", {
  slidesPerView: 1.1,
  spaceBetween: 10,
  breakpoints: {
    800: {
      slidesPerView: 2.4,
    },
    1200: {
      slidesPerView: 3.1,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});
// includedSwiper

// cookSwiper
let swiper4 = new Swiper(".cookSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".cook-pagination",
    clickable: true,
  },
});
// cookSwiper

// checkbox
const checkbox = document.querySelector(".custom-checkbox input");

checkbox.addEventListener("change", () => {
  console.log(checkbox.checked);
});
// checkbox


// input-mask
document.addEventListener("DOMContentLoaded", () => {
  // =====================================================
  // CUSTOM SELECT
  // =====================================================

  const selects = document.querySelectorAll("[data-select]");

  selects.forEach((select) => {
    const trigger = select.querySelector(".custom-select__trigger");
    const value = select.querySelector(".custom-select__value");
    const options = select.querySelectorAll(".custom-select__option");
    const hiddenInput = select.querySelector('input[type="hidden"]');

    if (!trigger) return;

    trigger.addEventListener("click", (event) => {
      event.stopPropagation();

      const isOpen = select.classList.contains("is-open");

      closeAll();

      if (!isOpen) {
        select.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });

    options.forEach((option) => {
      option.addEventListener("click", () => {
        const selectedValue = option.dataset.value || "";
        const selectedText = option.textContent.trim();

        value.textContent = selectedText;

        if (hiddenInput) {
          hiddenInput.value = selectedValue;

          hiddenInput.dispatchEvent(
            new Event("change", {
              bubbles: true,
            }),
          );
        }

        options.forEach((item) => {
          item.classList.remove("is-selected");
        });

        option.classList.add("is-selected");

        select.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
      });
    });
  });

  // =====================================================
  // PHONE COUNTRY SELECT
  // =====================================================

  const phoneInput = document.querySelector(".phone-input");

  if (phoneInput) {
    const countryTrigger = phoneInput.querySelector(
      ".phone-input__country-trigger",
    );

    const countryOptions = phoneInput.querySelectorAll(
      ".phone-input__country-option",
    );

    const countryFlag = phoneInput.querySelector(
      ".phone-input__country-trigger .phone-input__flag",
    );

    const countryCode = phoneInput.querySelector(".phone-input__code");

    const input = phoneInput.querySelector(".phone-input__input");

    // Open country dropdown
    countryTrigger.addEventListener("click", (event) => {
      event.stopPropagation();

      const isOpen = phoneInput.classList.contains("is-country-open");

      closeAll();

      if (!isOpen) {
        phoneInput.classList.add("is-country-open");

        countryTrigger.setAttribute("aria-expanded", "true");
      }
    });

    // Country select
    countryOptions.forEach((option) => {
      option.addEventListener("click", () => {
        const code = option.dataset.code;
        const mask = option.dataset.mask;
        const country = option.dataset.country;

        // Update code
        countryCode.textContent = code;

        // Update flag
        const selectedFlag = option.querySelector(".phone-input__flag");

        if (selectedFlag) {
          countryFlag.innerHTML = selectedFlag.innerHTML;

          countryFlag.className = `phone-input__flag phone-input__flag--${country}`;
        }

        // Selected state
        countryOptions.forEach((item) => {
          item.classList.remove("is-selected");
        });

        option.classList.add("is-selected");

        // Placeholder
        input.placeholder = mask;

        // ==========================================
        // iMask
        // ==========================================

        if (typeof window.phoneMask !== "undefined" && window.phoneMask) {
          window.phoneMask.updateOptions({
            mask,
          });

          window.phoneMask.value = "";
        }

        phoneInput.classList.remove("is-country-open");

        countryTrigger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // =====================================================
  // CLOSE ALL
  // =====================================================

  function closeAll() {
    document.querySelectorAll(".custom-select.is-open").forEach((select) => {
      select.classList.remove("is-open");

      const trigger = select.querySelector(".custom-select__trigger");

      if (trigger) {
        trigger.setAttribute("aria-expanded", "false");
      }
    });

    document
      .querySelectorAll(".phone-input.is-country-open")
      .forEach((phone) => {
        phone.classList.remove("is-country-open");

        const trigger = phone.querySelector(".phone-input__country-trigger");

        if (trigger) {
          trigger.setAttribute("aria-expanded", "false");
        }
      });
  }

  // =====================================================
  // OUTSIDE CLICK
  // =====================================================

  document.addEventListener("click", () => {
    closeAll();
  });

  // =====================================================
  // ESC
  // =====================================================

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAll();
    }
  });
});
// input-mask
