from rest_framework import serializers

from applicant.models import PropertyApplicationPhase

class PropertyApplicationPhaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyApplicationPhase
        fields = "__all__"
