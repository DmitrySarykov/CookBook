from django.db import models
from datetime import datetime

# Категория
class Category(models.Model):
    date = models.DateTimeField(default=datetime.now, verbose_name='Дата')
    title = models.CharField(max_length=15000, verbose_name='Название')
    image = models.ImageField(upload_to="categories/", verbose_name='Картинка', null=True,)

    def __str__(self):
        return f'{self.title}'

    class Meta: 
        ordering = ('-title',)
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'

# Рецепт
class Recipe(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name="Категория", null=True,)
    date = models.DateTimeField(default=datetime.now, verbose_name='Дата')
    title = models.CharField(max_length=15000, verbose_name='Название')
    image = models.ImageField(upload_to="recipes/", verbose_name='Картинка', null=True,)
    recipe = models.TextField(verbose_name='Рецепт', null=True, default="")
    ingredients = models.TextField(verbose_name='Ингредиенты', null=True, default="")

    def __str__(self):
        return f'{self.title}'

    class Meta: 
        ordering = ('-title',)
        verbose_name = 'Рецепт'
        verbose_name_plural = 'Рецепты'