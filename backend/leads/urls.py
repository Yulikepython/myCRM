from django.urls import path

from .views import LeadListView, LeadDetailView

urlpatterns = [
    path("", LeadListView.as_view(), name="lead_list"),
    path('<int:pk>/', LeadDetailView.as_view(), name="lead_detail"),
]
