from django.contrib import admin

from .models import PropertyModel, PropertyImg, Rent

admin.site.register(PropertyModel)
admin.site.register(Rent)
admin.site.register(PropertyImg)
