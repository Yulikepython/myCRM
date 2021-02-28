from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("frontend.urls")),
    re_path(r'^leads/', TemplateView.as_view(template_name='frontend/index.html')),
    re_path(r'^people/', TemplateView.as_view(template_name='frontend/index.html')),
    path('api/', include("leads.api.urls")),
    path('api/', include("realestate.api.urls")),
    path('api/', include("applicant.api.urls")),
    
]
