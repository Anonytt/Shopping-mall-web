from django.urls import path
from game.views.menu.sure import mksure
from game.views.menu.init import init
urlpatterns=[
    path("sure/",mksure,name="menu_mksure"),
    path("init/",init,name="menu_init"),
]
