import React from "react";
import "./style/reset.css";
import "./style/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TweetsProvider, UsersProvider } from "./contexts";
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
import Login from "./pages/login/Login";
import Update from "./pages/profile/Update";
import UpdateForm from "./pages/profile/UpdateForm";
import { AuthProvider } from "./authContext";
import PrivateRoute from "./privateRoute";

export default function App() {
  return (
    <AuthProvider>
      <UsersProvider>
        <TweetsProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/updateForm" element={<Update />} />
              <Route path="*" element={<NoMatch />} />

              <Route element={<PrivateRoute />}>
                <Route path="/" element={<Layout />}>
                  <Route path="home" element={<Home />} />
                  <Route path="profile/:handle" element={<Profile />} />
                  <Route path="explore" element={<Explore />} />
                  <Route path="messages" element={<Messages />} />
                  <Route path="bookmark" element={<Bookmark />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="notifications" element={<Notifications />} />
                  <Route path="list" element={<List />} />
                  <Route path="more" element={<More />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </TweetsProvider>
      </UsersProvider>
    </AuthProvider>
  );
}
