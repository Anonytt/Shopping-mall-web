# Generated by Django 3.2.8 on 2021-11-27 06:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0002_player_sex'),
    ]

    operations = [
        migrations.AddField(
            model_name='player',
            name='love',
            field=models.CharField(blank=True, max_length=256),
        ),
    ]
