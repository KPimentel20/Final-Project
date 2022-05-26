import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import PlaylistFeed from "../../components/PlaylistFeed/PlaylistFeed";
import PlaylistPage from "../PlaylistPage/PlaylistPage";

function App() {
  const [user, setUser] = useState(userService.getUser()); 

  function handleSignUpOrLogin() {
    setUser(userService.getUser())
  }

    return (
      <Routes>
        <Route path="/" element={<PlaylistFeed user={user}/>} />
        <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
        <Route path="/signup" element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
        <Route path="/playlist" element={<PlaylistPage user={user}/>} />
      </Routes>
    );
  }

export default App;
