# Generated by Django 3.1.6 on 2021-03-02 17:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0015_person_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='person',
            name='approach',
        ),
        migrations.AddField(
            model_name='approach',
            name='lead',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='leads.lead'),
        ),
    ]
