from django.shortcuts import render
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView

from .models import Lead

class LeadListView(ListView):
    template_name = "leads/leads_list.html"
    model = Lead
