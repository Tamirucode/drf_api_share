from django.urls import path
from todoitempriorities import views

urlpatterns = [
    path('todoitempriorities/', views.ToDoItemPriorityList.as_view()),
    path('todoitempriorities/<int:pk>/', views.ToDoItemPriorityDetail.as_view()),

]