from django.urls import path

from applicant.api.views import (
                                PropertyApplicationPhaseApiList,
                                PropertyApplicationPhaseApiRetrieve,
                                PropertyApplicationPhaseApiListCreate,
                                PropertyApplicationPhaseApiDestroy,
                                )

urlpatterns = [
    path("applicants/", PropertyApplicationPhaseApiList.as_view(), name="applicants_api"),
    path("applicants/<int:pk>/", PropertyApplicationPhaseApiRetrieve.as_view(), name="applicant_api"),
    path('applicants/create/', PropertyApplicationPhaseApiListCreate.as_view(), name="applicants_api_create"),
    path('applicants/<int:pk>/delete/', PropertyApplicationPhaseApiDestroy.as_view(), name="applicant_api_delete"),
]
