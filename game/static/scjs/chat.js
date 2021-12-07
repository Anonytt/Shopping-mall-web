$(function(){
    var username = "";
    var tot = 0;
    $.ajax({
        url:"http://47.94.12.24:8000/settings/getinfo",
        type:"GET",
        async:false,
        success:function(resp){
            if(resp.result === "success"){
                username=resp.username;
            }
        }
    })
    $.ajax({
        url:"http://47.94.12.24:8000/settings/chat",
        type:"GET",
        async:false,
        data:{
            name:username,
        },
        success:function(resp){
            if(resp.result === "success"){
                console.log(resp.lst);
                length = resp.length;
                tot = length;
                lst = resp.lst;
                for(var i=0;i<length;i++){
                    var idnm = i;
                    var idft = i;
                    var tx = lst[i]['name'];
                    var arr = $('<div><ul class="information"><li><img src="load.jpg" id=idft></li><li class="con" id=idnm onclick="func(id)">Anonytt</li><ul></div>');
                    $(".wechat-people").append(arr);
                    $("#idnm").text(lst[i]['name']);
                    $("#idnm").attr('id',"nm"+i);
                    $("#idft").attr('src',lst[i]['photo']);
                    $("#idft").attr('id','ft'+i);
                }
            }
        }
    })
})
