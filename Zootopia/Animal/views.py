from django.shortcuts import render
from animal.models import Post
from .models import *

def main (request):
  return render (request, 'main.html')  

def search (request):
  posts = Post.objects.all()[Post.objects.count()-5::-1]
  return render (request, 'search.html', {"posts":posts})

def result(request):
  posts = Post.objects.get(name='고양이')
  return render (request, 'result.html', {"posts":posts})