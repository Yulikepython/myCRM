from django.urls import path

from realestate.api.views import (
                                PropertyModelApiList, 
                                PropertyModelRetrieve,
                                PropertyModelApiListCreate,
                                PropertyModelApiDestroy,
                                RentApiList,
                                RentApiRetrieve,
                                RentApiListCreate,
                                RentApiDestroy
                                )

urlpatterns = [
    path("properties/", PropertyModelApiList.as_view(), name="properties_api"),
    path("properties/<int:pk>/", PropertyModelRetrieve.as_view(), name="property_api"),
    path("properties/create/", PropertyModelApiListCreate.as_view(), name="properties_api_create"),
    path("properties/<int:pk>/delete/", PropertyModelApiDestroy.as_view(), name="property_api_delete"),
    path("rents/", RentApiList.as_view(), name="rents_api"),
    path("rents/<int:pk>/", RentApiRetrieve.as_view(), name="rent_api"),
    path("rents/create/", RentApiListCreate.as_view(), name="rents_api_create"),
    path("rents/<int:pk>/delete/", RentApiDestroy.as_view(), name="rent_api_delete"),
]
