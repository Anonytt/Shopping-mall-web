from django.http import JsonResponse
from game.models.player.player import Player

def mksure(request):
    data = request.GET
    money = data.get('money')
    user = request.user
    player = Player.objects.get(user=user)
    #player = Player.objects.all()[0]
    player.price = player.price + int(money)
    player.save()
    return JsonResponse({
        'ret': 0,
        'name': player.user.username,
        'sex': player.sex,
        'pri': player.price,
    })
