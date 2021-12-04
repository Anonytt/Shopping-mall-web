$(function(){
    $.ajax({
        url:"http://47.94.12.24:8000/settings/du",
        type:"GET",
        async:false,
        success:function(resp){
            console.log(resp.rows[0].name);
            for(var i=0;i<resp.tot;i++){
                var idd = i;
                var idq = i;
                var idx = i;
                var pt = i;
                var arr =$('<div class="cart-item"><div class="p-checkbox"><input type="checkbox" name="" id="" class="j-checkbox"></div><div class="p-goods"><div class="p-img"><img src="" alt="" id=pt></div><div class="p-msg" id=idd>【2000张贴纸】贴纸书 3-6岁 贴画儿童 贴画书全套12册 贴画 贴纸儿童 汽</div></div><div class="p-price" id=idq>￥24.80</div><div class="p-num"><div class="quantity-form"><a href="javascript:;" class="decrement">-</a><input type="text" class="itxt" value="1"><a href="javascript:;" class="increment">+</a></div></div><div class="p-sum" id=idx>￥24.80</div><div class="p-action"><a href="javascript:;">删除</a></div></div>');
                $("#miao").append(arr);
                $("#idd").text(resp.rows[i].name);
                $("#idd").attr("id","pmsg"+i);
                $("#idq").text("￥"+resp.rows[i].price);
                $("#idq").attr("id","idq"+i);
                $("#idx").text("￥"+resp.rows[i].price);
                $("#idx").attr("id","idx"+i);
                if(resp.rows[i].id != 4){
                    $("#pt").attr("id","pt"+i).attr("src","http://47.94.12.24:8000/static/image/mpimage/upload/focus"+resp.rows[i].id+".jpg").css("width","83px").css("height","83px");
                }
                else{
                    $("#pt").attr("id","pt"+i).attr("src","http://47.94.12.24:8000/static/image/mpimage/upload/focus.jpg").css("width","83px").css("height","83px");
                }    
            }
        }
    });

            $(".checkall").change(function() {
                // console.log($(this).prop("checked"));
                $(".j-checkbox, .checkall").prop("checked", $(this).prop("checked"));
                if ($(this).prop("checked")) {
                    // 让所有的商品添加 check-cart-item 类名
                    $(".cart-item").addClass("check-cart-item");
                } else {
                    // check-cart-item 移除
                    $(".cart-item").removeClass("check-cart-item");
                }
            });
            // 2. 如果小复选框被选中的个数等于3 就应该把全选按钮选上，否则全选按钮不选。
            $(".j-checkbox").change(function() {
                // if(被选中的小的复选框的个数 === 3) {
                //     就要选中全选按钮
                // } else {
                //     不要选中全选按钮
                // }
                // console.log($(".j-checkbox:checked").length);
                // $(".j-checkbox").length 这个是所有的小复选框的个数
                if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
                    $(".checkall").prop("checked", true);
                } else {
                    $(".checkall").prop("checked", false);
                }
                if ($(this).prop("checked")) {
                    // 让当前的商品添加 check-cart-item 类名
                    $(this).parents(".cart-item").addClass("check-cart-item");
                } else {
                    // check-cart-item 移除
                    $(this).parents(".cart-item").removeClass("check-cart-item");
                }
            });
            // 3. 增减商品数量模块 首先声明一个变量，当我们点击+号（increment），就让这个值++，然后赋值给文本框。
            $(".increment").click(function() {
                // 得到当前兄弟文本框的值
                var n = $(this).siblings(".itxt").val();
                // console.log(n);
                n++;
                $(this).siblings(".itxt").val(n);
                // 3. 计算小计模块 根据文本框的值 乘以 当前商品的价格  就是 商品的小计
                // 当前商品的价格 p  
                var p = $(this).parents(".p-num").siblings(".p-price").html();
                // console.log(p);
                p = p.substr(1);
                console.log(p);
                var price = (p * n).toFixed(2);
                // 小计模块 
                // toFixed(2) 可以让我们保留2位小数
                $(this).parents(".p-num").siblings(".p-sum").html("￥" + price);
                getSum();
            });
            $(".decrement").click(function() {
                // 得到当前兄弟文本框的值
                var n = $(this).siblings(".itxt").val();
                if (n == 1) {
                    return false;
                }
                // console.log(n);
                n--;
                $(this).siblings(".itxt").val(n);
                // var p = $(this).parent().parent().siblings(".p-price").html();
                // parents(".p-num") 返回指定的祖先元素
                var p = $(this).parents(".p-num").siblings(".p-price").html();
                // console.log(p);
                p = p.substr(1);
                console.log(p);
                // 小计模块 
                $(this).parents(".p-num").siblings(".p-sum").html("￥" + (p * n).toFixed(2));
                getSum();
            });
            //  4. 用户修改文本框的值 计算 小计模块  
            $(".itxt").change(function() {
                // 先得到文本框的里面的值 乘以 当前商品的单价 
                var n = $(this).val();
                // 当前商品的单价
                var p = $(this).parents(".p-num").siblings(".p-price").html();
                // console.log(p);
                p = p.substr(1);
                $(this).parents(".p-num").siblings(".p-sum").html("￥" + (p * n).toFixed(2));
                getSum();
            });
            // 5. 计算总计和总额模块
            getSum();

            function getSum() {
                var count = 0; // 计算总件数 
                var money = 0; // 计算总价钱
                $(".itxt").each(function(i, ele) {
                    count += parseInt($(ele).val());
                });
                $(".amount-sum em").text(count);
                $(".p-sum").each(function(i, ele) {
                    money += parseFloat($(ele).text().substr(1));
                });
                $(".price-sum em").text("￥" + money.toFixed(2));
            }
            // 6. 删除商品模块
            // (1) 商品后面的删除按钮
            $(".p-action a").click(function() {
                // 删除的是当前的商品 
                $(this).parents(".cart-item").remove();
                getSum();
            });
            // (2) 删除选中的商品
            $(".remove-batch").click(function() {
                // 删除的是小的复选框选中的商品
                $(".j-checkbox:checked").parents(".cart-item").remove();
                getSum();
            });
            // (3) 清空购物车 删除全部商品
            $(".clear-all").click(function() {
                $(".cart-item").remove();
                getSum();
            });});
