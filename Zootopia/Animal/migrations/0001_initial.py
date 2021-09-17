# Generated by Django 3.2.6 on 2021-09-14 16:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('species', models.CharField(max_length=20)),
                ('body', models.TextField(max_length=100)),
                ('hash_tag', models.CharField(max_length=30)),
                ('image', models.ImageField(blank=True, null=True, upload_to='post/')),
                ('time', models.DateTimeField(auto_now_add=True)),
                ('latitude', models.FloatField(default=0.0)),
                ('longitude', models.FloatField(default=0.0)),
            ],
        ),
    ]
