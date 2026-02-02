new Swiper('.mainSwiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoplay: {
    delay: 8000, 
    disableOnInteraction: false 
  },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  new Swiper('.eventswiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoplay: {
    delay: 10000, 
    disableOnInteraction: false 
  },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });