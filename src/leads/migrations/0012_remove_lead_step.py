# Generated by Django 3.1.6 on 2021-02-28 15:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0011_lead_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='lead',
            name='step',
        ),
    ]