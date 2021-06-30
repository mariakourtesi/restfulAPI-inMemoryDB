
<img src="https://raw.githubusercontent.com/swagger-api/swagger.io/wordpress/images/assets/SW-logo-clr.png" height="50" align="right">

# Hello, folks! <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="30px"> 


My name is Maria and I am a Web Developer. 

Feel free to clone this app and try it locally. 

Clone the repo

  
    git clone https://github.com/mariakourtesi/restfulAPI-inMemoryDB.git


# RestfulAPI app with in MemoryDB and Express :rocket:

This is a simple Restful API that uses express server and in-memory database.

It has been Dockerized and CircleCI has also been added.

 [![mariakourtesi](https://circleci.com/gh/mariakourtesi/restfulAPI-inMemoryDB.svg?style=svg)](https://github.com/mariakourtesi/restfulAPI-inMemoryDB/edit/main/README.md)


## Install

    npm install

## Run the app

    npm start

## Run the tests

    npm test

# REST API

## Add a user
Open postman and add the url bellow

`POST /users/`

    http://localhost:3000/users/

Schema: 
(note: name and email are required fields)

name: Name

email: name@test.com

description: Just add a description

### Get all Users

`GET /users/`

    http://localhost:3000/users/

## Get a specific User

### Request

`GET /users/id`

## Change a User's name or email
### Request

`PUT /users/id/`

## Delete a User

### Request

`DELETE /users/id`


