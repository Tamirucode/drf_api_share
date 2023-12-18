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

