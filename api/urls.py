from django.urls import path
from rest_framework.authtoken import views as token_view
from . import views

urlpatterns = [
    path('', views.taskList, name='task-list'),
    path('register/', views.Register.as_view(), name='register'),
    path('<int:pk>/', views.taskDetail, name='task-detail'),
    path('create/', views.taskCreate, name='task-create'),
    path('update/<int:pk>/', views.taskUpdate, name='task-update'),
    path('delete/<int:pk>/', views.taskDelete, name='task-delete'),
    path('api-token-auth/', token_view.obtain_auth_token),

]
