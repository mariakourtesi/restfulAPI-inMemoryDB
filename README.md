# restfulAPI-inMemoryDB app

This is a simple Restful API that uses express and in-memory server.

It has been Dockerized and CircleCI has also been added.

## Install

    npm install

## Run the app

    npm start

## Run the tests

    npm test

# REST API

## Add a user
Open postman  and use the url bellow

`POST /users/`

    http://localhost:3000/users/

name: Name

email: name@test.com

description: Just add a description

### Get all Users

`GET /thing/`

    http://localhost:3000/users/

## Get a specific User

### Request

`GET /users/id`

## Change a Users's name or email
### Request

`PUT /users/:id/`

## Delete a User

### Request

`DELETE /users/id`


