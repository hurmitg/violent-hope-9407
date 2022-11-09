# violent-hope-9407

# **_Backend_**

## Use _npm run serve_ to start the backend on loacalhost

## Url - http://loacalhost:8080/api

# User APIs

## **_Register_**

> Url : `/user/signup`
> Type : **POST**
> Params : {
> name : string,
> email : string,
> password : string,
> }

**Response**

> Sucess : _Status Code(201)_
> {
> "data": User(with token),
> }

> Failure : _Status Code(400)_
> {
> "message": "User Already Exists !",
> }

## **_Login_**

> Url : `/user/login`
> Type : **POST**
> Params : {
> email : string,
> password : string,
> }

**Response**

> Sucess : _Status Code(201)_
> {
> "data": User(with token),
> }

> Failure : _Status Code(400)_
> {
> "message": "Invalid Credentials",
> }
