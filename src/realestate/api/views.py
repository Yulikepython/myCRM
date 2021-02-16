from rest_framework.generics import (
                                    ListAPIView, 
                                    RetrieveAPIView,
                                    ListCreateAPIView,
                                    DestroyAPIView,
                                    )

from realestate.api.serializers import PropertyModelSerializer, RentModelSerializer
from realestate.models import PropertyModel, Rent

class PropertyModelApiList(ListAPIView):
    queryset = PropertyModel.objects.all()
    serializer_class = PropertyModelSerializer

class PropertyModelRetrieve(RetrieveAPIView):
    queryset = PropertyModel.objects.all()
    serializer_class = PropertyModelSerializer
    lookup_field = 'pk'

class PropertyModelApiListCreate(ListCreateAPIView):
    queryset = PropertyModel.objects.all()
    serializer_class = PropertyModelSerializer

class PropertyModelApiDestroy(DestroyAPIView):
    queryset = PropertyModel.objects.all()
    serializer_class = PropertyModelSerializer
    lookup_field = 'pk'

class RentApiList(ListAPIView):
    queryset = Rent.objects.all()
    serializer_class = RentModelSerializer

class RentApiRetrieve(RetrieveAPIView):
    queryset = Rent.objects.all()
    serializer_class = RentModelSerializer
    lookup_field = 'pk'

class RentApiListCreate(ListCreateAPIView):
    queryset = Rent.objects.all()
    serializer_class = RentModelSerializer

class RentApiDestroy(DestroyAPIView):
    queryset = Rent.objects.all()
    serializer_class = RentModelSerializer
    lookup_field = 'pk'