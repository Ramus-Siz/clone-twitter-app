import { useParams } from "react-router-dom";
import Avatar from "../avatar";
import UserNameProfile from "./user-name-profile";
import { useContext } from "react";
import { tweetContext, UserContext } from "../../contexts";
import SingleUserTweets from "../single-user-tweets";

function UserInfosProfile() {
  const { users } = useContext(UserContext);
  console.log(users);

  const { handle } = useParams();
  const userAccout = users.find((userAccout) => userAccout.handle === handle);
  console.log("profileBackground: ", userAccout.profileBackground);
  const bg = userAccout.profileBackground;
  return (
    <>
      <div
        className="relative h-[230px] w-full bg-cover bg-[#6e767d]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="profile-avatar">
          <Avatar avatarImg={userAccout.profilePicture} />
        </div>
      </div>
      <div className="user-name-profile">
        <UserNameProfile username={userAccout.handle} user={userAccout.name} />
      </div>
      <SingleUserTweets userAccout={userAccout} />
    </>
  );
}
export default UserInfosProfile;
