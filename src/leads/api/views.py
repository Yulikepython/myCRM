from rest_framework import permissions
from rest_framework.generics import (
                                    ListAPIView, 
                                    RetrieveAPIView,
                                    ListCreateAPIView,
                                    DestroyAPIView,
                                    RetrieveUpdateDestroyAPIView,
                                    )

from leads.models import Lead, Person
from leads.api.serializers import LeadSerializer, PersonSerializer
from leads.api.permissions import IsOwnerOrReadOnly

class LeadApiListCreate(ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

class LeadApiRetrieve(RetrieveUpdateDestroyAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer
    lookup_field = 'pk'
    permission_classes = [IsOwnerOrReadOnly]

    def get_serializer_context(self):
        ctx = super().get_serializer_context()
        ctx['request'] = self.request
        return ctx

class LeadApiDestroy(DestroyAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer
    lookup_field = 'pk'

#person model

class PersonApiListCreate(ListCreateAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer

class PersonApiRetrieve(RetrieveUpdateDestroyAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
    lookup_field = 'pk'

class PersonApiDestroy(DestroyAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
    lookup_field = 'pk'
