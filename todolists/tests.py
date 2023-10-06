from django.contrib.auth.models import User
from .models import ToDoList
from rest_framework import status
from rest_framework.test import APITestCase


class ToDoListListViewTests(APITestCase):
    def setUp(self):
        User.objects.create_user(username='t', password='1234b')

    def test_can_list_todolist(self):
        t = User.objects.get(username='t')
        ToDoList.objects.create(owner=t, title='a title')
        response = self.client.get('/todolists/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        print(response.data)
        print(len(response.data))
    
    def test_logged_in_user_can_create_todolist(self):
        self.client.login(username='t', password='1234b')
        response = self.client.post('/todolists/', {'title': 'a title'})
        count = ToDoList.objects.count()
        self.assertEqual(count, 1)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)    

    def test_user_not_logged_in_cant_create_todolist(self):
        response = self.client.post('/todolists/', {'title': 'a title'})
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)