from rest_framework import generics, permissions
from drf_api_share.permissions import IsOwnerOrReadOnly
from .models import ToDoItem
from .serializers import ToDoItemSerializer, ToDoItemDetailSerializer


class ToDoItemList(generics.ListCreateAPIView):
    """
    List todoitem or create a todoitem if logged in.
    """
    serializer_class = ToDoItemSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = ToDoItem.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ToDoItemDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve a Todoitem, or update or delete it by id if you own it.
    """
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = ToDoItemDetailSerializer
    queryset = ToDoItem.objects.all()


