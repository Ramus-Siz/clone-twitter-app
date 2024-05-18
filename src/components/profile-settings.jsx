import { useContext } from "react";
import { TweetAvatar } from ".";
import UserNameProfile from "./user-infos-profile/user-name-profile";
import { UserContext } from "../contexts";
import { useState } from "react";

function ProfileSettings() {
  const user = useContext(UserContext);
  const getUser = sessionStorage.getItem("userWithInfos");
  const userWithInfos = JSON.parse(getUser);
  console.log("Object: ", user);

  return (
    <>
      <div className="profile-settings">
        <div className="avatar-profile-photo mr-[8px]">
          <TweetAvatar avatarImg={userWithInfos.profilePicture} />
        </div>
        <UserNameProfile
          user={userWithInfos.name}
          username={userWithInfos.handle}
        />
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
