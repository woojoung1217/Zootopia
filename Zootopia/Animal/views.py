from django.shortcuts import render, redirect, get_object_or_404
from animal.models import Post
from django.contrib.auth import get_user_model
from .models import *
from account.models import User

def main (request):
  return render (request, 'main.html')  

def detail(request, id):
  post = get_object_or_404(Post, pk = id)
  person = get_object_or_404(get_user_model(), username=request.user)

  return render(request, 'detail.html', {'post' :post,'person':person})

def upload (request):
   if request.method == "POST":  # method가 Post일 때 글 작성
      post_blog = Post()
      post_blog.name= request.POST.get('name')
      post_blog.time = timezone.datetime.now() 
      post_blog.image = request.FILES.get('image')
      post_blog.body = request.POST.get('body')
      post_blog.hash_tag = request.POST.get('hashtag')
      post_blog.species = request.POST.get('species')

      user_id = request.user.id
      user = User.objects.get(id = user_id)
      post_blog.author = user
      post_blog.save()
      return redirect('detail', post_blog.id)

   else:
      return render (request, 'upload.html')  

def search (request):
  posts = Post.objects.all()[Post.objects.count()-5::-1]
  return render (request, 'search.html', {"posts":posts})

def result(request):
  posts = Post.objects.all()[Post.objects.count()-5::-1]
  return render (request, 'result.html', {"posts":posts})

def profile(request):
  return render(request,'profile.html')

