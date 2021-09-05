from django.shortcuts import render

# Create your views here.
def login (request):
  return render (request, 'login.html')

def create_account (request):
  return render (request, 'create_account.html')