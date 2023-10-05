from rest_framework.views import APIView
from rest_framework.response import Response
from .models import ToDoList

class ToDoListList(APIView):
    def get(self, request):
        todolists = ToDoList.objects.all()
        return Response(todolists)

