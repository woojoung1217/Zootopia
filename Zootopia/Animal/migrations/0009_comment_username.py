# Generated by Django 3.2.6 on 2021-09-28 13:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('animal', '0008_comment'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='username',
            field=models.CharField(max_length=20, null=True),
        ),
    ]