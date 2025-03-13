$(function () {
  if ($(".accordeon").length) {
    $(".accordeon dd").hide().prev().click(function () {
      $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
      $(this).next().not(":visible").slideDown().prev().addClass("active");
      $("dl").removeClass("open");
      $(this).parent().toggleClass("open");
    });
  }

  //////

  $(".catalog__filter-title").on("click", function () {
    $(this).toggleClass("active");
    $(this).next(".catalog__filter-list").slideToggle(); // Застосування тільки до наступного списку
  });


})

/////////////
const filtersBtn = document.querySelector('.catalog__filters-btn');
const closeBtn = document.querySelector('.catalog__close');
const catalogFilter = document.querySelector('.catalog__filter');
const body = document.body;

// Перевірка наявності елементів на сторінці
if (filtersBtn && closeBtn && catalogFilter) {
  // Додавання/видалення класів при кліці на кнопку фільтрів
  filtersBtn.addEventListener('click', () => {
    catalogFilter.classList.toggle('open');
    body.classList.toggle('lock');
  });

  // Видалення класів при кліці на кнопку закриття
  closeBtn.addEventListener('click', () => {
    catalogFilter.classList.remove('open');
    body.classList.remove('lock');
  });
}
``




// клас sticky для шапки при скроллі
const navOffset = document.querySelector('.header').offsetTop + 10;
window.addEventListener('scroll', function () {
  const scrolled = window.scrollY;
  document.querySelector('.header').classList.toggle('sticky', scrolled > navOffset);
});

///////////////////////
var swiper = new Swiper(".dss-arts__slider", {
  slidesPerView: 1.3,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 2.3,
    },
    1200: {
      slidesPerView: 4,
    },
  }
});

var swiper = new Swiper(".artists__slider", {
  slidesPerView: 2,
  spaceBetween: 5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var sliderElement = document.querySelector('.intro__slider');

if (sliderElement) {
  var swiper = new Swiper(".intro__slider", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  sliderElement.addEventListener('mouseenter', function () {
    swiper.autoplay.stop();
  });

  sliderElement.addEventListener('mouseleave', function () {
    swiper.autoplay.start();
  });
}

var swiper = new Swiper(".product__slider-side", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 4,
  breakpoints: {
    767: {
      slidesPerView: 5,
      freeMode: true,
      watchSlidesProgress: true,
      direction: "vertical",
    },
  }
});

var swiper2 = new Swiper(".product__slider", {
  loop: true,
  effect: "fade",
  thumbs: {
    swiper: swiper,
  },
});

var swiper = new Swiper(".slider-page", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1.4,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    400: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  }
});


var swiper = new Swiper(".dss-prints__slider", {
  slidesPerView: 1.4,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  grid: {
    rows: 1,
  },
  spaceBetween: 10,
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 10,
      grid: {
        rows: 1,
      },
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 10,
      grid: {
        rows: 2,
      },
    },
  },
});




/////////////////////
// Знаходимо всі елементи з класом .product__box-borders
const borders = document.querySelectorAll('.product__box-borders');

// Для кожного елемента .product__box-borders
borders.forEach(border => {
  // Отримуємо значення атрибута value
  const value = border.getAttribute('value');

  // Знаходимо елемент .dss-color всередині цього батьківського елемента
  const colorElement = border.querySelector('.dss-color');

  // Виводимо значення в .dss-color
  colorElement.textContent = value;
});


//////////////////////
document.querySelectorAll('.product__add-favorite').forEach(function (button) {
  button.addEventListener('click', function () {
    this.classList.toggle('active');
  });
});


//////////////
var containerEl = document.querySelector('.dss-blog__list');
if (containerEl) {
  // Якщо контейнер знайдений, ініціалізуємо MixItUp
  var mixer = mixitup(containerEl, {
    selectors: {
      target: '.dss-blog__item'
    },
    animation: {
      duration: 300
    }
  });

  // Налаштовуємо кнопки фільтрації
  var filterBtns = document.querySelectorAll('.dss-blog__btns button');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filterValue = btn.getAttribute('data-filter');
      mixer.filter(filterValue);
    });
  });
}


///////
document.addEventListener('DOMContentLoaded', function () {
  const select = document.querySelector('.dss-blog__select');
  const buttonsContainer = document.querySelector('.dss-blog__btns');
  const buttons = buttonsContainer.querySelectorAll('button');

  // Додаємо клас open при кліці на dss-blog__select
  select.addEventListener('click', function () {
    buttonsContainer.classList.toggle('open');
  });

  // Переносимо текст з button в dss-blog__select та прибираємо клас open після кліку
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      const buttonText = button.innerText.trim();
      select.textContent = buttonText;
      buttonsContainer.classList.remove('open'); // Прибираємо клас open
    });
  });
});
