from django.shortcuts import render

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
