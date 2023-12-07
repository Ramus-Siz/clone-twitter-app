import Avatar from "../avatar";
import Tweets from "../tweets";

function UserInfosProfile() {
  return (
    <>
      <div className="cover-image">
        <div className="profile-avatar">
          <Avatar />
        </div>
      </div>
      <Tweets />
    </>
  );
}
export default UserInfosProfile;
