from django import forms

from .models import Lead, Person

class LeadForm(forms.ModelForm):
    class Meta:
        model = Lead
        fields = "__all__"

    def __init__(self, person=None, *args, **kwargs):
        if person is not None:
            self.base_fields["person"].initial = person
        super().__init__(*args, **kwargs)