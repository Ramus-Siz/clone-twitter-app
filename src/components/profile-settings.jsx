import { TweetAvatar } from ".";
import UserNameProfile from "./user-infos-profile/user-name-profile";

function ProfileSettings() {
  return (
    <>
      <div className="profile-settings">
        <div className="avatar-profile-photo">
          <TweetAvatar avatarImg="src\images\profile-photo.png" />
        </div>
        <UserNameProfile user="Bradley Ortiz" username="@bradley..." />
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
