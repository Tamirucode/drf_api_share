
## Overview

In this project, I build a To-Do-List application using Django and React. 

For this application, React serves as the frontend, or client-side framework, handling the user interface and getting and setting data via 

requests to the Django backend, which is an API built using the Django REST framework (DRF).

With django-to-do-list, user can create one todolist and multiple todoitem with due date. Users have option of modifying the todolist and todoitem.

In this API I used three modle namely profile,  todolist, and todoitem

## Below: Models screenshot

![model ppp5  a](https://github.com/Tamirucode/drf_api_share/assets/116649197/110e0480-aff0-4625-b4fe-73f1308f4d10)
![model ppp5 b](https://github.com/Tamirucode/drf_api_share/assets/116649197/93c1a0dd-5ea8-4307-93e9-b2aa50e6b906)

- The code snippet above describes six properties on the profile model;
- The code snippet above describes three properties on the Todolist model:
- The code snippet above describes eight properties on the Todoitem model:

I created profile, todolist and todoitem/serializers.py file  to convert model instances to JSON so that the frontend can work with the received data.


## Below: A live todolist app screenshot after depolyment

![ppp5 api  screen shot](https://github.com/Tamirucode/drf_api_share/assets/116649197/2ce2917f-0cd9-409e-b3a5-a4c1995c1cc9)
Now I can test api using endpoints

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

![created todoitem list](https://github.com/Tamirucode/drf_api_share/assets/116649197/f3c9a748-972a-469a-b4c9-1a3aaba31546)
![created todoitemlist pat 2](https://github.com/Tamirucode/drf_api_share/assets/116649197/5821a869-5329-4584-89cb-6934db75cf13)

## Below: Delete todoitem 

![delete to do item](https://github.com/Tamirucode/drf_api_share/assets/116649197/18187ed9-228d-4140-a1cf-6461215efa08)

## Below: After delete show no content

![after  delete  show  no content](https://github.com/Tamirucode/drf_api_share/assets/116649197/355aea23-f2c5-4d07-a18c-e1cf51c244a1)

## Below: After  delete check todoitem by id confirm :-HTTP Response  404

![after  delete check todo item by id show  404](https://github.com/Tamirucode/drf_api_share/assets/116649197/33ee4073-da96-4e75-bda5-3e2bd23ad8ea)

## Below: As loggedin user retrive todoitem by id

![as loggdin user retrive todoitem by id](https://github.com/Tamirucode/drf_api_share/assets/116649197/9f0a1ca3-6f3f-4b5c-bb22-0457ff7fca53)
![retrive todoitem  by id part 2](https://github.com/Tamirucode/drf_api_share/assets/116649197/571ab350-8f2a-48b7-807e-f47cc4eea5b8)

## Below: Update todoitem by id

![todo item update by id](https://github.com/Tamirucode/drf_api_share/assets/116649197/034fd636-c126-4869-90cb-dea2acd03398)
![todoitem update by id part 2](https://github.com/Tamirucode/drf_api_share/assets/116649197/1a3fc72e-f2a9-4e98-bdfe-2607f50a9bbe)

## Below: Todoitem list view 

![todoitem list](https://github.com/Tamirucode/drf_api_share/assets/116649197/9f63efb7-f3d3-431b-b856-4b75d528a893)
![todoitemlist part 2](https://github.com/Tamirucode/drf_api_share/assets/116649197/7ade8d26-3f12-4c53-8794-f5871ce8d296)
![todoitem list pat 3](https://github.com/Tamirucode/drf_api_share/assets/116649197/037a05b9-9c5f-4260-b1a2-971da9cd0c48)

## Below: Search todoitem by title name

![search by todoitem title name](https://github.com/Tamirucode/drf_api_share/assets/116649197/6cf5537e-79d6-451a-8793-d9de6d0cc11f)
![search by todoitem title name section 2](https://github.com/Tamirucode/drf_api_share/assets/116649197/b0728520-974b-4747-b07a-16e82ab80fba)

## Below: Filter specific user todoitem

![filter specific user todoitem](https://github.com/Tamirucode/drf_api_share/assets/116649197/68ad3a12-f343-421f-9c94-35607ce84f8b)
![filter specific user todoitem part 2](https://github.com/Tamirucode/drf_api_share/assets/116649197/97481caf-1571-4b4d-a36b-dd5f8e7d865e)

## Below: create todoitem with blank title :-:-HTTP Response  400 

![create to do list item not tobe blank title](https://github.com/Tamirucode/drf_api_share/assets/116649197/d296055b-3edb-458f-ac62-7f90a6a4d668)


### After Deployment testing API endpoint by profiles :- it works as expected

![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/7dea63cb-3edd-40f4-ae08-ccef993dc757)

### After Deployment testing API endpoint by todolists :- it works as expected

![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/d3f3caa7-06dc-4a61-892d-0fc72f3dc081)

### After Deployment testing API endpoint by todoitems :- it works as expected

![image](https://github.com/Tamirucode/drf_api_share/assets/116649197/6a9c5429-3d0c-4cd0-9775-29823d5f780f)


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

24. Debug=True  in setting .py file

25. I commented DEV back in env.py file

26. I did git add, git commit and git push.
  
27. Log in to heroku.com and open the dashboard drf-todo2023 application

30. Select the “Deploy” tab in the dashboard

31. Scroll down to the bottom and then select “Deploy Branch”

32. Wait for my build to complete (you can click “view build log” to watch the process in a larger window)

33. When you see the message “deployed to Heroku” in the build log, click the “open app” button at the top of the page.
    
## Credits

  ##### Content

   - The instructions how to implement class/generic view  were taken from drf_api walk through project

   - Text home page explanation referenced from [DjangoRestFrameworkDocumentation](https://www.django-rest-framework.org/)
   
   - The content was created by the developer
   
 




