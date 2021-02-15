from django.urls import path

from applicant.api.views import PropertyApplicationPhaseApiList

urlpatterns = [
    path("applicants/", PropertyApplicationPhaseApiList.as_view(), name="applicant_list"),
]
