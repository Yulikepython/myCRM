from django.db import models
from django.db.models.signals import post_save



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

class Step(models.Model):
    suspect = models.BooleanField(default=True, verbose_name="見込み")
    introduction = models.BooleanField(default=False, verbose_name="物件紹介")
    opportunity = models.BooleanField(default=False, verbose_name="商談")
    closing = models.BooleanField(default=False, verbose_name="クロージング")
    onHold = models.BooleanField(default=False, verbose_name="申込み")

    def __str__(self):
        return str(self.lead)

class Lead(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=20)
    description = models.TextField()
    step = models.OneToOneField(Step, on_delete=models.CASCADE, blank=True, null=True)
    person = models.ForeignKey(Person, on_delete=models.CASCADE, default=1)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


#postsave if stageNum==4, make instance of applicant and move on the stage of applicant
def lead_makes_step_postsave(sender, instance, created, *args, **kwargs):
    if created:
        stepObj = Step()
        stepObj.save()
        instance.step = stepObj
        instance.save()

post_save.connect(lead_makes_step_postsave, sender=Lead)
