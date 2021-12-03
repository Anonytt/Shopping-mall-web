$(function(){
    var num = $("#num").text();
    $.ajax({
        url:"http://47.94.12.24:8000/settings/goods",
        type:"GET",
        data:{
            num:num,
        },
        success:function(resp){
            console.log(resp);
            if(resp.result === "success"){
                $("#name").text(resp.name);
                $("#price").text(resp.price);
                $("#source").text(resp.source);
                $("#describe").text(resp.describe);
            }
        }
    });
    if(fg === 1){
        $("#btn").click(function(){
            $.ajax({
                url:"http://47.94.12.24:8000/settings/buy",
                type:"GET",
                data:{
                    num:num,
                },
                success:function(resp){
                    if(resp.result === "success"){
                        alert("QQ");
                    }
                }
            });
        });
    }
})
