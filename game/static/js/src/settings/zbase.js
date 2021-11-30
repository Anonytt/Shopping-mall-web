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
