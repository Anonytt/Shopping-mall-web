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
