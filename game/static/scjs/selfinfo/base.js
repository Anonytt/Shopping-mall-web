$(function(){
    $.ajax({
        url:"http://47.94.12.24:8000/settings/getinfo/",
        type:"GET",
        async:false,
        success:function(resp){
            if(resp.result === "success"){
                flag=1;
                $("#shopcar").text(resp.username).css("color","red").css("cursor","pointer").click(function(){
                });
                var font_exit = $('<a id="font_exit"> 退出账号</a>');
                $("#shopcar").append(font_exit);
            }
        }
    });
    $(function(){
        if(flag === 1){
            $("#font_exit").click(function(){
                $.ajax({
                    url:"http://47.94.12.24:8000/settings/signout",
                    type:"GET",
                    success:function(resp){
                        if(resp.result === "success"){
                            alert("账号已退出");
                            self.location="http://47.94.12.24:8000/login";
                        }
                    }
                });
            });
         }
     });
});
