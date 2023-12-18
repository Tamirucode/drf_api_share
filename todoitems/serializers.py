from rest_framework import serializers
from .models import ToDoItem


class ToDoItemSerializer(serializers.ModelSerializer):
    """
    Serializer for the ToDoItem model
    
    """
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    profile_image = serializers.ReadOnlyField(source='owner.profile.image.url')

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    class Meta:
        model = ToDoItem
        fields = [
            'id', 'owner', 'is_owner', 'profile_id', 'profile_image',
            'todolist', 'title', 'description', 'due_date', 'completed',
        ]


class ToDoItemDetailSerializer(ToDoItemSerializer):
    """
    Serializer for the ToDoItem model used in Detail view
    ToDoList is a read only field so that we dont have to set it on each update
    """
    todolist = serializers.ReadOnlyField(source='todolist.id')


