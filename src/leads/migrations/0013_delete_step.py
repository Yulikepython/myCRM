# Generated by Django 3.1.6 on 2021-02-28 15:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0012_remove_lead_step'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Step',
        ),
    ]
