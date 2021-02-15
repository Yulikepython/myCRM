from rest_framework.generics import ListAPIView

from applicant.api.serializers import PropertyApplicationPhaseSerializer
from applicant.models import PropertyApplicationPhase

class PropertyApplicationPhaseApiList(ListAPIView):
    queryset = PropertyApplicationPhase.objects.all()
    serializer_class = PropertyApplicationPhaseSerializer