from rest_framework import serializers

from property.models import PropertyModel, Rent

class PropertyModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyModel
        fields = "__all__"

class RentModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rent
        fields = "__all__"