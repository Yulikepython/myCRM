from django.urls import path

from .views import ApplicantListView, ApplicantUpdateView
urlpatterns = [
    path("", ApplicantListView.as_view(), name="applicant_list"),
    path("<int:pk>/edit/", ApplicantUpdateView.as_view(), name="applicant_update"),
]
