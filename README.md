# Project Manager App

This project is a web application built using React.js and Redux Toolkit. It allows users to manage their projects and tasks efficiently.

## Features

- User authentication: Users can sign up or log in to access the application.
- Project creation: Users can add new projects using a step-by-step form.
- Task management: Users can manage tasks within each project.
- Private routing: Restricted access to certain pages based on user authentication status.

## Technologies Used

- React.js
- Redux Toolkit
- Local storage for data management
- React Router for routing

## Project Walkthrough

1. Registration (Task-2): Users can sign up using the registration form. After registering, they can use their first name as the username and the chosen password to log in.

2. Login Page (/): Upon visiting the application, users are directed to the login page. If already logged in, they are redirected to the homepage.

3. Homepage (/forms) - Task 1: After logging in, users land on the homepage where they can add projects. The project creation process involves a multi-step form with four steps. Upon completion, users can view project details in a popup.

4. Private Routing: Access to certain pages is restricted based on user authentication status. If a user is not logged in and tries to access the "/forms" page, they are redirected to the login page. Similarly, if a user is logged in and tries to access the login page ("/"), they are redirected to the homepage.

5. 404 Page (/*): Any other routes not specified above lead to a 404 page, indicating that the requested page does not exist.

## Routes

- "/": Login page
- "/forms": User homepage (Task 1)
- "/create": Sign-up page (Task 2)
- "/*": 404 page