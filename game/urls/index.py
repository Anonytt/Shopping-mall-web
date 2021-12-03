from django.urls import path,include
from game.views.index import index,ano,register,login,mainpage,shopcar,selfinfo,commodity0,commodity1,commodity2,commodity3,to_upload

urlpatterns =[
    path("",index,name="index"),
    path("mainpage/",mainpage,name="mainpage"),
    path("ano/",ano,name="ano"),
    path("register/",register,name="register"),
    path("login/",login,name="login"),
    path("shopcar/",shopcar,name="shopcar"),
    path("selfinfo/",selfinfo,name="selfinfo"),
    path("commodity0/",commodity0,name="commodity0"),
    path("commodity1/",commodity1,name="commodity1"),
    path("commodity2/",commodity2,name="commodity2"),
    path("commodity3/",commodity3,name="commodity3"),

    path("to_upload",to_upload),

    path("menu/",include("game.urls.menu.index")),
    path("playground/",include("game.urls.playground.index")),
    path("settings/",include("game.urls.settings.index")),
]
