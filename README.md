# Blogger

Blogger is a microblogging platform consisting of a frontend application (BlogApp) and a backend service (BlogBE). This project demonstrates my full-stack web development skills by integrating a modern React application with a Node.js/Express backend and a Neon Serverless PostgreSQL database.

## Overview

- **BlogApp**: The frontend of the application, built using React. It allows users to create and manage blogs, interact with posts, and follow other blogs.
- **BlogBE**: The backend service that supports the frontend. It manages user authentication, blog management, and data storage with a PostgreSQL database.

## Features

### BlogApp (Frontend)

- **User Authentication**: Users can sign up and log in to access features.
- **Blog Management**: Create, manage, and personalize blogs and posts.
- **Post Interaction**: Create posts, like posts, reply to posts, and engage in nested comments.
- **Follow Blogs**: Easily follow blogs for quick access to favorite content via a sidebar.

### BlogBE (Backend)

- **User Authentication**: Secure user sign-up and login processes.
- **Blog Management**: CRUD operations for blogs and posts.
- **Post Interactions**: Allows liking posts, replying to posts, and commenting on replies.
- **Follow System**: Users can follow blogs for easier content tracking.

## Tech Stack

- **Frontend**:

  - **Framework**: React (using Create React App)
  - **UI Frameworks**: Bootstrap and React-Bootstrap
  - **HTTP Requests**: Axios
  - **Routing**: React Router DOM

- **Backend**:
  - **Framework**: Node.js with Express
  - **Database**: Neon Serverless PostgreSQL
  - **Environment Variables**: `dotenv`
  - **CORS Handling**: `cors`

## Folder Structure

```blogger
├── blogapp # Frontend Application
│ ├── public
│ ├── src
│ ├── README.md
│ ├── package.json
│ └── package-lock.json
├── blogbe # Backend Service
│ ├── routes
│ ├── package.json
│ ├── server.js
│ └── README.md
└── README.md # This file```

### Detailed Breakdown

- **blogapp/**: Contains the frontend codebase, including components, pages, and styles.
- **blogbe/**: Contains the backend codebase, including routes and server configuration.
- **README.md**: This file explains the project structure and features.

## Installation

To set up the entire application locally, follow these steps:

1. **Clone the repository**:
   `"git clone https://github.com/your-username/blogger.git"`
2. **Navigate to the project directory**:
   `"cd blogger"`
3. **Set up the frontend (BlogApp)**:
   - Navigate to the `blogapp` directory:
     `"cd blogapp"`
   - Install dependencies:
     `"npm install"`
   - Create a .env file in the root directory and add the following line:
      `"REACT_APP_API_URL=http://localhost:3001"`
   - Run the frontend:
     `"npm start"`
4. **Set up the backend (BlogBE)**:

   - Navigate to the `blogbe` directory:
     `"cd ../blogbe"`
   - Install dependencies:
     `"npm install"`
   - Create a `.env` file with your database configuration.
   - Run the backend:
     `"npm run dev"`

     ## Access the Deployed Application

You can access the deployed Blogger application at the following URL: [https://bloggerfe.onrender.com/](https://bloggerfe.onrender.com/)

## Development Status

Both BlogApp and BlogBE are currently under development, with ongoing improvements and feature additions planned.

## How to Contribute

Currently, contributions to the code are not accepted. However, you can send feedback, suggestions, or feature requests via direct messages. Our team will review your input and implement necessary changes to improve both the frontend and backend services.

---
