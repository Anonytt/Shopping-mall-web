from django.http import JsonResponse
from django.contrib.auth import authenticate,login

def loginto(request):
    data = request.GET
    username = data.get('username')
    password = data.get('password')
    user = authenticate(username=username,password=password)
    if not user:
        return JsonResponse({
            'result': "登陆失败"
        })
    login(request,user)
    return JsonResponse({
        'result':"success"
    })
