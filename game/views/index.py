from django.http import HttpResponse
from django.shortcuts import render,redirect

def index(request):
    return render(request,"multiends/web.html")

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

def to_upload(request):
    rec_file = request.FILES.get('upload_file')
    with open(f'game/static/image/media/{rec_file.name}','wb') as f:
        f.write(rec_file.read())
    return redirect('/selfinfo/')
