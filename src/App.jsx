import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./style/App.css";
import { TweetsProvider, UsersProvider } from "./contexts";
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
import Login from "./pages/login/Login";
import Update from "./pages/profile/Update";
import UpdateForm from "./pages/profile/UpdateForm";

export default function App() {
  let currentUser = jsondatas.currentUser;
  const [infosCurrentUser, setInfosCurrentUser] = useState(currentUser);
  // setImageUrl(copyOfListTweets);

  // function setImageUrl(listTweet) {
  //   listTweet[0].userImageProfil = cnnProfileImage;
  //   listTweet[1].userImageProfil = nytimeProfileImage;
  //   listTweet[1].tweetImage = nytimeTweetImage;
  //   listTweet[2].userImageProfil = tweeterProfileImage;
  //   listTweet[3].userImageProfil = tweeterProfileImage;
  //   listTweet[3].tweetImage = nytimeTweetImage;
  //   listTweet[4].userImageProfil = tweeterProfileImage;
  //   listTweet[5].userImageProfil = bradleyProfileImage;
  // }

  return (
    <UsersProvider>
      <TweetsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/updateForm" element={<Update />} />

            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/profile/:handle" element={<Profile />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/messageS" element={<Messages />} />
              <Route path="/bookmark" element={<Bookmark />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/list" element={<List />} />
              <Route path="/more" element={<More />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TweetsProvider>
    </UsersProvider>
  );
}
