from django.urls import path
from todoitemPriorities import views

urlpatterns = [
    path('todoitemPriorities/', views.ToDoItemPriorityList.as_view()),