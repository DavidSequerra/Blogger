# BlogApp

BlogApp is a microblogging platform built using React to showcase my web development skills. This project allows users to create and manage blogs, interact with posts, and follow other blogs. **Note**: This project is still under development and not intended for practical use yet, but it demonstrates core features of a modern microblogging site.

## Features

- **User Authentication**: Users can sign up and log in to access the features.
- **Blog Management**: Create new blogs, manage posts, and personalize your content.
- **Post Interaction**:
  - Create posts for a specific blog.
  - Like posts and see a tally of likes.
  - Reply to posts and engage in conversations with nested comments.
- **Nested Comments**: Users can comment on replies, promoting interactive discussions.
- **Follow Blogs**: Users can follow blogs for easy access to their favorite content via a quick-access sidebar.

## Tech Stack

- **Frontend**: React (using Create React App)
- **UI Frameworks**: Bootstrap and React-Bootstrap for styling
- **HTTP Requests**: Axios for API interactions
- **Routing**: React Router DOM for seamless navigation

## Installation

To run the project locally, follow these steps:

1. **Clone the repository**:
   `"git clone https://github.com/your-username/blogapp.git"`
2. **Navigate to the project directory**:
   `"cd blogapp"`
3. **Install dependencies**:
   `"npm install"`
4. **Create a `.env` file in the root directory and add the following line:**
   `"REACT_APP_API_URL=http://localhost:3001"`
4. **Run the development server**:
   `"npm start"`
5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Access the Deployed Application

You can access the deployed Blogger application at the following URL: [https://bloggerfe.onrender.com/](https://bloggerfe.onrender.com/)

## Folder Structure

Here's an overview of the project folder structure:
```
blogapp
├── public
│ ├── index.html
│ └── robots.txt
├── src
│ ├── components
│ │ ├── buttons
│ │ │ ├── CreateBlogBtn.jsx
│ │ │ ├── CreateBlogBtn.module.css
│ │ │ ├── DeleteBtn.jsx
│ │ │ ├── DeleteBtn.module.css
│ │ │ ├── FollowBtn.jsx
│ │ │ ├── FollowBtn.module.css
│ │ │ ├── LikeBtn.jsx
│ │ │ ├── LikeBtn.module.css
│ │ │ ├── PostBtn.jsx
│ │ │ ├── PostBtn.module.css
│ │ │ ├── RepliesSection.jsx
│ │ │ ├── RepliesSection.module.css
│ │ │ ├── ReplyBtn.jsx
│ │ │ └── ReplyBtn.module.css
│ │ ├── homePageOut
│ │ │ ├── LogIn.jsx
│ │ │ ├── LogIn.module.css
│ │ │ ├── SignUp.jsx
│ │ │ └── SignUp.module.css
│ │ ├── hooks
│ │ │ └── infiniteSearch.js
│ │ ├── navbar
│ │ │ ├── Navbar.jsx
│ │ │ ├── Navbar.module.css
│ │ │ ├── SearchNavbar.jsx
│ │ │ └── SearchNavbar.module.css
│ │ ├── profileModal
│ │ │ ├── PictureModal.jsx
│ │ │ ├── PictureModal.module.css
│ │ │ ├── ProfileModal.jsx
│ │ │ └── ProfileModal.module.css
│ │ ├── sideBar
│ │ │ ├── SideBar.jsx
│ │ │ └── SideBar.module.css
│ │ └── userCard
│ │ ├── UserCard.jsx
│ │ └── UserCard.module.css
│ ├── context
│ │ ├── currentUser.js
│ │ └── hostContext.js
│ ├── pages
│ │ ├── BlogsPage.jsx
│ │ ├── BlogsPage.module.css
│ │ ├── FeedPage.jsx
│ │ ├── FeedPage.module.css
│ │ ├── HomePage.jsx
│ │ ├── HomePage.module.css
│ │ ├── HomePageOut.jsx
│ │ ├── HomePageOut.module.css
│ │ ├── ProfilePage.jsx
│ │ └── ProfilePage.module.css
│ ├── App.css
│ ├── App.js
│ ├── App.test.js
│ ├── index.css
│ ├── index.js
│ ├── reportWebVitals.js
│ └── setupTests.js
├── README.md
├── package-lock.json
└── package.json
```

### Detailed Breakdown

- **public/**: Contains static files like `index.html` and `robots.txt`.
- **src/**: Main source code of the app.
  - **components/**: Contains reusable UI components, each organized in a subfolder. Each component's folder includes the `.jsx` file and its corresponding modular CSS file (e.g., `CreateBlogBtn.jsx` and `CreateBlogBtn.module.css`).
  - **context/**: Context API files for managing global states.
  - **pages/**: Components representing different pages (e.g., Home, Feed, Profile).
  - **App.js**: Entry point of the React app.
  - **index.js**: Main file to render the app into the DOM.

## Dependencies

The project relies on the following main dependencies:

- **react**: ^18.3.1
- **react-router-dom**: ^6.27.0
- **axios**: ^1.7.7
- **bootstrap**: ^5.3.3
- **react-bootstrap**: ^2.10.5
- **bootstrap-icons**: ^1.11.3
- **@testing-library/react**: ^13.4.0 (for testing)

Refer to `package.json` for a complete list.

## Development Status

- The project is currently under development.
- Planned improvements include better styling, performance optimizations, and the integration of more complex features.

## How to Contribute

Currently, contributions to the code are not accepted. However, you can share feedback, ideas, or suggestions directly via messages. Our team will review your input and make any necessary adjustments to improve the project.

---
