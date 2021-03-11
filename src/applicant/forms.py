from django import forms
from .models import PropertyApplicationPhase

class ApplicantModelForm(forms.ModelForm):
    class Meta:
        model = PropertyApplicationPhase
        exclude=["lead"]

    def __init__(self, object, *args, **kwargs):
        self.instance = object
        super().__init__(*args, **kwargs)