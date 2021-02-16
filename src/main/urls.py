from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("frontend.urls")),
    path('', include("leads.urls")),
    path('api/', include("leads.api.urls")),
    path('api/', include("realestate.api.urls")),
    path('api/', include("applicant.api.urls")),
    
]
