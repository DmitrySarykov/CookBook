from django.contrib import admin
from django.urls import path
from .views import *
urlpatterns = [
    path('', index, name='home'),
    path("category/<pk>", index, name='category'),
    path("recipe/<pk>", index, name='recipe'),
    path("api/categories/", CategoryListAPI.as_view(), name="api_categories"),
    path("api/category/<pk>", CategoryDetailAPI.as_view(), name="api_category"),
    path("api/category/<pk>/recipes", RecipeByCategoryListAPI.as_view(), name="api_recipes_category"),
    path("api/recipes/", RecipeListAPI.as_view(), name="api_recipes"),
    path("api/recipe/<pk>", RecipeDetailAPI.as_view(), name="api_recipe"),
]