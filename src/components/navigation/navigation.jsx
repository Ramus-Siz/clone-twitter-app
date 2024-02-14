import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="hashtag ">
      <NavLink>
        <img
          src="src\images\Icons\Twitter.png"
          alt=""
          className="logo-twitter"
        />
      </NavLink>
      <ul>
        <li>
          <NavLink to="/home">
            <div className="inline-navigate-sidebar">
              <img src="src\images\Icons\Home-Fill.png" alt="" />
              <h3>Home</h3>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/explore">
            <div className="inline-navigate-sidebar">
              <img src="src\images\Icons\Explore.png" alt="" />

              <h3>Explore</h3>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/notifications">
            <div className="inline-navigate-sidebar">
              <img src="src\images\Icons\Notifications.png" alt="" />
              {/* <img src="src\images\Icons\Notifications-Fill.png" alt="" /> */}

              <h3>Notifications</h3>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/messages">
            <div className="inline-navigate-sidebar">
              <img src="src\images\Icons\Messages.png" alt="" />
              {/* <img src="src\images\Icons\Messages-Fill.png" alt="" /> */}

              <h3>Messages</h3>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/bookmark">
            <div className="inline-navigate-sidebar">
              <img src="src\images\Icons\Bookmarks.png" alt="" />
              {/* <img src="src\images\Icons\Bookmarks-Fill.png" alt="" /> */}
              <h3> Bookmark</h3>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/list">
            <div className="inline-navigate-sidebar">
              <img src="src\images\Icons\Lists.png" alt="" />
              {/* <img src="src\images\Icons\Lists-Fill.png" alt="" /> */}

              <h3>List</h3>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile/@Bradley...">
            <div className="inline-navigate-sidebar">
              <img src="src\images\Icons\Profile.png" alt="" />
              <h3>Profile</h3>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/more">
            <div className="inline-navigate-sidebar">
              <img src="src\images\Icons\More.png" alt="" />
              <h3>More</h3>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
