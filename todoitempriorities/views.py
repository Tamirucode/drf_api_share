from rest_framework import generics, permissions

from drf_api_share.permissions import IsOwnerOrReadOnly
from .models import ToDoItemPriority
from .serializers import ToDoItemPrioritySerializer


class ToDoItemPriorityList(generics.ListCreateAPIView):
    """
    List ToDoItemPriority or create a ToDoItemPriority if logged in
    The perform_create method associates the ToDoItemPriority with the logged in user.
    """
    serializer_class = ToDoItemPrioritySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = ToDoItemPriority.objects.all()



    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ToDoItemPriorityDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve a todoitempriority and edit or delete it if you own it.
    """
    serializer_class = ToDoItemPrioritySerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = ToDoItemPriority.objects.all()