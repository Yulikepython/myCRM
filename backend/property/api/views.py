from rest_framework.generics import ListAPIView

from property.api.serializers import PropertyModelSerializer, RentModelSerializer
from property.models import PropertyModel, Rent

class PropertyModelApiList(ListAPIView):
    queryset = PropertyModel.objects.all()
    serializer_class = PropertyModelSerializer

class RentApiList(ListAPIView):
    queryset = Rent.objects.all()
    serializer_class = RentModelSerializer