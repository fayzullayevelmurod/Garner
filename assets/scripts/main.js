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


// Header menu
const headerMenu = document.querySelectorAll('.header-menu');

if (headerMenu.length) {
  headerMenu.forEach(el => {
    const headerMenuBtn = el.querySelector('.header-menu__btn');
    headerMenuBtn.onclick = () => {
      el.classList.toggle('active')
    }
  })
}
// Header menu end

// Header accordion
const headerAccordions = document.querySelectorAll('.header-accordion');

if (headerAccordions.length) {
  headerAccordions.forEach((item) => {
    const btn = item.querySelector('.header-accordion__btn');
    const content = item.querySelector('.header-accordion__body-wrap');

    btn.addEventListener('click', () => {
      item.classList.toggle('active');
      content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
    });
  });
}
// Header accordion end

// Header catalog
const headerCatalog = document.querySelector('.header-catalog__content');
const headerCatalogBtn = document.querySelectorAll('.header-catalog__btn');

if (headerCatalog) {
  headerCatalogBtn.forEach(btn => {
    btn.onclick = () => {
      headerCatalog.classList.toggle('active');
      headerCatalogBtn.forEach(el => {
        el.classList.toggle('active');
      })
    }
  })
}
// Header catalog end

const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu-close');
const headerBars = document.querySelector('.header .bars');

if (menu) {
  headerBars.onclick = () => {
    menu.classList.add('active');
    bodyHidden();
  }

  menuClose.onclick = () => {
    menu.classList.remove('active');
    bodyVisible();
  }

  const catalogBtn = document.querySelector('.menu-catalog__btn');
  const catalog = document.querySelector('.menu-catalog');

  const catalogItemBtns = document.querySelectorAll('.menu-catalog__item-btn');
  const catalogItems = document.querySelectorAll('.menu-catalog__item');

  const backBtn = document.querySelector('.back-btn');

  const activeStack = [];


  catalogBtn.addEventListener('click', (e) => {
      e.preventDefault();

      catalog.classList.add('active');

      activeStack.push(catalog);
  });


  catalogItemBtns.forEach((btn, index) => {
      btn.addEventListener('click', (e) => {
          e.preventDefault();

          const item = catalogItems[index];

          item.classList.add('active');

          activeStack.push(item);
      });
  });


  backBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const lastActive = activeStack.pop();

      if (lastActive) {
          lastActive.classList.remove('active');
      }
  });

}

window.addEventListener('click', function (event) {
  if (headerMenu.length) {
    headerMenu.forEach(el => {
      if (!el.contains(event.target)) el.classList.remove('active');
    })
  }

  if (headerCatalog) {
    if (!headerCatalogBtn[0].contains(event.target) && !headerCatalogBtn[1].contains(event.target) && !headerCatalog.contains(event.target)) {
      headerCatalogBtn[0].classList.remove('active');
      headerCatalogBtn[1].classList.remove('active');
      headerCatalog.classList.remove('active');
    }
  }
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
      slidesPerView: 1.3,
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
document.addEventListener('DOMContentLoaded', () => {

  document.addEventListener('click', (e) => {
    const currentSelect = e.target.closest('[data-select]');
    const triggerBtn = e.target.closest('.custom-select__trigger');
    const optionBtn = e.target.closest('.custom-select__option');

    if (triggerBtn && currentSelect) {
      e.stopPropagation();
      const isOpen = currentSelect.classList.contains('is-open');

      document.querySelectorAll('[data-select]').forEach((s) => {
        s.classList.remove('is-open');
      });

      if (!isOpen) {
        currentSelect.classList.add('is-open');
      }
      return;
    }

    if (optionBtn && currentSelect) {
      const val = optionBtn.getAttribute('data-value');
      const text = optionBtn.innerText;
      const valueSpan = currentSelect.querySelector('.custom-select__value');
      const hiddenInput = currentSelect.querySelector('input[type="hidden"]');

      if (valueSpan) valueSpan.innerText = text;
      if (hiddenInput) hiddenInput.value = val;

      currentSelect.querySelectorAll('.custom-select__option').forEach((opt) => {
        opt.classList.remove('is-selected');
      });
      optionBtn.classList.add('is-selected');

      currentSelect.classList.remove('is-open');
      return;
    }

    if (!currentSelect) {
      document.querySelectorAll('[data-select]').forEach((s) => {
        s.classList.remove('is-open');
      });
    }
  });

});
// checkbox


// input-mask
document.addEventListener("DOMContentLoaded", () => {
  const phoneInputEl = document.getElementById("user_tel_field");
  const countryWrapper = document.querySelector(".phone-input");
  const triggerBtn = document.querySelector(".phone-input__country-trigger");
  const dropdownContainer = document.querySelector(
    ".phone-input__country-dropdown",
  );
  const triggerCode = triggerBtn
    ? triggerBtn.querySelector(".phone-input__code")
    : null;
  const triggerFlag = triggerBtn
    ? triggerBtn.querySelector(".phone-input__flag")
    : null;

  if (!phoneInputEl || !dropdownContainer || !triggerBtn) return;

  const rawData =
    window.countries || (typeof countries !== "undefined" ? countries : []);
  if (!Array.isArray(rawData) || rawData.length === 0) return;

  let maskInstance = null;

  function sanitizeMask(rawStr, countryCode) {
    if (!rawStr) return "00 000 00 00";
    let cleaned = rawStr;
    if (countryCode && cleaned.startsWith(countryCode)) {
      cleaned = cleaned.replace(countryCode, "").trim();
    }
    return cleaned.replace(/[0-9]/g, "0") || "00 000 00 00";
  }

  dropdownContainer.innerHTML = "";
  rawData.forEach((item, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `phone-input__country-option ${index === 0 ? "is-selected" : ""}`;

    const code = item.code || "";
    const flagUrl = item.flag || "";
    const name = item.name || "";
    const safeMask = sanitizeMask(item.placeholder || item.mask, code);

    btn.setAttribute("data-code", code);
    btn.setAttribute("data-mask", safeMask);
    btn.setAttribute("data-flag", flagUrl);

    btn.innerHTML = `
      <span class="phone-input__flag">
        <img src="${flagUrl}" alt="${name}">
      </span>
      <span class="phone-input__name">${name}</span>
      <span class="phone-input__code">${code}</span>
    `;

    dropdownContainer.appendChild(btn);
  });

  function applyMask(finalMask) {
    phoneInputEl.value = "";

    if (maskInstance) {
      maskInstance.destroy();
      maskInstance = null;
    }

    phoneInputEl.placeholder = finalMask;

    if (typeof IMask !== "undefined") {
      maskInstance = IMask(phoneInputEl, {
        mask: finalMask,
        lazy: true,
        prepare: function (str) {
          if (str.startsWith("+7")) return str.replace("+7", "");
          return str;
        },
      });
    }
  }

  function updateTrigger(code, flagUrl) {
    if (triggerCode) triggerCode.textContent = code;
    if (triggerFlag) {
      triggerFlag.innerHTML = `<img src="${flagUrl}" alt="">`;
    }
  }

  const firstOption = dropdownContainer.querySelector(
    ".phone-input__country-option",
  );
  if (firstOption) {
    updateTrigger(
      firstOption.getAttribute("data-code"),
      firstOption.getAttribute("data-flag"),
    );
    applyMask(firstOption.getAttribute("data-mask"));
  }

  triggerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    countryWrapper.classList.toggle("is-country-open");
  });

  document.addEventListener("click", (e) => {
    if (!countryWrapper.contains(e.target)) {
      countryWrapper.classList.remove("is-country-open");
    }
  });

  dropdownContainer.addEventListener("click", (e) => {
    const option = e.target.closest(".phone-input__country-option");
    if (!option) return;

    dropdownContainer
      .querySelectorAll(".phone-input__country-option")
      .forEach((opt) => {
        opt.classList.remove("is-selected");
      });
    option.classList.add("is-selected");

    const newCode = option.getAttribute("data-code");
    const newMask = option.getAttribute("data-mask");
    const newFlag = option.getAttribute("data-flag");

    updateTrigger(newCode, newFlag);
    applyMask(newMask);

    countryWrapper.classList.remove("is-country-open");
    phoneInputEl.focus();
  });
});
// input-mask

// accardion
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  const header = accordion.querySelector(".accordion__header");
  const content = accordion.querySelector(".accordion__content");

  header.addEventListener("click", () => {
    const isOpen = accordion.classList.contains("is-open");

    if (isOpen) {
      // Auto bo'lsa, avval real heightni olamiz
      content.style.height = `${content.scrollHeight}px`;

      requestAnimationFrame(() => {
        content.style.height = "0px";
      });

      accordion.classList.remove("is-open");
    } else {
      content.style.height = `${content.scrollHeight}px`;

      accordion.classList.add("is-open");

      content.addEventListener(
        "transitionend",
        () => {
          if (accordion.classList.contains("is-open")) {
            content.style.height = "auto";
          }
        },
        { once: true },
      );
    }
  });
});
// accardion
