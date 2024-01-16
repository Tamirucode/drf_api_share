from rest_framework import serializers
from .models import ToDoItemPriority


class ToDoItemPrioritySerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    profile_image = serializers.ReadOnlyField(source='owner.profile.image.url')
    

    
    
    class Meta:
        model = ToDoItemPriority
        fields = [
            'id', 'owner', 'profile_id',
            'profile_image', 'created_at','todoitem', 'priority',
        ]

class ToDoItemPriorityDetailSerializer(ToDoItemPrioritySerializer):
    """
    Serializer for the ToDoItemPriority model used in Detail view
    ToDoItem is a read only field so that we dont have to set it on each update
    """
    todoitem = serializers.ReadOnlyField(source='todoitem.id')