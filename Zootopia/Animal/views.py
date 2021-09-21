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

  if post.likes.filter(id=request.user.id):
        message="취소"
  else:
        message="좋아요"

  return render(request, 'detail.html', {'post' :post,'person':person, 'message' : message})

def upload (request):
   if request.method == "POST":  # method가 Post일 때 글 작성
      post_blog = Post()
      post_blog.name= request.POST.get('name')
      post_blog.time = timezone.datetime.now() 
      post_blog.image = request.FILES.get('image')
      post_blog.body = request.POST.get('body')
      post_blog.hash_tag = request.POST.get('hashtag')
      post_blog.species = request.POST.get('species')
      post_blog.variety = request.POST.get('variety')
      user_id = request.user.id
      user = User.objects.get(id = user_id)
      post_blog.author = user
      post_blog.save()
      return redirect('detail', post_blog.id)

   else:
      return render (request, 'upload.html')  

def search (request):
  # 최근 글이 5개 이하일 경우
  if Post.objects.count()<5:
    posts = Post.objects.all()[::-1]
    return render (request, 'search.html', {"posts":posts})
  # 최근 글이 5개 이상일 경우
  else:     
    posts = Post.objects.all()[Post.objects.count()-5::-1]
    return render (request, 'search.html', {"posts":posts})

def result(request):
  return render (request, 'result.html')

def profile(request):
  return render(request,'profile.html')

def location(request):
  return render(request,'location.html')


def delete(request, id):
    delete_blog = Post.objects.get(id=id)
    delete_blog.delete()
    return redirect('main') 

def edit(request, id):
    post_blog = Post.objects.get(id=id)

    if request.method == "POST":
      post_blog.name= request.POST.get('name')
      post_blog.time = timezone.datetime.now() 
      post_blog.image = request.FILES.get('image')
      post_blog.body = request.POST.get('body')
      post_blog.hash_tag = request.POST.get('hashtag')
      post_blog.species = request.POST.get('species')
      post_blog.variety = request.POST.get('variety')
      post_blog.save()
      return redirect('detail', post_blog.id)
    else:        
      return render(request, 'edit.html', {'post':post_blog})

def post_like(request, id):
    post = get_object_or_404(Post, pk=id)
    user = request.user

    if post.likes.filter(id=user.id):
        post.likes.remove(user)
    else: 
        post.likes.add(user)

    return redirect('/animal/detail/'+str(id))
