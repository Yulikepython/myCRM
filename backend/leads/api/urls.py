from django.urls import path

from leads.api.views import LeadApiList, PersonApiList


urlpatterns = [
    path('leads/', LeadApiList.as_view(), name="lead_api"),
    path('people/', PersonApiList.as_view(), name="person_api"),
]
