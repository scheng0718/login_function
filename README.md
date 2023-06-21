# User Authentication Function

This repository contains the implementation of a user authentication (login) function. The function allows users to provide their credentials (email and password), and the server verifies their identity.

## Prerequisites

Make sure you have the following software installed before running the application:

- Node.js
- Express
- Express-Handlebars
- MongoDB and Robo3T (for database management)
- Mongoose (MongoDB object modeling tool)

## Getting Started

1. Clone the repository or download the source code:
```
git clone https://github.com/scheng0718/login_function.git
```
2. cd to directory
```
cd login
```
2. Install the required dependencies using: 
```
npm install
```
3. Create a .env file in the root directory and provide the necessary environment variables:
```
MONGODB_URI=mongodb+srv://<your MongoDB account>:<your MongoDB password>@<mongodb server location(ex. cluster0.okrb8d7.mongodb.net)>/<database name (ex. login_function)>?retryWrites=true&w=majority
```
4. Run the application using:
```
npm run dev
```
5. When the messages pop up, the local host is running and MongoDB is connected 
```
The server is listening at http://localhost:3000
mongodb connected!
```
6. Please access the URL Shortener service through visiting in your web browser: 
```
http://localhost:3000
```
7. Enjoy using the login function
8. Terminate the local host service
```
ctrl + c
```

## Developer Tools

- Node.js: 14.16.0
- Npm: 6.14.11
- Express: 4.17.1
- Express-handlebars: 4.0.2
- Bootstrap: 5.3.0
- MongoDB: 6.0.6
- Mongoose: 5.9.18
- dotenv: 16.3.1

## Contribution
Contributions to this user authentication function are welcome. If you find any issues or want to add new features, feel free to submit a pull request.

## Contributor

Evan Cheng