from django.urls import path

from property.api.views import (
                                PropertyModelApiList, 
                                RentApiList,
                                PropertyModelRetrieve,
                                RentApiRetrieve,
                                )

urlpatterns = [
    path("properties/", PropertyModelApiList.as_view(), name="properties_api"),
    path("rents/", RentApiList.as_view(), name="rents_api"),
    path("properties/<int:pk>/", PropertyModelRetrieve.as_view(), name="property_api"),
    path("rents/<int:pk>/", RentApiRetrieve.as_view(), name="rent_api"),
]
