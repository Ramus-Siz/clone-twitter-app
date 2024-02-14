import { TweetButton } from "..";
import Navigation from "../navigation/navigation";
import ProfileSettings from "../profile-settings";

function SideBar() {
  return (
    <div className="sidebar">
      <Navigation />
      <TweetButton />
      <ProfileSettings />
    </div>
  );
}

export default SideBar;
