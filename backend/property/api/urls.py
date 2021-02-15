from django.urls import path

from property.api.views import PropertyModelApiList, RentApiList

urlpatterns = [
    path("properties/", PropertyModelApiList.as_view(), name="property_api"),
    path("rents/", RentApiList.as_view(), name="rent_api"),
]
