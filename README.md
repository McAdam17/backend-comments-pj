# backend-comments-pj
This is the backend for the comments project.

## How to start

1.- You need to create the database:
  Check out the script "db_script.sql" and run it in you mysql instance.
  
2.- Install all the basic modules
  ```
  npm install
  ```
3.- Define all the enviroment variables
  Check the ".env-example" to create yours

4.- Now you can start
  ```
  npm start
  ```
## The endpoints
  Notation
  ```
  [host] is the host where you are running the system
  [port] is the port where you are running the system
  ```
  List all the comments
  ```
  [get] http://[host]:[port]/api/v1/comments
  ```
  Get an specify comment | where {n} is the id of the comment
  ```
  [get] http://[host]:[port]/api/v1/comments/{n}
  ```
  Creating a comment|
  you need to send an object similar to the next below by raw/json
  ```
  {
    "name" : "Example",
    "email" : "example@example.com",
    "message" : "This is an example",
    "website" : "example.com"
  }
  ```
  ```
  [post] http://[host]:[port]/api/v1/comments
  ```
  Uptating a comment|
  To update a comment you need a similar object like when you create a comment, but you need to add the id of the comment that you want to modify
  if you don't send the id the system is going to create other comment.
  ```
  [put] http://[host]:[port]/api/v1/comments
  ```
  Deteting a comment | where {n} is the id of the comment
  ```
  [delete] http://[host]:[port]/api/v1/comments/{n}
  ```
