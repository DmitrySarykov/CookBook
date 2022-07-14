from urllib import request
from django.shortcuts import render
from django.urls import reverse_lazy
from django.views import View
from django.views.generic.base import TemplateView
from django.views.generic.edit import CreateView,UpdateView,DeleteView
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from cookbook.models import *
from cookbook.serializers import *
from rest_framework import generics

def index(request, **kwargs):
    return render(request, "index.html")

# API
class CategoryListAPI(generics.ListAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

class CategoryDetailAPI(generics.RetrieveAPIView):
    serializer_class = CategorySerializer
    
    def get_object(self):
        obj = Category.objects.get(pk = self.kwargs['pk'])
        return obj
    
class RecipeListAPI(generics.ListAPIView):
    serializer_class = RecipeSerializer
    queryset = Recipe.objects.all()

class RecipeByCategoryListAPI(generics.ListAPIView):
    serializer_class = RecipeSerializer
    
    def get_queryset(self):
        queryset = Recipe.objects.filter(category = self.kwargs['pk'])
        return queryset

class RecipeDetailAPI(generics.RetrieveAPIView):
    serializer_class = RecipeSerializer

    def get_object(self):
        obj = Recipe.objects.get(pk = self.kwargs['pk'])
        return obj