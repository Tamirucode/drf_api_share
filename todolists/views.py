from django.http import Http404
from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import ToDoList
from .serializers import ToDoListSerializer
from drf_api_share.permissions import IsOwnerOrReadOnly


class ToDoListList(APIView):
    serializer_class = ToDoListSerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]
    def get(self, request):
        todolists = ToDoList.objects.all()
        serializer = ToDoListSerializer(todolists, many= True)
        return Response(serializer.data)
    
        
    def post(self, request):
        serializer = ToDoListSerializer(
            data=request.data, context={'request': request}
        )
        if serializer.is_valid():
            serializer.save(owner=request.user)
            return Response(
                serializer.data, status=status.HTTP_201_CREATED
            )
        return Response(
            serializer.errors, status=status.HTTP_400_BAD_REQUEST
      
        )

class ToDoListDetail(APIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = ToDoListSerializer

    def get_object(self, pk):
        try:
            todolist = ToDoList.objects.get(pk=pk)
            self.check_object_permissions(self.request, todolist)
            return todolist
        except ToDoList.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        todolist = self.get_object(pk)
        serializer = ToDoListSerializer(
            todolist, context={'request': request}
        )
        return Response(serializer.data)

    def put(self, request, pk):
        todolist = self.get_object(pk)
        serializer = ToDoListSerializer(
            todolist, data=request.data, context={'request': request}
            )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(
                serializer.errors, status=status.HTTP_400_BAD_REQUEST
                )

    def delete(self, request, pk):
        todolist = self.get_object(pk)
        todolist.delete()
        return Response(
            status=status.HTTP_204_NO_CONTENT
        )