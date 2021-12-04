from django.http import JsonResponse
from game.models.goods.goods import Goods
from game.models.player.player import Player

def jiesuan(request):
    user = request.user
    data = request.GET
    player = Player.objects.get(user=user)
    sume = data.get('sum')
    money = sume[5:len(sume)]
    if player.price >= int(float(money)):
        return JsonResponse({
            'result':'success',
        })
    else:
        return JsonResponse({
            'result':'不成功',
        })
