from rest_framework import serializers
from leads.models import Lead, Person

class LeadSerializer(serializers.ModelSerializer):
    owner = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Lead
        fields = "__all__"

    def get_owner(self, obj):
        request = self.context['request']
        if request.user.is_authenticated:
            if obj.user == request.user:
                return True
        return False


class PersonSerializer(serializers.ModelSerializer):
    owner = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Person
        fields = "__all__"

    def get_owner(self, obj):
        request = self.context['request']
        if request.user.is_authenticated:
            if obj.user == request.user:
                return True
        return False