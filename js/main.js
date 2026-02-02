document.addEventListener('DOMContentLoaded', function () {

  //이슈컨텐츠 탭박스
  const buttons = document.querySelectorAll('.tab_box button');

  for (const button of buttons) {
    button.onclick = function () {
      const siblings = this.parentElement.querySelectorAll('button');

      for (const btn of siblings) {
        btn.classList.remove('active');
      }
      this.classList.add('active');
    };
  }

  //이슈컨텐츠 탭선택시
  const newBtn = document.querySelector('.new');
  const usualBtn = document.querySelector('.usual');
  const card01 = document.querySelector('.card01');
  const card02 = document.querySelector('.card02');

  newBtn.addEventListener('click', function () {
    card01.style.display = 'flex';
    card02.style.display = 'none';
  });
  usualBtn.addEventListener('click', function () {
    card02.style.display = 'flex';
    card01.style.display = 'none';
  });

  newBtn.click();
});//js


$(function () {

  $('.gnb_sub_menu').mouseleave(function () {
    $('.gnb_sub_menu').hide();
  });

  $('.header_gnb li').mouseenter(function () {
    const idx = $(this).index();
    $('.gnb_sub_menu').hide();
    $('.gnb_sub_menu').eq(idx).css('display', 'flex');
  });


  $('.search').on('click', function () {
    $(this).hide();
    $('.search_box_area').addClass('open');
  });

  $(document).on('click', function (e) {
    if (
      !$(e.target).closest('.search_box_area, .search').length
    ) {
      closeSearch();
    }
  });

  function closeSearch() {
    $('.search_box_area').removeClass('open');
    $('.search').show();
  }

  const $header = $('.header_outer');
  const $menu = $('.all_menu_area');

  function handleScroll() {
    if ($(window).scrollTop() > 0) {
      $header.addClass('fixed');
      $menu.addClass('fixed');
    } else {
      $header.removeClass('fixed');
      $menu.removeClass('fixed');
    }
  }
  handleScroll();
  $(window).on('scroll', handleScroll);

  $('.menu').on('click', function () {
    $('.menu').hide();
    $('.close').show();
    $('.all_menu_area').addClass('open');
  });

  $('.close').on('click', function () {
    $('.menu').show();
    $('.close').hide();
    $('.all_menu_area').removeClass('open');
  });
});//jquery




