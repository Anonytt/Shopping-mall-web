from django.http import JsonResponse
from game.models.goods.goods import Goods
from game.models.player.player import Player

def jiesuan(request):
    return JsonResponse({
        'result':'success',
    })
