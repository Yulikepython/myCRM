# Generated by Django 3.1.6 on 2021-02-18 15:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0006_auto_20210219_0021'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lead',
            name='category',
            field=models.CharField(max_length=20),
        ),
    ]
