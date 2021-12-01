$(function () {
    $(".circle li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
        var index = $(this).index();
        $(".photo li").eq(index).show().siblings().hide();
    });
});
