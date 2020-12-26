from django.urls import path
from . import views

urlpatterns = [
    path('', views.taskList, name='task-list'),
    path('<int:pk>/', views.taskDetail, name='task-detail'),
    path('create/', views.taskCreate, name='task-create'),
    path('update/<int:pk>/', views.taskUpdate, name='task-update'),
    path('delete/<int:pk>/', views.taskDelete, name='task-delete'),
]
