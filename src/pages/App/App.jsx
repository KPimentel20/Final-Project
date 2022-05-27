import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import Playlist from "../PlaylistFeed/PlaylistFeed";
import AddPlaylistForm from "../../components/AddPlaylistForm/AddPlaylistForm";

function App() {
  const [user, setUser] = useState(userService.getUser()); 

  function handleSignUpOrLogin() {
    setUser(userService.getUser())
  }

    return (
      <Routes>
        <Route path="/" element={<AddPlaylistForm user={user} /> } />
        <Route path="/playlist" element={<Playlist user={user} />} />
        <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
        <Route path="/signup" element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />} />
      </Routes>
    );
  }

export default App;
