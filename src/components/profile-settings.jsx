import { useContext } from "react";
import { TweetAvatar } from ".";
import UserNameProfile from "./user-infos-profile/user-name-profile";
import { UserContext } from "../contexts";


function ProfileSettings() {
  const user = useContext(UserContext);
  return (
    <>
      <div className="profile-settings">
        <div className="avatar-profile-photo">
          <TweetAvatar avatarImg="src\images\profile-photo.png" />
        </div>
        <UserNameProfile user="Bradley Ortiz" username={`${user.pseudo}`}/>
        <img
          src="src\images\Icons\More-2.png"
          alt=""
          className="more-settings"
        />
      </div>
    </>
  );
}
export default ProfileSettings;
