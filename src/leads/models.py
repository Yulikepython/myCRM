from django.db import models



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
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=20)
    description = models.TextField()
    stage = models.CharField(max_length=20)
    person = models.ForeignKey(Person, on_delete=models.CASCADE, default=1)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name