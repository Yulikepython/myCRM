from rest_framework.generics import (
                                    ListCreateAPIView,
                                    RetrieveUpdateDestroyAPIView,
                                    )

from realestate.api.serializers import PropertyModelSerializer, RentModelSerializer
from realestate.models import PropertyModel, Rent

class PropertyModelApiListCreate(ListCreateAPIView):
    queryset = PropertyModel.objects.all()
    serializer_class = PropertyModelSerializer

class PropertyModelRetrieve(RetrieveUpdateDestroyAPIView):
    queryset = PropertyModel.objects.all()
    serializer_class = PropertyModelSerializer
    lookup_field = 'pk'


class RentApiRetrieve(RetrieveUpdateDestroyAPIView):
    queryset = Rent.objects.all()
    serializer_class = RentModelSerializer
    lookup_field = 'pk'

class RentApiListCreate(ListCreateAPIView):
    queryset = Rent.objects.all()
    serializer_class = RentModelSerializer

