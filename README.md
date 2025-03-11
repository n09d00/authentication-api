# Base Authentication API implemented in NestJS with MongoDB

## Description

This API provides basic functionality for User Authentication with JWT.
It uses MongoDB as the database for storing user data.

It is possible to build on top of this API for your own use cases.


## Get Started

Clone this repository.
```
git clone https://github.com/n09d00/authentication-api.git
```

Change to the root directory of this project.
```
cd authentication-api
```

Add a .env file to the root directory with your MongoDB URI and JWT Secret.
```
MONGO_DB_URI="Your Mongo DB URI"
JWT_SECRET="Your JWT Secret"
```

Install the required packages specified in package.json:
```
npm install
```

Start the server:
```
npm run start
```

## Get Started with Docker

Clone this repository.
```
git clone https://github.com/n09d00/authentication-api.git
```

Change to the root directory of this project.
```
cd authentication-api
```

Add a .env file to the root directory with your MongoDB URI and JWT Secret.
```
MONGO_DB_URI="Your Mongo DB URI"
JWT_SECRET="Your JWT Secret"
```

Build the Dockerfile (development phase) 

```
docker build -t "Your image name" .
```

or Dockerfile.prod (production phase)

```
docker build -t "Your image name" -f Dockerfile.prod .
```

Run the Docker image as a container
```
docker run --rm --env-file .env "Your image name"
```


