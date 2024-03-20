import { useContext } from "react";
import { TweetAvatar } from ".";
import UserNameProfile from "./user-infos-profile/user-name-profile";
import { UserContext } from "../contexts";
import { useState } from "react";

function ProfileSettings() {
  const user = useContext(UserContext);
  console.log("Object: ", user);
  console.log("Nom: ", user.users.name);

  return (
    <>
      <div className="profile-settings">
        <div className="avatar-profile-photo">
          <TweetAvatar avatarImg={user.users.profilePicture} />
        </div>
        <UserNameProfile user={user.users.name} username={user.users.handle} />
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
