from django.http import JsonResponse
from game.models.goods.goods import Goods

def search(request):
    user =request.user
    data = request.GET
    name = data.get("content","").strip()
    if Goods.objects.filter(name=name).exists():
        goods = Goods.objects.get(name=name)
        web = "http://47.94.12.24:8000/"+goods.webname
        return JsonResponse({
            'result':'success',
            'web': web,
        })
    return JsonResponse({
        'result':'unsuccess',
    })
