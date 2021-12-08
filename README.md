# 문고리 쇼핑몰 페이지

Zeplin으로 받은 디자인으로 작업을 진행한 쇼핑몰 페이지입니다.<br>
메인 페이지는 vw단위를 사용한 반응형으로 구현되어있습니다.

## Link
* https://gayoung914.github.io/assignment2_moongori/
* subpapge
  - https://gayoung914.github.io/assignment2_moongori/product_detail.html#a (상세페이지)
  - https://gayoung914.github.io/assignment2_moongori/login.html (회원가입 페이지)

## Tool
* HTML5
* CSS3
* SCSS
* Jqeury

## Skill
* 상세페이지 <br>
  - **따라다니는 오더 폼**<br>
    👉 현재 화면의 스크롤 top 값과 오더 폼의 offset top 값을 구하여, 엘리먼트의 offset 탑 값보다 스크롤 탑 값이 더 클 때, absolute로 띄워 놓은 엘리먼트의 탑 값을 스크립트로 변경시켜 주어 스크롤을 따라오게 합니다.
```
    //따라다니는 bottom_right
  let currentPosition = parseInt($(".bottom_right").offset().top);
  console.log(currentPosition);
  $(window).scroll(function () {
    let ST = $(window).scrollTop();

    if (currentPosition < ST) {
      $(".bottom_right").css({ top: ST - currentPosition + 20 });
    } else {
      $(".bottom_right").css({ top: 0 });
    }
  });
```

## License
* 개인 포트폴리오를 위해 만들어진 사이트입니다.


https://gayoung914.github.io/assignment2_moongori/
