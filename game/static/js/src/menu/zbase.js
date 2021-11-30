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
