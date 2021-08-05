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
});
