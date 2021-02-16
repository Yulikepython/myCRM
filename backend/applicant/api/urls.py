from django.urls import path

from applicant.api.views import (
                                PropertyApplicationPhaseApiList,
                                PropertyApplicationPhaseApiRetrieve,
                                )

urlpatterns = [
    path("applicants/", PropertyApplicationPhaseApiList.as_view(), name="applicants_api"),
    path("applicants/<int:pk>/", PropertyApplicationPhaseApiRetrieve.as_view(), name="applicant_api"),
]
