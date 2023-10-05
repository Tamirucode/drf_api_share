from django.db import models
from django.contrib.auth.models import User
class ToDoList(models.Model):
    """
    ToDoList model, related to 'user', i.e. a User instance.
    
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
    def __str__(self):
        return self.title
    