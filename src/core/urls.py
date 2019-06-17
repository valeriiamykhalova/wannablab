from django.contrib import admin
from django.urls import path, re_path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    re_path(r'', include(('wannablab.urls', 'wannablab'), namespace='wannablab')),
    re_path(r'', include(('users.urls', 'users'), namespace='users')),
]


#: TODO: While development. Code below is pretty fucking far from OK.
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

