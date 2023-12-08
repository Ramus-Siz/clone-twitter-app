import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./style/App.css";
import "./style/reset.css";
import Layout from "./components/layout.jsx";
import Home from "./pages/home.jsx";
import Explore from "./pages/explore.jsx";
import Messages from "./pages/messages.jsx";
import Bookmark from "./pages/bookmark.jsx";
import Profile from "./pages/profile.jsx";
import Notifications from "./pages/notifications.jsx";
import List from "./pages/list.jsx";
import More from "./pages/more.jsx";
import NoMatch from "./components/page404/no-match.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/profile/:username",
        element: <Profile />,
      },

      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/bookmark",
        element: <Bookmark />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/list",
        element: <List />,
      },
      {
        path: "/more",
        element: <More />,
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
