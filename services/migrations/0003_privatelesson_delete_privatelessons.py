# Generated by Django 4.2.5 on 2023-09-28 10:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0002_remove_privatelessons_price_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='PrivateLesson',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('time_slot', models.CharField(max_length=20)),
                ('booked', models.BooleanField(default=False)),
            ],
        ),
        migrations.DeleteModel(
            name='PrivateLessons',
        ),
    ]
