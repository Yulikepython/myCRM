from rest_framework.generics import ListAPIView, RetrieveAPIView

from applicant.api.serializers import PropertyApplicationPhaseSerializer
from applicant.models import PropertyApplicationPhase

class PropertyApplicationPhaseApiList(ListAPIView):
    queryset = PropertyApplicationPhase.objects.all()
    serializer_class = PropertyApplicationPhaseSerializer

class PropertyApplicationPhaseApiRetrieve(RetrieveAPIView):
    queryset = PropertyApplicationPhase.objects.all()
    serializer_class = PropertyApplicationPhaseSerializer
    lookup_field = 'pk'