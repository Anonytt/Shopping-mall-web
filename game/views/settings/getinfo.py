from django.http import JsonResponse
from game.models.player.player import Player

def getinfo(request):
    user = request.user
    #player = Player.objects.all()[0]
    player = Player.objects.get(user=user)
    if not user.is_authenticated:
        return JsonResponse({
            'result':"未登录成功",
        })
    else:
        return JsonResponse({
            'result':'success',
            'username':player.user.username,
            'photo':player.photo,
            'price':player.price,
            'qq':player.qq,
            'sign':player.sign,
        })
