# Generated by Django 4.0.6 on 2022-07-11 16:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cookbook', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='ingredients',
            field=models.TextField(default='', null=True, verbose_name='Ингредиенты'),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='recipe',
            field=models.TextField(default='', null=True, verbose_name='Рецепт'),
        ),
    ]
