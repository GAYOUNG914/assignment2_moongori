$(function () {
  //drop down & underbar event
  $(".nav > li").mouseover(function () {
    let leftValue = $(this).offset().left - 10,
      listWidth = $(this).width() + 20;
    $(this).addClass("on");
    $(this).find(".sub_gnb").addClass("on");
    $(".header_bg").addClass("on");
    $(".under_bar").addClass("on");
    $(".under_bar").css({ left: leftValue, width: listWidth });
  });
  $(".header_bg").mouseout(function () {
    $(".nav > li").removeClass("on");
    $(".nav > li > .sub_gnb").removeClass("on");
    $(".header_bg").removeClass("on");
    $(".under_bar").removeClass("on");
  });
  $(".nav > li > .sub_gnb").mouseout(function () {
    $(".nav > li").removeClass("on");
    $(".nav > li > .sub_gnb").removeClass("on");
    $(".header_bg").removeClass("on");
    $(".under_bar").removeClass("on");
  });

  //unactive a tag
  $('a[href="#"]').click(function (e) {
    e.preventDefault();
  });

  //back to top
  $(".back_to_top").click(function () {
    let thisElem = $(this.hash),
      offsetElem = thisElem.offset();
    $("html,body").stop();
    $("html,body").animate({ scrollTop: offsetElem.top }, 700);
  });

  //footer icon
  $(".cooperation").click(function () {
    if ($(".cooperation_list").height() == 0) {
      $(".cooperation_list").addClass("on");
      $(this).addClass("on");
    } else {
      $(".cooperation_list").removeClass("on");
      $(this).removeClass("on");
    }
  });
});
