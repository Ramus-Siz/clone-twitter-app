import { useContext } from "react";
import { TweetAvatar } from ".";
import UserNameProfile from "./user-infos-profile/user-name-profile";
import { UserContext } from "../contexts";
import { useState } from "react";

function ProfileSettings() {
  const user = useContext(UserContext);

  return (
    <>
      <div className="profile-settings">
        <div className="avatar-profile-photo">
          <TweetAvatar avatarImg="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/526.jpg " />
        </div>
        <UserNameProfile user={`${user.name}`} username={`${user.pseudo}`} />
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
