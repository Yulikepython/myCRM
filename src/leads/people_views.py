from django.shortcuts import render
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy

from .models import Person
from .people_forms import PersonForm

class PersonCreateView(CreateView):
    template_name="people/people_form.html"
    model = Person
    form_class=PersonForm

    def get_success_url(self):
        print(self.kwargs)
        return reverse_lazy("lead_list")