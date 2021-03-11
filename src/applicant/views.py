from django.views.generic import ListView
from django.views.generic.edit import UpdateView
from django.urls import reverse_lazy


from .forms import ApplicantModelForm
from .models import PropertyApplicationPhase

class ApplicantListView(ListView):
    model = PropertyApplicationPhase
    template_name='applicant/phase_list.html'

class ApplicantUpdateView(UpdateView):
    template_name = "applicant/phase_form.html"
    model = PropertyApplicationPhase
    form_class = ApplicantModelForm
    success_url = reverse_lazy("applicant_list")

    def get_form_kwargs(self, *args, **kwargs):
        kwargs = super().get_form_kwargs(*args, **kwargs)
        kwargs["object"] = self.object
        return kwargs

    def form_valid(self, form):
        instance = form.save(commit=False)
        instance.lead = self.object.lead
        instance.save()
        return super().form_valid(form)