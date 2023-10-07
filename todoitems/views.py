from rest_framework.views import APIView
from rest_framework.response import Response
from .models import ToDoItem

class ToDoItemList(APIView):
    def get(self, request):
        todoitems= ToDoItem.objects.all()
        return Response(todoitems)



