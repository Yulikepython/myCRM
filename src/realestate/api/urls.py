from django.urls import path

from realestate.api.views import (
                                PropertyModelRetrieve,
                                PropertyModelApiListCreate,
                                RentApiRetrieve,
                                RentApiListCreate,
                                )

urlpatterns = [
    path("properties/", PropertyModelApiListCreate.as_view(), name="properties_api"),
    path("properties/<int:pk>/", PropertyModelRetrieve.as_view(), name="property_api"),

    path("rents/<int:pk>/", RentApiRetrieve.as_view(), name="rent_api"),
    path("rents/", RentApiListCreate.as_view(), name="rents_api_create"),
]
