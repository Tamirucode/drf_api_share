from rest_framework import generics, permissions,filters
from django_filters.rest_framework import DjangoFilterBackend
from drf_api_share.permissions import IsOwnerOrReadOnly
from .models import ToDoItem
from .serializers import ToDoItemSerializer, ToDoItemDetailSerializer
from rest_framework import serializers

class ToDoItemList(generics.ListCreateAPIView):
    """
    List todoitem or create a todoitem if logged in.
    """
    serializer_class = ToDoItemSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = ToDoItem.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    filter_backends = [
        
        filters.SearchFilter,
        DjangoFilterBackend,
    ]
    filterset_fields=[
        
       'owner__todoitem',
       'owner__profile',
    ]
    search_fields = [
        'owner__username',
        'title',
    ]

class ToDoItemDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve a Todoitem, or update or delete it by id if you own it.
    """
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = ToDoItemDetailSerializer
    due_date = serializers.DateTimeField()
    queryset = ToDoItem.objects.all()


