from django.shortcuts import render
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin

from .models import Lead, Person
from .forms import LeadForm

class LeadListView(LoginRequiredMixin, ListView):
    template_name = "leads/leads_list.html"
    model = Lead

    def get_queryset(self):
        try:
            q = self.request.GET["search"]
        except:
            q = None
        return Lead.objects.search(query=q).order_by("-created_at")

class LeadDetailView(DetailView):
    template_name = "leads/leads_detail.html"
    model = Lead

class LeadUpdateView(UpdateView):
    template_name = "leads/leads_form.html"
    model = Lead
    form_class = LeadForm
    success_url = reverse_lazy("lead_list")

    def get_context_data(self, *args, **kwargs):
        ctx = super().get_context_data(*args, **kwargs)
        ctx["update"] = True
        return ctx

class LeadCreateView(CreateView):
    template_name = "leads/leads_form.html"
    model = Lead
    form_class = LeadForm
    success_url = reverse_lazy("lead_list")

    def get_form_kwargs(self, *args, **kwargs):
        kwgs = super().get_form_kwargs(*args, **kwargs)
        get_request = self.request.GET
        if 'person' in get_request.keys():
            person_obj = Person.objects.get(pk=int(get_request["person"]))
            kwgs['person'] = person_obj
        return kwgs
        
    def get_context_data(self, *args, **kwargs):
        ctx = super().get_context_data(*args, **kwargs)
        ctx["update"] = False
        return ctx
