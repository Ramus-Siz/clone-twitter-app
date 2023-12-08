import { useParams } from "react-router-dom";
import { listOfTweets } from "../../utils/listTweet";
import Avatar from "../avatar";
import Tweets from "../tweets";
import UserNameProfile from "./user-name-profile";

function UserInfosProfile() {
  const { username } = useParams();
  const userAccout = listOfTweets.find(
    (userAccout) => userAccout.username === username
  );

  return (
    <>
      <div className="cover-image">
        <div className="profile-avatar">
          <Avatar avatarImg={userAccout.userImageProfil} />
        </div>
      </div>
      <div className="user-name-profile">
        <UserNameProfile
          username={userAccout.username}
          user={userAccout.tweetTitle}
        />
      </div>
      <Tweets />
    </>
  );
}
export default UserInfosProfile;
