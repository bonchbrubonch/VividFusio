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
  loop: true,
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

var swiper = new Swiper(".dss-prints__slider", {
  spaceBetween: 10,
  slidesPerView: 1.2,
  breakpoints: {
    400: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  }
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


