import { useParams } from "react-router-dom";
import Avatar from "../avatar";
import Tweets from "../tweets";
import UserNameProfile from "./user-name-profile";
import { useContext } from "react";
import { tweetContext } from "../../contexts";
import SingleUserTweets from "../single-user-tweets";

function UserInfosProfile() {
  const { tweets } = useContext(tweetContext);

  const { username } = useParams();
  const userAccout = tweets.find(
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
      <SingleUserTweets userAccout={userAccout} />
    </>
  );
}
export default UserInfosProfile;
