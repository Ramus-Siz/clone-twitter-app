import Avatar from "../avatar";
import Tweets from "../tweets";
import UserNameProfile from "./user-name-profile";

function UserInfosProfile() {
  return (
    <>
      <div className="cover-image">
        <div className="profile-avatar">
          <Avatar />
        </div>
      </div>
      <div className="user-name-profile">
        <UserNameProfile />
      </div>
      <Tweets />
    </>
  );
}
export default UserInfosProfile;
