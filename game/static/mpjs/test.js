$(function () {
    var num = 0;
    $(".circle li").click(function () {
        $(this).addClass("current").siblings().removeClass("current");
        var index = $(this).index();
        num = index;
        $(".photo li").eq(index).show().siblings().hide();
    });
    $(".arrow-l").click(function () {
        var max_len = 3;
        num--;
        if (num < 0) {
            num = max_len;
        }
        $(".photo li").eq(num).show().siblings().hide();
        $(".circle li").eq(num).addClass("current").siblings().removeClass("current");
    })
    $(".arrow-r").click(function () {
        var max_len = 3;
        num++;
        if (num > max_len) {
            num = 0;
        }
        $(".photo li").eq(num).show().siblings().hide();
        $(".circle li").eq(num).addClass("current").siblings().removeClass("current");
    })
    function timer() {
        time = setInterval(() => {
            var max_len = 3;
            num++;
            if (num > max_len) {
                num = 0;
            }
            $(".photo li").eq(num).show().siblings().hide();
            $(".circle li").eq(num).addClass("current").siblings().removeClass("current");               
        }, 1500);
    }
    timer();
});
