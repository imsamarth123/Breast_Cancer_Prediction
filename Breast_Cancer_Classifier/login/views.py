from django.shortcuts import render,HttpResponse,redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required

# Create your views here.

def signup_page(request):
    if request.method =='POST':
        uname = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        conf_password = request.POST.get('confirm_password')

        if password != conf_password:
            return render(request, 'signup.html', {'error': True})
            # return HttpResponse("Password and Confirm Password do not match!")
        else:
            my_user = User.objects.create_user(uname,email,password)
            my_user.save()
            # return redirect('login')
            return render(request, 'login.html', {'flag': True})
            # print(uname,email,password,conf_password)
    return render(request,'signup.html',{}) # For GET request

def login_page(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        # print(username,password)
        user = authenticate(request,username=username,password=password)

        if user is not None:
            login(request,user) ####
            return redirect('home')
        else:
            return render(request, 'login.html', {'error': True})   
    return render(request,'login.html',{}) # For GET request

def logout_page(request):
    logout(request)
    return redirect('login')