from django.urls import path
from game.views.settings.getinfo import getinfo
from game.views.settings.loginto import loginto
from game.views.settings.reginto import reginto

urlpatterns = [
    path("getinfo/",getinfo,name="settings_getinfo"),
    path("loginto/",loginto,name="settings_loginto"),
    path("reginto/",reginto,name="settings_reginto"),
]
