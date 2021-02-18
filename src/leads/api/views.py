from rest_framework.generics import (
                                    ListAPIView, 
                                    RetrieveAPIView,
                                    ListCreateAPIView,
                                    DestroyAPIView,
                                    )

from leads.models import Lead, Person
from leads.api.serializers import LeadSerializer, PersonSerializer


class LeadApiList(ListAPIView):
    queryset = Lead.objects.all().order_by("-created_at")
    serializer_class = LeadSerializer

class LeadApiListCreate(ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

class LeadApiRetrieve(RetrieveAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer
    lookup_field = 'pk'

class LeadApiDestroy(DestroyAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer
    lookup_field = 'pk'

class PersonApiList(ListAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer

class PersonApiRetrieve(RetrieveAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
    lookup_field = 'pk'

class PersonApiListCreate(ListCreateAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer

class PersonApiDestroy(DestroyAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
    lookup_field = 'pk'
