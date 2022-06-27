# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: The name of the foreign key is has_many and belongs to the child, Student model.

  Researched answer:



2. Which RESTful routes must always be passed params? Why?

  Your answer: The RESTful routes that must always be passed params are show, edit, update, and destroy. They need param routes because they need to know what to apply the parameters to. 

  Researched answer: I could not find a better worded answer without writing things down that I don't know what I'm talking about. The routes need params to know what resource they are interacting with. 



3. Name three rails generator commands. What is created by each?

  Your answer: Three commands are rails g model, rails g controller and rails g migration.  

  Researched answer: While researching this answer I found out that I could use the command, -h,to get information about commands and the syntax for each of them. 



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students        
get -> show 
It would show the list of students    

action: "POST"   location: /students       
post-> create 
It would create a new student entry

action: "GET"    location: /students/new
get -> show 
It would show the new student entry 

action: "GET"    location: /students/2  
get -> index 
It would show the student entry with the index value of 2 

action: "GET"    location: /students/2/edit    
get -> edit 
It would show an edit form for the student entry with the index of 2 

action: "PATCH"  location: /students/2      
patch -> update 
It would update the student entry with the index value of 2 

action: "DELETE" location: /students/2      
delete -> destroy 
It would delete the student entry with the index value of 2 



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
<!-- “As a [persona], I [want to], [so that].” -->

1. As a developer, I can create an app, so that I can manage my to do list. 
2. As a developer, I can create a model containing task, priority, notes, and due date.   
3. As a developer, I can create a database to hold the tasks and organize them by the due date. 
4. As a consumer, I can see all the tasks on the to do list in a data base. 
5. As a consumer, I can edit all the tasks on the application 
6. As a consumer, I can see a button to add tasks with all fields being valid. 
7. As a consumer, I can see a button to delete tasks. 
8. As a consumer, I can mark a task as completed. 
9. As a consumer, I can see a button on the task page to take me back to the home page. 
10. As a consumer, I am redirected to the home page when I submit a valid task.  