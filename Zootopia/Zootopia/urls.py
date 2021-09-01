from django.contrib import admin
from django.urls import path
from account import views as accountViews
from animal import views as animalViews
from django.conf import settings
from django.conf.urls.static import static

from django.urls.conf import include
from account import views as A
from animal import views as B

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', B.main, name="main"),
    path('account/', include('account.urls')),
    path('animal/', include('animal.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
