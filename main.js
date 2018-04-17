
$(".menu").click(function() {
  $(".containerMenu").css({
    "transform":"translateX(0px)"
  });
  $(".one").hide();
  $(".two").css({
    "transform":"rotate(40deg)",
    "margin-bottom":"0",
    "margin-top":"5px"
  });
  $(".three").css({
    "transform":"rotate(120deg)",
    "margin-bottom":"0"
  })
});
