# Generated by Django 3.1.6 on 2021-03-11 12:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('applicant', '0003_remove_propertyapplicationphase_all_done'),
    ]

    operations = [
        migrations.AlterField(
            model_name='propertyapplicationphase',
            name='memo',
            field=models.TextField(blank=True, null=True, verbose_name='メモ'),
        ),
    ]
