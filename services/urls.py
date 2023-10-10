from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='services'),
    path('private-lessons/', views.private_lessons, name='private_lessons'),
]
