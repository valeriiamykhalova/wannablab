# Generated by Django 2.2.1 on 2019-06-03 11:55

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('wannablab', '0005_auto_20190603_1338'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='time',
            field=models.TimeField(default=datetime.datetime(2019, 6, 3, 11, 55, 47, 706245, tzinfo=utc), verbose_name='Time'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='event',
            name='date',
            field=models.DateField(verbose_name='Date'),
        ),
    ]