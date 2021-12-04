$(function () {
    $(".search>button").click(function () {
        var content = $(".search>input").val();
        $.ajax({
            url:"http://47.94.12.24:8000/settings/search",
            type:"GET",
            data:{
                content:content,
            },
            success:function(resp){
                if(resp.result === 'success'){
                    self.location = resp.web;
                }
                else{
                    alert("物品不存在");
                }
            }
        });
     })
})
