from django.contrib import admin
from django.urls import path
from account import views as accountViews
from animal import views as animalViews
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', animalViews.main, name="main"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
