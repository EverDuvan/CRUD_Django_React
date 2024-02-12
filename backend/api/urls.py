from django.shortcuts import render
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('get/', views.getBlogs, name='getBlogs'),
    path('post/', views.postBlog, name='postBlog'),
    path('put/<int:pk>/', views.putBlog, name='putBlog'),
    path('delete/<int:pk>/', views.deleteBlog, name='deleteBlog'),
]
