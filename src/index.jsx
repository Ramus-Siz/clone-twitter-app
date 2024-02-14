import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     // (<UserContext.Provider value={{isLogged:true, username:pseudo}}></UserContext.Provider>)
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/home",
//         element: <Home />,
//       },
//       {
//         path: "/profile/:username",
//         element: <Profile />,
//       },

//       {
//         path: "/explore",
//         element: <Explore />,
//       },
//       {
//         path: "/messages",
//         element: <Messages />,
//       },
//       {
//         path: "/bookmark",
//         element: <Bookmark />,
//       },
//       {
//         path: "/profile",
//         element: <Profile />,
//       },
//       {
//         path: "/notifications",
//         element: <Notifications />,
//       },
//       {
//         path: "/list",
//         element: <List />,
//       },
//       {
//         path: "/more",
//         element: <More />,
//       },
//       {
//         path: "*",
//         element: <NoMatch />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
