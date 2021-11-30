from django.http import JsonResponse
from game.models.player.player import Player

def init(request):
    user = request.user
    player = Player.objects.get(user=user)
    player.price = 0
    player.save()
    return JsonResponse({
        'ret' : 0,
        'cur_price': player.price,
    })
