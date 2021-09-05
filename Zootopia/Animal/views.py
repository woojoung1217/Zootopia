from django.shortcuts import render

def main (request):
  return render (request, 'main.html')  

def search (request):
  return render (request, 'search.html')

def result(request):
  return render (request, 'result.html')