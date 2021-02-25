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


class LeadApiList(ListAPIView):
    queryset = Lead.objects.all().order_by("-created_at")
    serializer_class = LeadSerializer

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
