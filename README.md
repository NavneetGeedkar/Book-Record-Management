# Book-Record-Management
This is a Book Record Management Project using Nodejs, Express, MongoDb and Postman.
Created an API Backend for the management of records of Books and Users.
Book & User Management: Developed a backend API using Node.js, Express, and MongoDB for managing books (CRUD operations) and users (registration, borrowing, and returns).

API Testing & Validation: Implemented and tested RESTful APIs using Postman, with proper input validation and error handling to ensure data integrity.

Data Handling: Utilized Mongoose for efficient database schema design, allowing seamless relationships between books and users, tracking borrowing history and availability.

# API Documentation link

https://documenter.getpostman.com/view/37982773/2sAXjKbYUC

# Routes and Endpoints

## /users

POST: Create a new user 
GET: Get all list of users 

## /users/{id}

GET: Get a user by id 
PUT: Update a user by id 
DELETE: Delete a user by id (check if he/she still has an issued book) (is there any fine to be paid) 

## /users/subscription-details/{id}

GET: Get user subscription details 

1. Date of subscription
2. Valid till
3. Fine if any

## /books

GET: Get all books 
POST: Create/Add a new book 

## /books/{id}

GET: Get a book by id 
PUT: Update a book by id 

## /books/issued/by-user

GET: Get all issued books

## /books/issued/withFine

// TODO TASK // 🏁
GET: Get all issued books with fine

# Subscription Types

Basic (3 months)
Standard (6 months)
Premium (12 months)

NOTE: dates will be in format mm/dd/yyyy

If the subscription date is 01/08/22
and Subscription type is Standard
the valid till date will be 01/02/23

If he has an issued book and the issued book is to be returned at 01/01/23
If he missed the date of return, then he gts a fine of Rs. 100./

If he has an issued book and the issued book is to be returned at 01/01/23
If he missed the date of return, and his subscription also expires, then he will get a fine of Rs 200./
