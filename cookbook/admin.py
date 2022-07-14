from django.contrib import admin
from .models import *

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title',) 


@admin.register(Recipe)
class RecipeAdmin(admin.ModelAdmin):
    list_display = ('category','title','recipe') 