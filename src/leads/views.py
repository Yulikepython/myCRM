from django.shortcuts import render
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin

from .models import Lead
from .forms import LeadForm

class LeadListView(LoginRequiredMixin, ListView):
    template_name = "leads/leads_list.html"
    model = Lead

class LeadDetailView(DetailView):
    template_name = "leads/leads_detail.html"
    model = Lead

class LeadUpdateView(UpdateView):
    template_name = "leads/leads_form.html"
    model = Lead
    form_class = LeadForm
    success_url = reverse_lazy("lead_list")

class LeadCreateView(CreateView):
    template_name = "leads/leads_form.html"
    model = Lead
    form_class = LeadForm
    success_url = reverse_lazy("lead_list")
