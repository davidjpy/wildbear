# Generated by Django 4.1 on 2022-08-14 10:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='brand',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='feature',
            field=models.TextField(blank=True, null=True),
        ),
    ]
