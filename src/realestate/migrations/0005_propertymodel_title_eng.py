# Generated by Django 3.1.6 on 2021-02-28 11:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('realestate', '0004_auto_20210228_1954'),
    ]

    operations = [
        migrations.AddField(
            model_name='propertymodel',
            name='title_eng',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
