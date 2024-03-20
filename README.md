# Demonstration Video
- https://www.youtube.com/watch?v=v0zX3XwEsAQ 

# Deployed Link
- https://recruiter-tool-pern-stack-frontend.vercel.app/

# Recruiter tool 

CRUD Project on PERN Stack

## Local Installation Guide

### Running the Server

1. Open Command Prompt (CMD) on your system.
2. Navigate to the server directory of the project using the `cd` command.
3. Install dependencies by running `npm install`.
4. In Models/ Database.js uncomment 
    // const pool = new Pool({
//   user: "postgres",
//   password: "12345",
//   host: "localhost",
//   port: 5432,
//   database: "candidate"
// });and modify the credentials to connect it to own postgresql db.
5. Once the dependencies are installed, start the server using `node index.js`.

### Running the Frontend

1. Open a new Command Prompt (CMD) window.
2. Navigate to the frontend directory of the project using the `cd` command.
3. Install dependencies by running `npm install`.
4. Once the dependencies are installed, start the frontend using `npm start`.
5. Change the URL from `https://recruiter-tool-pern-stack.vercel.app/candidates` to   `http://localhost:5000/candidates`.
6. Open your preferred web browser and visit [http://localhost:3000](http://localhost:3000) to view the application.


# Instructions to Deploy on Vercel

This document provides step-by-step instructions for deploying the application to Vercel, with the backend connected to a PostgreSQL database and the frontend accessible via the deployed server.

## Backend Deployment (Node.js with PostgreSQL)

1. **Create PostgreSQL Database on Vercel:**
   - Navigate to the "Storage" section in your Vercel dashboard.
   - Create a PostgreSQL database and note down the connection link provided.

2. **Connect Database to Node.js Application:**
   - Use the provided connection link to connect your Node.js application to the PostgreSQL database.
   - Run the necessary queries to set up your database schema. For example, to create a database named "candidates".

3. **Deploy Backend Server:**
   - Navigate to the Vercel dashboard.
   - Click on "New Project" and select "Import Git".
   - Choose the repository containing your Node.js application.
   - Follow the prompts to deploy the server.

## Frontend Deployment (React)

4. **Update Endpoint URLs:**
   - In your frontend code, update the endpoint URLs from `localhost:5000` to the domain link of the deployed server on Vercel.

5. **Push Changes to GitHub:**
   - Commit and push your changes to your GitHub repository.

6. **Deploy Frontend:**
   - Navigate to the Vercel dashboard.
   - Click on "New Project" and select "Import Git".
   - Choose the repository containing your frontend code.
   - Follow the prompts to deploy the frontend.
   - Open the domain link to access the project.
   
