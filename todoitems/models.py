from django.db import models
from django.contrib.auth.models import User
from todolists.models import ToDoList
from django.utils import timezone

def one_week_hence():
    return timezone.now() + timezone.timedelta(days=7)



class ToDoItem(models.Model):
    """
    ToDoItem model, related to 'todolist' and 'user'.
    'todolist' is  a ToDoList instance, 'user' is  a User instance.
    """
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    todolist = models.ForeignKey(ToDoList, on_delete=models.CASCADE)
    title = models.CharField(max_length=200, unique=True)
    description = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    due_date = models.DateTimeField(default=one_week_hence)
    priority = models.IntegerField(choices=((1, 'Low'),(2, 'Medium'), (3, 'High') ))
    completed = models.BooleanField(default = False)
    
    
    class Meta:
        ordering = ['due_date']
    
    
    def __str__(self):
        return f"{self.title}: due {self.due_date}"