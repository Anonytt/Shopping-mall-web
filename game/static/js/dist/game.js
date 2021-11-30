class AcGameMenu{
    constructor(root){
        this.root = root;
        this.$menu = $(`
<div class="ac-game-menu">
   <div class="ac-game-menu-field">
        <div class="ac-game-menu-field-item ac-game-menu-field-item-single-mode">
            百叶窗展览
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-init">
            初始化金币
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-money">
            <input type="text" placeholder="输入增加金币数">
            <button>确定</button>
        </div>
   </div>
</div>    
`);
        this.root.$ac_game.append(this.$menu);
        this.$single_mode = this.$menu.find('.ac-game-menu-field-item-single-mode');
        this.$init = this.$menu.find('.ac-game-menu-field-item-init');
        this.$money = this.$menu.find('.ac-game-menu-field-item-money input');
        this.$sure = this.$menu.find('.ac-game-menu-field-item-money button');
        this.start();
    }

    start(){
        this.add_listening_events();
    }
    add_listening_events(){
        let outer = this;
        this.$single_mode.click(function(){
            outer.hide();
            outer.root.playground.show();
        });
        this.$init.click(function(){
            console.log("click init");
            $.ajax({
                url:"http://47.94.12.24:8000/menu/init",
                type:"GET",
                success:function(resp){
                    if(resp.ret === 0){
                        alert("初始化调通");
                        console.log(resp.cur_price);
                    }
                }
            });
        });
        this.$money.click(function(){
            console.log("click money");
        });
        this.$sure.click(function(){
            let p =outer.$money.val();
            console.log(p);
            $.ajax({
                url:"http://47.94.12.24:8000/menu/sure",
                type:"GET",
                data:{
                    money:p,
                },
                success:function(resp){
                    console.log(resp);
                    if(resp.ret === 0){
                        alert("前后端调通了!");
                    }
                }
            })
        });
    }

    show(){ //显示menu界面
        this.$menu.show();
    }

    hide(){ //关闭menu界面
        this.$menu.hide();
    }
}
class AcGamePlayground{
    constructor(root){
        this.root = root;
        this.$playground = $(`
<div class="ac-game-playground-all">
    <div class="wrap">
        <ul>
            <li class="baidu">
                <a href="#"><img src="static/image/playground/images/01.jpg" alt="" /></a>
            </li>
            <li class="baidu">
                <a href="#"><img src="static/image/playground/images/02.jpg" alt="" /></a>
            </li>
            <li class="baidu">
                <a href="#"><img src="static/image/playground/images/03.jpg" alt="" /></a>
            </li>
            <li class="baidu">
                <a href="#"><img src="static/image/playground/images/04.jpg" alt="" /></a>
            </li>
            <li class="baidu">
                <a href="#"><img src="static/image/playground/images/05.jpg" alt="" /></a>
            </li>
            <li class="baidu">
                <a href="#"><img src="static/image/playground/images/06.jpg" alt="" /></a>
            </li>
        </ul>
    </div>
    <div class="ac-game-playground-back">
        <button>返回菜单</button>
    </div>
</div>
`);
        this.hide();
        //this.show();
        this.root.$ac_game.append(this.$playground);
        this.$model = this.$playground.find('.baidu');
        this.$back = this.$playground.find('.ac-game-playground-back button');
        this.start();
    }

    start(){
        let outer = this;
        this.$model.hover(function(){
                $(this).siblings().stop().fadeTo(400, 0.5);
            }, function() {
                $(this).siblings().stop().fadeTo(400, 1);
            });
        
        this.$back.click(function(){
            outer.hide();
            outer.root.menu.show();
        });
    }

    show(){ //打开playground界面
        this.$playground.show();
    }
    hide(){ //关闭playground界面
        this.$playground.hide();
    }
}
class Settings{
    constructor(root){
        this.root = root;
        this.$settings = $(`
<div class="ac-game-settings">
    <div class="ac-game-settings-login">
        <div class="ac-game-settings-login-title">
            登陆窗口
        </div>
        <div class="ac-game-settings-username">
            <div class="ac-game-settings-item">
                <input type="text" placeholder="用户名">
            </div>
        </div>

        <div class="ac-game-settings-password">
            <div class="ac-game-settings-item">
                <input type="password" placeholder="密码">
            </div>
        </div>

        <div class="ac-game-settings-submit">
            <button>登陆</button>
        </div>
     </div>
</div>
`);
        this.$login_username = this.$settings.find(".ac-game-settings-username input");
        this.$login_password = this.$settings.find(".ac-game-settings-password input");
        this.$login_submit = this.$settings.find(".ac-game-settings-submit button");
        this.root.$ac_game.append(this.$settings);
        this.show();
        this.start();
    }

    start(){
        let outer = this;
        this.getinfo();
        this.$login_submit.click(function(){
            alert("恭喜你 登录成功");
            outer.loginto();
        });
    }
    
    loginto(){
        let outer=this;
        let username=this.$login_username.val();
        let password=this.$login_password.val();

        $.ajax({
            url: "http://47.94.12.24:8000/settings/loginto/",
            type: "GET",
            data: {
                username: username,
                password: password,
            },
            success: function(resp){
                console.log(resp);
                if(resp.result === "success"){
                    location.reload();
                }
            }
        });
    }
    getinfo(){
        let outer=this;
        $.ajax({
            url: "http://47.94.12.24:8000/settings/getinfo/",
            type: "GET",
            success: function(resp){
                console.log(resp);
                if(resp.result === "success"){
                    outer.hide();
                    outer.root.menu.show();
                }else{
                    outer.root.menu.hide();
                    outer.show();
                }
            }
        });
    }
    
    hide(){
        this.$settings.hide();
    }
    
    show(){
        this.$settings.show();
    }
}
class AcGame{
    constructor(id){
        this.id = id;
        this.$ac_game = $('#' + id);
        this.menu = new AcGameMenu(this);
        this.playground = new AcGamePlayground(this);
        this.settings = new Settings(this);
        this.start();
    }
    start(){

    }
}
