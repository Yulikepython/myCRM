from django.db import models
import os

def zumen_create_path(instance, filename):
    return os.path.join(
        instance.id,
        filename
    )

def img_create_path(instance, filename):
    return os.path.join(
        instance.rent.id,
        filename
    )

class PropertyModel(models.Model):
    title = models.CharField(max_length=100)
    prefecture = models.CharField(max_length=10, default="神奈川県")
    city = models.CharField(max_length=100, default="横浜市都筑区")
    address = models.CharField(max_length=255, blank=True, null=True)
    bicycle_parking = models.BooleanField(default=False)
    parking = models.BooleanField(default=False)

    def __str__(self):
        return self.title

class Rent(models.Model):
    property_obj = models.ForeignKey(PropertyModel, on_delete=models.CASCADE)
    room = models.CharField(max_length=50)
    payment = models.IntegerField(default=0)
    maintenance_fee = models.IntegerField(default=0)
    deposit = models.IntegerField(default=0)
    key_money = models.IntegerField(default=0)
    zumen = models.FileField(upload_to="zumen")

    def __str__(self):
        return f"{self.property_obj.title} {self.room}"

class PropertyImg(models.Model):
    rent = models.ForeignKey(Rent, on_delete=models.CASCADE)
    img_title = models.CharField(max_length=50)
    img_path = models.ImageField(upload_to="img/")

    def __str__(self):
        return self.img_title

