from rest_framework.views import APIView
from rest_framework.response import Response
from .models import ToDoList
from .serializers import ToDoListSerializer


class ToDoListList(APIView):
    def get(self, request):
        todolists = ToDoList.objects.all()
        serializer = ToDoListSerializer(todolists, many= True)
        return Response(serializer.data)
    
        
