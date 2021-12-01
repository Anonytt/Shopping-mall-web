from django.http import JsonResponse
from game.models.player.player import Player

def changeself(request):
    user = request.user
    player = Player.objects.get(user=user)
    data = request.GET
    sign = data.get("sign","").strip()
    player.sign = sign
    player.save()
    if not user.is_authenticated:
        return JsonResponse({
            'result':"未成功登录",
        });
    else:
        return JsonResponse({
            'result':'success',
        });
