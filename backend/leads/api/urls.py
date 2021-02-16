from django.urls import path

from leads.api.views import (
                            LeadApiList, 
                            PersonApiList,
                            LeadApiRetrieve,
                            PersonApiRetrieve
                            )       

urlpatterns = [
    path('leads/', LeadApiList.as_view(), name="leads_api"),
    path('people/', PersonApiList.as_view(), name="people_api"),
    path('leads/<int:pk>/', LeadApiRetrieve.as_view(), name="lead_api"),
    path('people/<int:pk>/', PersonApiRetrieve.as_view(), name="person_api"),
]
