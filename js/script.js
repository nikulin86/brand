document.querySelector('.faq-accordion').addEventListener('click', (event) => {
    // ищем ближайший род элемент(делигирование)
    if (event.target.closest('.faq-accordion__item ')) {
        event.target.closest('.faq-accordion__item ')
            .classList.toggle('faq-accordion__item--active');
    }
})

const header = document.querySelector('.section-header');
const mainNavigation = document.getElementById('main-navigation');

document.querySelector('.button-burger').addEventListener('click', (event) => {
    header.classList.toggle('section-header--active-nav');


    // проверяем есть ли класс активности для того чтобы убрать скролл
    if (header.classList.contains('section-header--active-nav')) {
        hideScroll();
    } else {
        showScroll();
    }
})

// функции которые прячут скролл и возвращают когда включен бургер
const hideScroll = () => {
    const scrollWidth = `${getScrollbarWidth()}px`;

    document.body.style.paddingRight = scrollWidth;
    document.body.style.overflow = 'hidden';

    mainNavigation.style.paddingRight = scrollWidth;
}

const showScroll = () => {

    document.body.style.paddingRight = '';
    document.body.style.overflow = 'visible';


    mainNavigation.style.paddingRight = '';

}

// убирает бургер если ресайзить страницу
const resetNav = () => {
    header.classList.remove('section-header--active-nav');
    showScroll()
}

window.addEventListener('resize', resetNav)


// get scrollbar width
const getScrollbarWidth = () => {
    const outer = document.createElement('div');

    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    outer.style.width = '50px';
    outer.style.height = '50px';
    outer.style.overflow = 'scroll';
    outer.style.visibility = 'hidden';


    document.body.appendChild(outer);
    const scrollBarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);

    return scrollBarWidth;
}


// swiper

 new Swiper('.section-hero-image', {   
    pagination: {
        el: '.section-hero-image .dots',
        clickable: true
    }
  });
 new Swiper('.slider-blog__container ', {   
    pagination: {
        el: '.section-blog .dots',
        clickable: true
    },
    loop: true,

    navigation: {
        nextEl: '.section-blog .swiper-button-next',
        prevEl: '.section-blog .swiper-button-prev',
    }
  });
 new Swiper('.slider-quotes-container ', {   
     slidesPerView: 'auto',
    pagination: {
        el: '.section-quotes .dots',
        clickable: true
    },
    loop: true
  });