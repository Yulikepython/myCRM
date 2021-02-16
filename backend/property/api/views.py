from rest_framework.generics import ListAPIView, RetrieveAPIView

from property.api.serializers import PropertyModelSerializer, RentModelSerializer
from property.models import PropertyModel, Rent

class PropertyModelApiList(ListAPIView):
    queryset = PropertyModel.objects.all()
    serializer_class = PropertyModelSerializer

class RentApiList(ListAPIView):
    queryset = Rent.objects.all()
    serializer_class = RentModelSerializer

class PropertyModelRetrieve(RetrieveAPIView):
    queryset = Rent.objects.all()
    serializer_class = RentModelSerializer
    lookup_field = 'pk'

class RentApiRetrieve(RetrieveAPIView):
    queryset = Rent.objects.all()
    serializer_class = RentModelSerializer
    lookup_field = 'pk'