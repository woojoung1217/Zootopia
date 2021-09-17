from django.db import models
from django.utils import timezone

class Post(models.Model):
  
  # 동물 이름
  name = models.CharField(max_length=20)
  # 동물 종
  species = models.CharField(max_length=20, null=True)
  # 내용
  body = models.TextField(max_length=100)
  # 해쉬태그
  hash_tag = models.CharField(max_length=30, null=True)
  # 사진
  image = models.ImageField(upload_to='post/', blank=True, null=True)
  # 작성자

  # 작성 시간
  time =  models.DateTimeField(auto_now_add=True)
  #위도
  latitude = models.FloatField(default=0.0) 
  #경도
  longitude = models.FloatField(default=0.0) 
  
  def __str__(self):
    return self.name

