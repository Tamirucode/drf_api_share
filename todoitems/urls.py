from django.urls import path
from todoitems import views
urlpatterns = [
    path('todoitems/', views.ToDoItemList.as_view()),
    path('todoitems/<int:pk>/', views.ToDoItemDetail.as_view())
]

