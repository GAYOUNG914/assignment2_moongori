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

  //sub_nav의 ul > dl > ul이 a호버시 나타내기
  let dlHover = $("header .sub_nav > ul > li dl");
  let atagHover = $("header .sub_nav > ul > li dl dd");
  // let subWidth = $("header .sub_nav > ul > li > dl dd > ul");

  // $(".category").mouseover(function () {
  //   dlHover.addClass("on");
  // });
  // dlHover.mouseout(function () {
  //   dlHover.removeClass("on");
  // });
  // dlHover.mouseenter(function () {
  //   $(this).css("display", "block");
  // });
  // dlHover.mouseout(function () {
  //   $(this).css("display", "none");
  // });

  $(atagHover).mouseover(function () {
    $(this).find("ul").addClass("on");
    dlHover.addClass("on");
  });
  $(atagHover).mouseout(function () {
    $(this).find("ul").removeClass("on");
    dlHover.removeClass("on");
  });

  //bookmark
  $(".book_mark").click(function () {
    // console.log($(this).children().attr("src")); 왜 =를 두 개 붙여야 실행되는거지..?
    if ($(this).children().attr("src") == "./assets/img/main/icon-scrap-fill.png") {
      $(this).children().attr("src", "./assets/img/main/icon-scrap-white.png");
    } else {
      $(this).children().attr("src", "./assets/img/main/icon-scrap-fill.png");
    }
  });
});
