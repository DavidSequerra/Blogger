import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CurrentUserCtx from "./context/currentUser";
import HostRenderCtx from "./context/hostContext";

import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar/Navbar";
import HomePageOut from "./pages/HomePageOut";
import ProfilePage from "./pages/ProfilePage";
import BlogsPage from "./pages/BlogsPage";
import FeedPage from "./pages/FeedPage";


import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const urlRender = process.env.REACT_APP_API_URL || "http://localhost:3001";
  return (
    <div>
      <HostRenderCtx.Provider value={urlRender}>
        <CurrentUserCtx.Provider value={{ currentUser, setCurrentUser }}>
          <BrowserRouter>
            <Navbar />
            <div className="redimensionPage">
              <Routes>
                <Route path="/" element={<HomePageOut />} />
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/feed" element={<FeedPage />} />
                <Route path="/feed/:blogId" element={<FeedPage />} />
              </Routes>
            </div>
          </BrowserRouter>
        </CurrentUserCtx.Provider>
      </HostRenderCtx.Provider>
    </div>
  );
}

export default App;
