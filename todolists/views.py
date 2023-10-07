from rest_framework import generics, permissions, filters 
from drf_api_share.permissions import IsOwnerOrReadOnly
from .models import ToDoList
from .serializers import ToDoListSerializer


class ToDoListList(generics.ListCreateAPIView):
    """
    List todolist or create a post if logged in
    The perform_create method associates the todolist with the logged in user.
    """
    serializer_class = ToDoListSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = ToDoList.objects.all()
    
    filter_backends = [
        
        filters.SearchFilter,
    ]
    search_fields = [
        'owner__username',
        'title',
    ]
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ToDoListDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve a todolist and edit or delete it if you own it.
    """
    serializer_class = ToDoListSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = ToDoList.objects.all()