from django.http import JsonResponse
from game.models.goods.goods import Goods
from game.models.player.player import Player

def jiesuan(request):
    user = request.user
    data = request.GET
    player = Player.objects.get(user=user)
    goods = Goods.objects.filter(belong=user.username)
    sume = data.get('sum')
    money = sume[5:len(sume)]
    if player.price >= int(float(money)):
        player.price -= int(float(money))
        player.save()
        nm = "hehe"
        for i in range (len(goods.values('belong'))):
            goods[i].belong=""
            nm = goods[i].name
            gd = Goods.objects.get(name=nm)
            gd.belong=""
            gd.save()
        return JsonResponse({
            'result':'success',
        })
    else:
        return JsonResponse({
            'result':'不成功',
        })
