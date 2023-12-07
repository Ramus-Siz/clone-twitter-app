import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import SideBar from "./components/side-bar/side-bar.jsx";
import { BrowserRouter } from "react-router-dom";

import("./style/reset.css");
import("./style/App.css");

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <SideBar />
        <Home />
      </Layout>
    </BrowserRouter>
  );
}
