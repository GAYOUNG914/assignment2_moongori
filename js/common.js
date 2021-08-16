$(function () {
  //main_gnb 의 main_nav 호버
  $("header .main_gnb .main_nav > ul > li > a").hover(
    function () {
      $(this).addClass("on");
      $(this).next().removeClass("on"); //음.. 나중에 다시..
    },
    function () {
      $(this).removeClass("on");
    }
  );

  //
  $("header .sub_nav > ul > li").hover(
    function () {
      $(this).addClass("on");
    },
    function () {
      $(this).removeClass("on");
    }
  );

  $("header .sub_nav_mo > ul > li").hover(
    function () {
      $(this).addClass("on");
    },
    function () {
      $(this).removeClass("on");
    }
  );

  //sub_nav의 ul > dl > ul이 a호버시 나타내기
  let dlHover = $("header .sub_nav > ul > li dl");
  let atagHover = $("header .sub_nav > ul > li dl dd");

  $(atagHover).mouseover(function () {
    $(this).find("ul").addClass("on");
    dlHover.addClass("on");
  });
  $(atagHover).mouseout(function () {
    $(this).find("ul").removeClass("on");
    dlHover.removeClass("on");
  });

  //.space hover
  $(".space")
    .parent()
    .hover(
      function () {
        $(".sub_nav > ul > li > .space_box").css("display", "block");
      },
      function () {
        $(".sub_nav > ul > li > .space_box").css("display", "none");
      }
    );

  //bookmark
  $(".book_mark").click(function () {
    // console.log($(this).children().attr("src")); 왜 =를 두 개 붙여야 실행되는거지..?
    if ($(this).children().attr("src") == "./assets/img/main/icon-scrap-fill.png") {
      $(this).children().attr("src", "./assets/img/main/icon-scrap-white.png");
    } else {
      $(this).children().attr("src", "./assets/img/main/icon-scrap-fill.png");
    }
  });

  // sub_ookmark
  $(".bookmark_btn").click(function () {
    // console.log($(this).children().attr("src")); 왜 =를 두 개 붙여야 실행되는거지..?
    if ($(this).children().attr("src") == "./assets/img/main/icon-scrap-fill.png") {
      $(this).children().attr("src", "./assets/img/subpage/icon-scrap-line.png");
    } else {
      $(this).children().attr("src", "./assets/img/main/icon-scrap-fill.png");
    }
  });

  //play & pause button
  //   $(".swiper-button-pause").click(function () {
  //     console.log($(this).css("background-image"));
  //     if ($(this).css("background") == "url(../assets/img/main/icon-pause.png)") {
  //       $(this).css("background", "url(../assets/img/main/icon-chevron-right.png)");
  //       $(this).addClass(".swiper-button-play");
  //       $(this).removeClass(".swiper-button-pause");
  //     } else {
  //       $(this).css("background", "url(../assets/img/main/icon-pause.png)");
  //       $(this).removeClass(".swiper-button-play");
  //       $(this).addClass(".swiper-button-pause");
  //     }
  //   });

  //slick pause button
  $(".slide-pause").click(function () {
    $(".regular").slick("slickPause");
  });

  //subpage_list a 클릭 시 class on 추가

  //subpage_list a 클릭 시 이동
  $(".subpage_list li a").click(function () {
    // console.log($(this.hash));
    let thisElem = $(this.hash);
    let offsetElem = thisElem.offset();
    // console.log(offsetElem.top);
    $("html,body").stop();
    $("html,body").animate({ scrollTop: offsetElem.top + -100 }, 1000);
    $(".subpage_list li").removeClass("on");
    $(this).parent().addClass("on");
  });

  //.accordian 아코디언
  $(".accordian ul li a").on("click", function () {
    if ($(this).next().css("display") == "none") {
      // slideUp();
      $(this).next().slideDown();
    } else {
      $(this).next().slideUp();
    }
  });

  $(".pop_order .ac_tit").on("click", function () {
    if ($(this).next().css("display") == "none") {
      // slideUp();
      $(this).next().slideDown();
      $(".review_top li:nth-child(4)").css("visibility", "visible");
      $(".review_top li:nth-child(5)").css("visibility", "visible");
    } else {
      $(this).next().slideUp();
      $(".review_top li:nth-child(4)").css("visibility", "hidden");
      $(".review_top li:nth-child(5)").css("visibility", "hidden");
    }
  });

  //답변완료, 대기 tap
  $(".tap2 .tap_list li").click(function () {
    let idx = $(this).index();
    console.log(idx);
    $(".tap2 .tap_list li").removeClass("on");
    $(".tap2 .tap_list li").eq(idx).addClass("on");
    $(".tap2 .pop_order").hide();
    $(".tap2 .pop_order").eq(idx).show();
  });
});
