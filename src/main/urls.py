from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='react.html')),
    path('', include("leads.urls")),
    path('api/', include("leads.api.urls")),
    path('api/', include("realestate.api.urls")),
    path('api/', include("applicant.api.urls")),
    
]
