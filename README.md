
## Overview

In this project, I build a To-Do-List application using Django and React. 

For this application, React serves as the frontend, or client-side framework, handling the user interface and getting and setting data via 

requests to the Django backend, which is an API built using the Django REST framework (DRF).

With django-to-do-list, user can create one todolist and multiple todoitem with due date. Users have option of modifying the todolist and todoitem.

In this API I used four modle namely profile,  todolist, todoitem and todoitempriority

## Below: Models screenshot

![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/1ac7f845-d7b9-4097-85a9-9def26589bc8)
![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/649a046c-017d-46e9-bb9c-a4d0c1b4d941)




- The code snippet above describes six properties on the profile model;

   three properties on the Todolist model; eight properties on the Todoitem model , and four properties on the Todoitempriority model;.

   Once I've set up a database and the initial user is created and ready to go

### Serializers

   - First up I defined some serializers for my data representations. I created profile, todolist and todoitem/serializers.py file  to convert

      model instances to JSON so that the frontend can work with the received data.

### Views

   - I wrote views to model instances that receive a web request and return a web response. I implemented generic class-based list and detail

     views of python objects.

### Urls

   - I wired up the API URLs, helps django url pattern that matches the requested url

   - I included  login and logout views for use with the browsable API.

### Pagination

   - It allows how many profiles, todolists  and todoitems object per page are returned.

## Below: A live todolist app screenshot after depolyment

![ppp5 api  screen shot](https://github.com/Tamirucode/drf_api_share/assets/116649197/2ce2917f-0cd9-409e-b3a5-a4c1995c1cc9)

## Testing my API  
 
 - using endpoints

## Below: A profile retrieve by id endpoint

![profile retrieve by id](https://github.com/Tamirucode/drf_api_share/assets/116649197/2eccbeb4-3cee-4e8b-87da-1a9beeb4c36f)
![profile retrieve by id part 2](https://github.com/Tamirucode/drf_api_share/assets/116649197/6535b114-8e5d-49d2-849c-4271b1995ab4)

## Below: A profile update

![profile update](https://github.com/Tamirucode/drf_api_share/assets/116649197/b7a8d081-cc71-40f5-99dd-38fa2a1ddab0)
![profile update part 2](https://github.com/Tamirucode/drf_api_share/assets/116649197/157eb0e9-d67b-4c93-a60a-980362fb068a)

## Below: Filter profile by owner endpoint

![filter profile by owner](https://github.com/Tamirucode/drf_api_share/assets/116649197/5c4214e0-fee2-4337-bae0-a18ff0f6c42e)
![filter profile by owner part 2](https://github.com/Tamirucode/drf_api_share/assets/116649197/d02800fe-903c-4b72-9877-f3ed02e49829)


## Below: Created todolist :- HTTP Response 201

![create to do list](https://github.com/Tamirucode/drf_api_share/assets/116649197/978921aa-d1c3-4cd4-8e4b-e65d7b4547c1)

## Below: Delete to do list

![delete todolistdetail](https://github.com/Tamirucode/drf_api_share/assets/116649197/db521fb5-82c3-4a02-a5e0-2399ef307c25)

## Below: After delete confirm  HTTP Response 204 no content

![after delete 204 no content](https://github.com/Tamirucode/drf_api_share/assets/116649197/dd08c7b5-98a8-4601-b38a-c56710c1697b)

## Below: Create todolist without filling the form confirm: HTTP Response 400

![test  create  todolist without filling the form  ](https://github.com/Tamirucode/drf_api_share/assets/116649197/a061161f-e601-482c-8505-1b2fd7831365)

## Below: Test todolist duplicate :- HTTP Response 400

![test todolist duplicte](https://github.com/Tamirucode/drf_api_share/assets/116649197/4f92f344-da17-45ea-a219-132466b2b5ba)

## Below: Test create todolist without filling the form :-HTTP Response 400

![test  create  todolist without filling the form  ](https://github.com/Tamirucode/drf_api_share/assets/116649197/573a00db-7a35-4ef7-929e-684b9632dc5d)

## Below: update blank title :-HTTP Response 404

![update blank title, 404 page](https://github.com/Tamirucode/drf_api_share/assets/116649197/6feb7ed1-1af7-46b6-8e42-0df011da2206)

## Below: Search todolist by title name

![search by todolist title name](https://github.com/Tamirucode/drf_api_share/assets/116649197/a6a00574-f8ef-425b-baf4-8b247b87842d)
![search by todolist title name section 2](https://github.com/Tamirucode/drf_api_share/assets/116649197/35cfd370-65ec-4754-be3d-dab93aaac0f9)

## Below: Filter todolist by owner and specific todolist

![todolist filter by owner and specific to do list](https://github.com/Tamirucode/drf_api_share/assets/116649197/19747be1-5dc0-4a68-adeb-28e87e2335fe)

## Below: Retrieve a todolistdetail by id endpoint

![retrieve a todolist detail by id](https://github.com/Tamirucode/drf_api_share/assets/116649197/1d4ec8e4-182e-4281-a7c1-0da1c652c233)

## Below: Update todolistdetail

![update todolistdetail ](https://github.com/Tamirucode/drf_api_share/assets/116649197/b3cd33a0-09ea-4395-b3e2-3abb6b82a15f)

## Below: Todo list detail test user can't update another user todo list  

![todo list detail test user can't update another user todo list](https://github.com/Tamirucode/drf_api_share/assets/116649197/919b5043-53ee-494b-b040-b88428752bed)

## Below: Todolist detail test retrieve todolist by id 

![todolist detail test retrieve todolist by id](https://github.com/Tamirucode/drf_api_share/assets/116649197/b0cb2371-a677-4a09-be2f-7c783b2b495f)

## Below: Todolist detail test user update list by their own 

![todolist detail test user update list by their own ](https://github.com/Tamirucode/drf_api_share/assets/116649197/15ee2657-8e57-4818-b157-757e2aca3e9f)

## Below: Todolist view test user can create post

![todolist view test user can create post](https://github.com/Tamirucode/drf_api_share/assets/116649197/3737efd6-c115-485b-bd7c-085c8d8cc1dc)

## Below: Todolist view test user not logged in can't create todolist

![todolist view test user not logged in cant create todolist](https://github.com/Tamirucode/drf_api_share/assets/116649197/10750fa8-49cd-4375-9039-a1f617419d9a)

## Below: Created todoitem list 

![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/3dd698f6-95e1-4d58-acb5-2fcf22098c33)
![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/8b950364-bc21-4d19-9f2e-b9be6ff28e1f)


## Below: Delete todoitem 

![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/9e35a075-0c03-4a0a-983b-9cf431ff01c4)

## Below: After delete show no content

![after  delete  show  no content](https://github.com/Tamirucode/drf_api_share/assets/116649197/355aea23-f2c5-4d07-a18c-e1cf51c244a1)

## Below: After  delete check todoitem by id confirm :-HTTP Response  404

![after  delete check todo item by id show  404](https://github.com/Tamirucode/drf_api_share/assets/116649197/33ee4073-da96-4e75-bda5-3e2bd23ad8ea)

## Below: As loggedin user retrive todoitem by id

![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/4d27329e-8f6d-4a9d-8b83-e83645be04a7)
![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/18b08a5f-f4b6-4a9f-96cf-49671bae1350)



## Below: Update todoitem by id

![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/f33de10a-57d4-4d8c-a4a8-0a8124d2e5ca)
![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/b16a3b8d-c5fc-47ff-b3c5-2def8f2e1947)


## Below: Todoitem list view 

![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/eac9a0fe-68aa-462a-8d87-d89d648fe5fc)
![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/5cb655e4-06b8-4584-b1cf-2ff80d5d9399)
![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/e7224c29-481a-49f3-b4eb-dc1652527072)
![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/4c9e66c9-a92e-41e8-a080-d7222204a06e)
![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/174cbe23-e72b-4629-b72a-0bd507c04a3d)


## Below: Search todoitem by title name

![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/ff11146a-d3ca-4772-a9a9-f346041435b8)
![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/5f825cee-3e3f-4608-882b-3122971b7b66)


## Below: Filter specific user todoitem

![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/1a755123-476d-48ad-a22b-9da144056e90)
![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/836cd095-923a-4ca2-aee0-539d6a9cf189)



## Below: create todoitem with blank title :-:-HTTP Response  400 

![create to do list item not tobe blank title](https://github.com/Tamirucode/drf_api_share/assets/116649197/d296055b-3edb-458f-ac62-7f90a6a4d668)

## Below: Created todoitempriority 

![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/d477d013-289d-4205-ba11-90f468c8c31e)
![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/319baffa-54e6-49bf-b041-f6467ab4ec6f)

## Below: Update todoitempriority by id

![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/2fa85a6d-1e1a-4115-a0b8-8f81077368d4)
![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/a3a1caf9-dd1e-466e-9f44-5d7b63f74c3f)

## Below: Delete todoitempriority 

![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/ef31ce75-6655-4151-a008-b5cebc12c58a)


## Below: After delete show no content

![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/1259854d-ea49-4a6c-9563-cabfce70f537)

## Below: After  delete check todoitempriority by id confirm :-HTTP Response  404

![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/6f9c21cb-b0ed-47aa-81ef-f389b4a5e794)


## Below: Todoitempriority list view 

![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/23754194-b7e8-4456-9a5c-a4b456a8dd85)
![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/f39ed04a-75a0-41ce-b8e3-274172f55ae5)




### After Deployment testing API endpoint by profiles :- it works as expected

![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/7dea63cb-3edd-40f4-ae08-ccef993dc757)

### After Deployment testing API endpoint by todolists :- it works as expected

![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/d3f3caa7-06dc-4a61-892d-0fc72f3dc081)

### After Deployment testing API endpoint by todoitems :- it works as expected

![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/4676a2cf-26a4-4136-b211-e0949b213519)

### After Deployment testing API endpoint by todoitempriorities :- it works as expected

![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/c292b358-00cc-4b37-85c3-0cdcb09cf8b5)

## Testing

- PEP8			

  	- No errors were returned from PEP8online.com

## Technologies

  - Django REST Framework

## Deployment

 - Here are the steps:-

1. Postgres database  was created in Elephant SQL using  my project name:- drf_api_share

2. A Heroku app was created in Heroku.  Mine is called drf-todo2023

3. In the Heroku settings tab I clicked on "Reveal Config Vars" and copied, and pasted Postgres link from beside the DATABASE_URL variable

4. In Gitpod dev environment, I have noticed for the env.py file that was automatically generated from the CI template at the beginning. It stores environment variables.

5. In the terminal, install dj_database_url and psycopg2

6. In the settings.py file, import dJ_database_url underneath import for os

7. I added a secret key in the env.py file and  into the Heroku Settings vars as well.

8. I also added DISABLE_COLLECTSTATIC = 1

9. I added cloudinary url in the env.py file and into the Heroku Settings vars as well

10. update the Databases section, I commented out the present code for databaes and  I added an if statement saying that outside the development environment the envirment variables must be used from env.py , includingthe secret key.

11. In my env.py file, added a new environment variable  with the key set to Database_url, and the value to my elphantSQL database_url

12. In env.py file, I temporarily  comment out the Dev environment variable so that my IDE can connect to external database

13. I migrated these changes in Gitpod terminal using Python3 manage.py make migrations and  python3 manage.py migrate

14. In my IDE workspace, install gunicorn

15. I created a Procfile and added inside two commands
	release:  python manage.py makemigrations
		 python manage.py migrate
16. I added the Heroku name followed by herokuapp.com to the ALLOWED_HOSTS variable name in setting.py followed by a comma and 'localhost' ( to allow running in the IDE)

17. I added Corsheaders to installed apps in the setting.py file

18. I added Corsheaders middleware to the top of the MIDDLEWARE in setting.py file

19. I setted the ALLOWED origin for the networks request made to the server with the following code:
	
      
![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/3d14c74d-872d-4e94-a800-25756e17bb03)

20. still setting.py file i added the code below in the above  code which enable sending cookies in cross-origin
     requests so that users can get authentication functionality
	    
![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/915b3103-de6d-484c-b68e-3a28274eedad)

21. I setted the JWT_AUTH_SAMESITE attribute to 'None' in the setting .py file .It allows  us front end app and the API deployed to different platforms.

22. I  removed the value for SECRET_KEY  in setting .py file and replace with the following code to use an environment variable instead
	SECRET_KEY = os.getenv('SECRET_KEY')

23. I setted a NEW value for  SECRET_KEY environment variable in env.py

24. Debug=False in setting .py file

25. I commented DEV back in env.py file

26. I did git add, git commit and git push.
  
27. Log in to heroku.com and open the dashboard drf-todo2023 application

30. Select the “Deploy” tab in the dashboard

31. Scroll down to the bottom and then select “Deploy Branch”

32. Wait for my build to complete (you can click “view build log” to watch the process in a larger window)

33. When you see the message “deployed to Heroku” in the build log, click the “open app” button at the top of the page.


- The live link can be found here:- [drf-todo](https://drf-todo2023-76af1f9fdada.herokuapp.com/)

    
## Credits

  ##### Content

   - The instructions how to implement class/generic view  were taken from drf_api walk through project

   - Text home page explanation referenced from [DjangoRestFrameworkDocumentation](https://www.django-rest-framework.org/)
   
   - The content was created by the developer
   
 
[Frontend Repo, README.md file](https://github.com/Tamirucode/react-todoitem)



