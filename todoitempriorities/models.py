from django.db import models
from django.contrib.auth.models import User
from todoitems.models import ToDoItem




class ToDoItemPriority(models.Model):
    """
     ToDoItemPriority model, related to 'todoitem' .
    'todoitem' is a ToDoItem instance.
    """
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    todoitem = models.ForeignKey(ToDoItem, on_delete=models.CASCADE)
    
    created_at = models.DateTimeField(auto_now_add=True)
    
    priority = models.CharField(choices=(('low','LOW'), ('medium','MEDIUM'), ('high','HIGH')), max_length=6 )
    
    class Meta:
        ordering = ['priority', 'created_at']
    
    
    def __str__(self):
        return self.priority