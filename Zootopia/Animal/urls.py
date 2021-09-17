
from django.urls import path, include
from . import views

urlpatterns = [
    path('',  views.main, name="main"),
    path('search/', views.search, name="search"),
    path('result/', views.result, name="result"),
    path('main/', views.main, name="main"),
    path('upload/', views.upload, name="upload"),
    path('detail/<str:id>', views.detail, name='detail'),
    path('profile/',views.profile, name="profile"),
    path('delete/<str:id>', views.delete, name='delete'),    
    path('edit/<str:id>', views.edit, name='edit'),
    path('like/<int:id>', views.post_like, name='post_like'),
]
