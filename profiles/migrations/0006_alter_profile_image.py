# Generated by Django 3.2.21 on 2023-10-16 13:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0005_profile_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='image',
            field=models.ImageField(blank=True, default='images/default_profile_pcfhix.jpg', upload_to='images/'),
        ),
    ]
