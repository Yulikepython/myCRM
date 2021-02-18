# Generated by Django 3.1.6 on 2021-02-18 14:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0004_lead_person'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lead',
            name='person',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='leads.person'),
        ),
    ]