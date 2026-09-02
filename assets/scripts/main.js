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