from django.shortcuts import render
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy

from .models import Person, Lead
from .people_forms import PersonForm

class PersonCreateView(CreateView):
    template_name="people/people_form.html"
    model = Person
    form_class=PersonForm

    def get_success_url(self):
        obj = self.object
        leads = Lead.objects.filter(person=obj)
        lead_obj = leads.last()
        return reverse_lazy("lead_update", kwargs={'pk': lead_obj.pk})


class PeopleSelectView(ListView):
    template_name="people/people_select.html"
    model = Person

    def get_queryset(self, query=None, *args, **kwargs):
        data = self.request.GET
        if data:
            if "people-search" in data.keys():
                query = data["people-search"]
        return Person.objects.search(query=query)
