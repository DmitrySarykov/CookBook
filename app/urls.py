from django.contrib import admin
from django.urls import path, include
from rest_framework_swagger.views import get_swagger_view
from rest_framework.schemas import get_schema_view
from django.conf.urls.static import static 
from django.conf import settings

schema_view = get_swagger_view(title='My Project Swagger')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('cookbook.urls')),
    path('openapi/', get_schema_view(
        title="App", 
        urlconf='cookbook.urls', 
        description="API for all things …",
        version="1.0.0",), 
        name='openapi-schema'),
    path("swagger/", schema_view, name="swagger"),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)