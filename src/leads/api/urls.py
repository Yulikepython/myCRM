from django.urls import path

from leads.api.views import (
                            LeadApiList, 
                            LeadApiRetrieve,
                            LeadApiListCreate,
                            LeadApiDestroy,
                            PersonApiList,
                            PersonApiRetrieve,
                            PersonApiListCreate,
                            PersonApiDestroy,
                            )       

urlpatterns = [
    path('leads/', LeadApiList.as_view(), name="leads_api"),
    path('leads/create/', LeadApiListCreate.as_view(), name="leads_api_create"),
    path('leads/<int:pk>/', LeadApiRetrieve.as_view(), name="lead_api"),
    path('leads/<int:pk>/delete/', LeadApiDestroy.as_view(), name="lead_api_delete"),
    path('people/', PersonApiList.as_view(), name="people_api"),
    path('people/create/', PersonApiListCreate.as_view(), name="people_api_create"),
    path('people/<int:pk>/', PersonApiRetrieve.as_view(), name="person_api"),
    path('people/<int:pk>/delete/', PersonApiDestroy.as_view(), name="person_api_delete"),
]
