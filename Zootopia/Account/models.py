from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser

class User(AbstractUser) :
    nickname = models.CharField(max_length=30, blank=True, null=True)
    profile_picture = models.ImageField(upload_to='account/', blank=True, null=True)
    introduce = models.TextField(max_length = 100, blank=True, null=True)