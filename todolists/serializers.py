from rest_framework import serializers
from .models import ToDoList


class ToDoListSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    profile_image = serializers.ReadOnlyField(source='owner.profile.image.url')
    

    
    
    class Meta:
        model = ToDoList
        fields = [
            'id', 'owner', 'profile_id',
            'profile_image', 'created_at','title'
        ]

