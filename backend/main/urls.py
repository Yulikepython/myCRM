from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("leads.urls")),
    path('api/', include("leads.api.urls")),
    path('api/', include("property.api.urls")),
    path('api/', include("applicant.api.urls")),
    
]
