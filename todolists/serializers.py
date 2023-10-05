from rest_framework import serializers
from .models import ToDoList


class ToDoListSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = ToDoList
        fields = [
            'id', 'owner','title', 'created_at', 
        ]

