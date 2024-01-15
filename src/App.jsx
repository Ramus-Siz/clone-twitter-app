import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./style/App.css";
import { UserContext } from "./contexts";
import "./style/reset.css";
import Layout from "./components/layout";
import NoMatch from "./components/page404/no-match";
import Bookmark from "./pages/bookmark";
import Explore from "./pages/explore";
import Home from "./pages/home";
import List from "./pages/list";
import Messages from "./pages/messages";
import More from "./pages/more";
import Notifications from "./pages/notifications";
import Profile from "./pages/profile";
import jsondatas from "./utils/initial-data.json";


function App() {

  let currentUser = jsondatas.currentUser;
  const [infosCurrentUser, setInfosCurrentUser]=useState(currentUser)

  return (
    <UserContext.Provider value={{ isLogged: true, pseudo: infosCurrentUser.pseudo, name:infosCurrentUser.name, userImageProfil:infosCurrentUser.userImageProfil }}>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/message" element={<Messages />} />
            <Route path="/bookmark" element={<Bookmark />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/notifications" element={<Notifications/>} />
            <Route path="/list" element={<List />} />
            <Route path="/more" element={<More />} />
            <Route path="*" element={<NoMatch/>} />          
          </Route>

        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
