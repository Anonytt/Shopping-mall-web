from django.http import JsonResponse
from game.models.goods.goods import Goods
from game.models.player.player import Player
from django.contrib.auth.models import User
def chat(request):
    user = request.user
    data = request.GET
    username = data.get("name","").strip()
    length = len(Player.objects.filter())
    lst = []
    for i in range (length):
        if Player.objects.filter()[i].user.username == username:
            continue
        dist = {}
        dist['name'] = Player.objects.filter()[i].user.username
        dist['photo'] = Player.objects.filter()[i].photo
        lst.append(dist)
    return JsonResponse({
        'result':'success',
        'length':length-1,
        'lst':lst,
    })
