from django.urls import path,include
from game.views.index import index,ano,register,login,mainpage,shopcar

urlpatterns =[
    path("",index,name="index"),
    path("mainpage/",mainpage,name="mainpage"),
    path("ano/",ano,name="ano"),
    path("register/",register,name="register"),
    path("login/",login,name="login"),
    path("shopcar/",shopcar,name="shopcar"),

    path("menu/",include("game.urls.menu.index")),
    path("playground/",include("game.urls.playground.index")),
    path("settings/",include("game.urls.settings.index")),
]
