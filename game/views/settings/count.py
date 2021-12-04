from django.http import JsonResponse
from game.models.goods.goods import Goods
from game.models.player.player import Player

def count(request):
    user = request.user
    goods = Goods.objects.filter(belong=user.username)
    tot = len(goods)
    return JsonResponse({
        'result':'success',
        'tot':tot,
    })
