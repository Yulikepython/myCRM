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
    title_eng = models.CharField(max_length=100, blank=True, null=True)
    prefecture = models.CharField(max_length=10, default="神奈川県")
    city = models.CharField(max_length=100, default="横浜市都筑区仲町台")
    city_eng = models.CharField(max_length=100, default="nakamachidai Tsuzuki-ku Yokohama-shi")
    branch_number = models.CharField(max_length=255, blank=True, null=True)
    closest_train = models.CharField(max_length=50, blank=True, null=True)
    closest_station = models.CharField(max_length=30, blank=True, null=True)
    walking_from_station = models.IntegerField(blank=True, null=True)
    date_of_construction = models.DateField(blank=True, null=True)
    bicycle_parking = models.BooleanField(default=False)
    parking = models.BooleanField(default=False)

    def __str__(self):
        return self.title

class Rent(models.Model):
    property_obj = models.ForeignKey(PropertyModel, on_delete=models.CASCADE)
    room = models.CharField(max_length=50, blank=True, null=True)
    available = models.BooleanField(default=True)
    floor = models.IntegerField(default=1)
    floor_plan = models.CharField(max_length=100, blank=True, null=True)
    footprint = models.IntegerField(blank=True, null=True, verbose_name="㎡数")
    rent = models.IntegerField(default=0)
    management_fee = models.IntegerField(default=0)
    common_fee = models.IntegerField(default=0)
    sec_deposit = models.IntegerField(default=0)
    key_money = models.IntegerField(default=0)
    gurantee_deposit = models.IntegerField(default=0)
    insurance_fee = models.IntegerField(default=18000)
    renewal_fee = models.IntegerField(default=0)
    zumen = models.FileField(upload_to="zumen", blank=True, null=True)

    def __str__(self):
        return f"{self.property_obj.title} {self.room}"

class PropertyImg(models.Model):
    rent = models.ForeignKey(Rent, on_delete=models.CASCADE)
    img_title = models.CharField(max_length=50)
    img_path = models.ImageField(upload_to="img/")

    def __str__(self):
        return self.img_title

