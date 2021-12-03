from django.http import JsonResponse
from game.models.goods.goods import Goods

def buy(request):
    data = request.GET
    number = data.get("num","").strip()
    webname = "commodity"+number
    if Goods.objects.filter(webname=webname).exists():
        goods = Goods.objects.get(webname=webname)
        return JsonResponse({
            'result':'success',
            'webname':goods.webname,
            'belong':goods.belong,
            'name':goods.name,
            'source':goods.source,
            'price':goods.price,
            'describe':goods.describe,
        })
