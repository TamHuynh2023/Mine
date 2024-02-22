const swiper1 = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// const swiper2 = new Swiper(".newSwiper", {
//   direction: "horizontal",
//   loop: true,

//   pagination: {
//     el: ".swiper-pagination",
//   },

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   scrollbar: {
//     el: ".swiper-scrollbar",
//     hide: true,
//   },

//   autoplay: {
//     delay: 800, // Thời gian chuyển tiếp khác nhau
//     disableOnInteraction: false,
//   },
// });
