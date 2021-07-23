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

  $(atagHover).mouseover(function () {
    $(this).find("ul").addClass("on");
    dlHover.addClass("on");
  });
  $(atagHover).mouseout(function () {
    $(this).find("ul").removeClass("on");
    dlHover.removeClass("on");
  });
});
