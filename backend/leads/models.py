from django.db import models

class Lead(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=5)
    description = models.TextField()
    stage = models.CharField(max_length=5)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
