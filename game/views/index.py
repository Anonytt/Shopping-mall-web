from django.http import HttpResponse
from django.shortcuts import render,redirect
from game.models.player.player import Player

def index(request):
    qq_group_num = request.GET.get('num')
    return render(request,"multiends/web.html",{"qq_group_num":qq_group_num})

def ano(request):
    return render(request,"multiends/ano.html")

def register(request):
    return render(request,"multiends/register.html")

def login(request):
    return render(request,"multiends/login.html")

def mainpage(request):
    return render(request,"multiends/mainpage.html")

def shopcar(request):
    return render(request,"multiends/shopcar.html")

def selfinfo(request):
    return render(request,"multiends/selfinfo.html")

def commodity0(request):
    return render(request,"multiends/commodity0.html")

def commodity1(request):
    return render(request,"multiends/commodity1.html")

def commodity2(request):
    return render(request,"multiends/commodity2.html")

def commodity3(request):
    return render(request,"multiends/commodity3.html")

def to_upload(request):
    rec_file = request.FILES.get('upload_file')
    with open(f'game/static/image/media/{rec_file.name}','wb') as f:
        f.write(rec_file.read())
    user = request.user
    player = Player.objects.get(user=user)
    player.photo = "http://47.94.12.24:8000/static/image/media/"+rec_file.name
    player.save()
    return redirect('/selfinfo/')
