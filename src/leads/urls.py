from django.urls import path

from .views import (
                    LeadListView, 
                    LeadDetailView, 
                    LeadUpdateView, 
                    LeadCreateView,
                    )

from .people_views import PersonCreateView, PeopleSelectView

urlpatterns = [
    path("", LeadListView.as_view(), name="lead_list"),
    path('<int:pk>/', LeadDetailView.as_view(), name="lead_detail"),
    path('<int:pk>/edit/', LeadUpdateView.as_view(), name="lead_update"),
    path('lead/create/', LeadCreateView.as_view(), name="lead_create"),
    path('people/', PeopleSelectView.as_view(), name="people_select"),
    path('person/create/', PersonCreateView.as_view(), name="person_create"),
]
