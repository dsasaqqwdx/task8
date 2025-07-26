Angular To-Do Application
This project is a basic Angular application built for an intern assignment. It includes Login, Signup, and To-Do List pages with form validations, routing, and local storage-based data persistence.

Features
1. Signup Page
Fields: Full Name, Email, Password, Confirm Password.

Validations:

All fields are required.

Email must be in the correct format.

Password must be at least 6 characters.

Confirm Password must match Password.

On successful signup, data is saved in localStorage and the user is redirected to the login page.

2. Login Page
Fields: Email, Password.

Validations:

Both fields are required.

Email must be in the correct format.

Authenticates the user using stored signup credentials from localStorage.

On successful login, redirects to the To-Do List page.

3. To-Do List Page
Features:

Add a new task (title + optional description).

Mark tasks as completed or pending.

Delete tasks.

Separate view for pending and completed tasks.

Data persists in localStorage.

Includes a Logout button to return to the login page.

Bonus Features (Optional)
Add search functionality for tasks.

Add filters (All / Completed / Pending).

Add due dates and sort tasks by due date.

Technology Stack
Angular (v17+) – Standalone components.

Reactive Forms for validations.

Local Storage for persistence.

Routing for navigation between pages.

(Optional) Angular Material or Bootstrap for styling.

Project Structure
pgsql
Copy
Edit
src/app/
  auth/
    login/
      login.component.ts
      login.component.html
    signup/
      signup.component.ts
      signup.component.html
  todo/
      todo.component.ts
      todo.component.html
  shared/
    auth.service.ts
    todo.service.ts
  app.routes.ts
  app.config.ts
  app.component.ts
  app.component.html
Setup Instructions
1. Prerequisites
Install Node.js (>= 16.x).

Install Angular CLI globally:

bash
Copy
Edit
npm install -g @angular/cli
2. Install Dependencies
From the project root:

bash
Copy
Edit
npm install
3. Run the Application
bash
Copy
Edit
ng serve
The app will be available at:

arduino
Copy
Edit
http://localhost:4200/
Testing
Run unit tests:

bash
Copy
Edit
ng test
