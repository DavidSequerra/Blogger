# BlogBE

BlogBE is the backend service for the BlogApp, a microblogging platform. It is built using Node.js and Express and uses a Neon Serverless PostgreSQL database to manage data efficiently. The backend provides RESTful APIs for user authentication, blog management, post interactions, and more.

## Features

- **User Authentication**: Handles user sign-up and login securely.
- **Blog Management**: CRUD operations for blogs and posts.
- **Post Interactions**:
  - Users can like posts and view like counts.
  - Users can reply to posts and comment on replies.
- **Follow System**: Enables following other blogs, keeping track of them easily.

## Tech Stack

- **Backend Framework**: Node.js with Express
- **Database**: Neon Serverless PostgreSQL
- **Environment Variables**: Managed using `dotenv`
- **Cross-Origin Resource Sharing**: Enabled via `cors` for API accessibility

## Installation

Follow these steps to set up the backend locally:

1. **Clone the repository**:
   `"git clone https://github.com/your-username/blogbe.git"`
2. **Navigate to the project directory**:
   `"cd blogbe"`
3. **Install dependencies**:
   `"npm install"`
4. **Set up environment variables**:
   - Create a `.env` file in the root directory.
   - Add your database configuration and other sensitive information:
     ```
     DATABASE_URL=your_database_url
     PORT=your_port_number
     ```
5. **Run the server**:
   - In development mode:
     `"npm run dev"`
   - In production mode:
     `"npm start"`

## Folder Structure

Here's an overview of the backend folder structure:

blogBE
├── routes
│ ├── blogsRoutes.js
│ ├── followsRoutes.js
│ ├── likesRoutes.js
│ ├── postsRoutes.js
│ ├── repliesRoutes.js
│ └── usersRoutes.js
├── package-lock.json
├── package.json
├── postgreslocal.js
├── postgresql.js
└── server.js

### Detailed Breakdown

- **routes/**: Contains route handlers for different resources.
  - `blogsRoutes.js`: Handles routes related to blog operations.
  - `followsRoutes.js`: Manages follow functionality.
  - `likesRoutes.js`: Handles like operations for posts.
  - `postsRoutes.js`: Manages CRUD operations for posts.
  - `repliesRoutes.js`: Handles replies and nested comments.
  - `usersRoutes.js`: Manages user-related routes such as authentication.
- **server.js**: The main entry point that sets up the Express server and imports routes.
- **postgreslocal.js & postgresql.js**: Configuration files for local and Neon Serverless PostgreSQL connections.
- **package.json**: Contains project metadata and dependencies.

## Dependencies

- **express**: ^4.21.1 - Framework for building APIs.
- **pg**: ^8.13.1 - PostgreSQL client for Node.js.
- **dotenv**: ^16.4.5 - For environment variable management.
- **cors**: ^2.8.5 - Middleware to handle CORS.
- **nodemon**: ^3.1.7 (Dev Dependency) - Utility to automatically restart the server on file changes during development.

## Development Status

- The backend is currently functional but under active development for improvements and optimizations.
- Additional features and security enhancements are planned.

## How to Contribute

Currently, contributions to the code are not accepted. However, you can send feedback, suggestions, or feature requests via direct messages. Our team will review your input and implement necessary changes to improve the backend service.

---
