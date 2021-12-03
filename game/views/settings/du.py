from django.http import JsonResponse
from game.models.goods.goods import Goods
from game.models.player.player import Player

def du(request):
    user = request.user
    data = request.GET
    player = Player.objects.get(user=user)
    name = user.username
    tot = len(Goods.objects.filter(belong=name).values())
    return JsonResponse({
        'result':'success',
        'tot':tot,
        'rows':list(Goods.objects.filter(belong=name).values('name','price')),
    })
