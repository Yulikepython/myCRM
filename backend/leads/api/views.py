from rest_framework.generics import ListAPIView, RetrieveAPIView

from leads.models import Lead, Person
from leads.api.serializers import LeadSerializer, PersonSerializer


class LeadApiList(ListAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

class PersonApiList(ListAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer

class LeadApiRetrieve(RetrieveAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer
    lookup_field = 'pk'

class PersonApiRetrieve(RetrieveAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
    lookup_field = 'pk'