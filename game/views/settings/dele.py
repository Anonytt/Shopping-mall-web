from django.http import JsonResponse
from game.models.goods.goods import Goods
from game.models.player.player import Player

def dele(request):
    user = request.user
    data = request.GET
    name = data.get('name')
    goods = Goods.objects.get(name=name)
    goods.belong =""
    goods.save()
    return JsonResponse({
        'result':'success',
        'res':name,
    })
