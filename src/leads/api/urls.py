from django.urls import path

from leads.api.views import (
                            LeadApiRetrieve,
                            LeadApiListCreate,
                            LeadApiDestroy,
                            PersonApiRetrieve,
                            PersonApiListCreate,
                            PersonApiDestroy,
                            )       

urlpatterns = [
    path('leads/', LeadApiListCreate.as_view(), name="leads_api_listcreate"),
    path('leads/<int:pk>/', LeadApiRetrieve.as_view(), name="lead_api"),
    path('leads/<int:pk>/delete/', LeadApiDestroy.as_view(), name="lead_api_delete"),
    path('people/', PersonApiListCreate.as_view(), name="people_api_listcreate"),
    path('people/<int:pk>/', PersonApiRetrieve.as_view(), name="person_api"),
    path('people/<int:pk>/delete/', PersonApiDestroy.as_view(), name="person_api_delete"),
]
