from django.contrib import admin
from game.models.player.player import Player
from game.models.goods.goods import Goods
# Register your models here.
admin.site.register(Player)
admin.site.register(Goods)
