import Swiper from 'swiper';

import { Navigation, Pagination, Autoplay, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const swiperReviews = new Swiper(".swiper-reviews", {
  modules: [Pagination, Navigation, Keyboard],
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 500,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


export const swiperLogos = new Swiper('.swiper-logos', {
  modules: [Autoplay],
  slidesPerView: 'auto',
  spaceBetween: 40,
  loop: true,
  speed: 3000,
  allowTouchMove: false,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: { spaceBetween: 30, },
    992: { spaceBetween: 40, }
  },
});