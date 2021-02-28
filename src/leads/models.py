from django.db import models
# from django.db.models.signals import post_save
from django.contrib.auth import get_user_model

User = get_user_model()

step_selectors = ["suspect", "introduction", "opportunity", "closing"]
step_choices = [(step, step) for step in step_selectors]


class Approach(models.Model):
    approach_date = models.DateField()
    approach_title = models.CharField(max_length=100)
    approach_description = models.TextField()

    def __str__(self):
        return self.approach_title

class Person(models.Model):
    lastName = models.CharField(max_length=100)
    firstName = models.CharField(max_length=100, blank=True, null=True)
    email = models.EmailField(max_length=100, blank=True, null=True)
    phone_number = models.CharField(max_length=50, blank=True, null=True)
    approach = models.ForeignKey(Approach, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return f'{self.lastName} {self.firstName}'


class Lead(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=20)
    description = models.TextField()
    # step = models.OneToOneField(Step, on_delete=models.CASCADE, blank=True, null=True)
    stage = models.CharField(max_length=20, choices=step_choices, default="suspect")
    person = models.ForeignKey(Person, on_delete=models.CASCADE, default=1)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


#postsave if stageNum==4, make instance of applicant and move on the stage of applicant
# def lead_makes_step_postsave(sender, instance, created, *args, **kwargs):
#     if created:
#         stepObj = Step()
#         stepObj.save()
#         instance.step = stepObj
#         instance.save()

# post_save.connect(lead_makes_step_postsave, sender=Lead)
