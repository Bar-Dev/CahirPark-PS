# Generated by Django 4.2.5 on 2023-09-26 13:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_shoesize_remove_product_shoe_sizes_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shoesize',
            name='size',
            field=models.DecimalField(decimal_places=1, max_digits=3, unique=True),
        ),
    ]