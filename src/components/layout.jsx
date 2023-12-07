import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./side-bar/side-bar";
import Trends from "./trends/trends";

function Layout() {
  return (
    <>
      <div className="left-sidebar">
        <SideBar />
      </div>
      <div>
        <Outlet />
      </div>
      <div className="right-sidebar">
        <Trends />
      </div>
    </>
  );
}

export default Layout;
