from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import auth
from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
# Create your views here.

def login (request):
  if request.method =='POST':
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(request, username=username, password=password)
    if user is not None:
      auth.login(request, user)
      return redirect('/')
    else:
      return render(request, 'login.html')
  else:    
    return render (request, 'login.html')

def logout(request):
  auth.logout(request)
  return redirect('/')

def create_account (request):
  User = get_user_model()
  if request.method == "POST":
    if request.POST['password1'] == request.POST['password2']:
      user = User.objects.create_user(
        username=request.POST['username'],
        password=request.POST['password1'],
        nickname=request.POST['nickname'],
      )
      auth.login(request, user)
      return redirect('/')
    return render(request, 'create_account.html')
  return render(request, 'create_account.html')

def profile (request):
  person = get_object_or_404(get_user_model(), username=request.user)
  
  return render (request, 'profile.html', {'person' : person})

def profile_edit(request):
    person = get_object_or_404(get_user_model(), username=request.user)
    if request.method == "POST":
      person.nickname = request.POST.get('nickname')
      person.introduce = request.POST.get('introduce') 
      person.profile_picture = request.FILES.get('profile_picture')
      person.save()
      return redirect('/account/profile/', {'person' : person})
    
    else:        
      return render(request, 'profile_edit.html', {'person' : person})