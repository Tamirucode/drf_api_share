from django.urls import path
from todolists import views
urlpatterns = [
    path('todolists/', views.ToDoListList.as_view()),
    path('todolists/<int:pk>/', views.ToDoListDetail.as_view()),
]

