from django.http import JsonResponse
from game.models.goods.goods import Goods
from game.models.player.player import Player

def buy(request):
    user = request.user
    data = request.GET
    number = data.get("num","").strip()
    webname = "commodity"+number
    if Goods.objects.filter(webname=webname).exists():
        goods = Goods.objects.get(webname=webname)
        player = Player.objects.get(user=user)
        if(player.price >= goods.price):
            return JsonResponse({
                'result':'success',
            })
        else:
            return JsonResponse({
                'result':"购物失败"
            })
