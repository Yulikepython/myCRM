from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth import get_user_model
from django.db.models import Q

User = get_user_model()

step_selectors = ["suspect", "introduction", "opportunity", "closing"]
step_choices = [(step, step) for step in step_selectors]

category_selectors = ["住居（賃貸）","住居（テナント）","売買","修繕","保険"]
category_choices = [(category, category) for category in category_selectors]

class LeadQuerySet(models.QuerySet):
    def search(self, query=None):
        qs = self
        if query is not None:
            or_lookup = (Q(name__icontains=query)|
                         Q(category__icontains=query)|
                         Q(description__icontains=query)
            )
            qs = qs.filter(or_lookup).distinct()
        return qs

class LeadManager(models.Manager):
    def get_queryset(self):
        return LeadQuerySet(self.model, using=self._db)
    
    def search(self, query=None):
        return self.get_queryset().search(query=query)

class PersonQuerySet(models.QuerySet):
    def search(self, query=None):
        qs = self
        if query is not None:
            or_lookup = (Q(lastName__icontains=query)|
                         Q(firstName__icontains=query)|
                         Q(email__icontains=query)|
                         Q(phone_number__icontains=query)
                         
            )
            qs = qs.filter(or_lookup).distinct()
        else:
            qs=None
        return qs

class PersonManager(models.Manager):
    def get_queryset(self):
        return PersonQuerySet(self.model, using=self._db)
    
    def search(self, query=None):
        return self.get_queryset().search(query=query)

class Person(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    lastName = models.CharField(max_length=100)
    firstName = models.CharField(max_length=100, blank=True, null=True)
    email = models.EmailField(max_length=100, blank=True, null=True)
    phone_number = models.CharField(max_length=50, blank=True, null=True)

    objects = PersonManager()

    def __str__(self):
        return f'{self.lastName}'


class Lead(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1, verbose_name="ユーザー")
    name = models.CharField(max_length=100, verbose_name="リード名")
    category = models.CharField(max_length=20, choices=category_choices, verbose_name="カテゴリー", default=category_selectors[0])
    description = models.TextField(verbose_name="メモ", blank=True, null=True)
    stage = models.CharField(max_length=20, choices=step_choices, default="suspect", verbose_name="ステージ")
    person = models.ForeignKey(Person, on_delete=models.CASCADE, default=1, verbose_name="担当者名")
    created_at = models.DateTimeField(auto_now_add=True)

    objects = LeadManager()

    def __str__(self):
        return self.name

class Approach(models.Model):
    lead = models.ForeignKey(Lead, on_delete=models.CASCADE, default=1)
    approach_date = models.DateField()
    approach_title = models.CharField(max_length=100)
    approach_description = models.TextField()

    def __str__(self):
        return self.approach_title


def person_post_save_make_lead(sender, instance, created, **kwargs):
    if created:
        lead_obj = Lead(name=instance.lastName, person=instance)
        lead_obj.save()

post_save.connect(person_post_save_make_lead, sender=Person)
