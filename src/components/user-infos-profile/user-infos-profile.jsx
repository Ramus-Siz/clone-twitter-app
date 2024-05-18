import { useParams } from "react-router-dom";
import Avatar from "../avatar";
import UserNameProfile from "./user-name-profile";
import { useContext, useEffect, useState } from "react";
import { tweetContext, UserContext } from "../../contexts";
import SingleUserTweets from "../single-user-tweets";
import axios from "axios";
import { BASE_API_URL } from "../../utils/baseUrl.config";
import Update from "../../pages/profile/Update";

function UserInfosProfile() {
  const { handle } = useParams();
  const [users, setUsers] = useState({});
  const userUrl = `${BASE_API_URL}/api/users/handle/${handle}`;

  const bg = users.profileBackground;
  console.log(users);

  useEffect(() => {
    const getUserData = async () => {
      const { data } = await axios.get(userUrl);
      console.log(data);
      setUsers(data);
    };
    getUserData();
  }, [handle]);
  return (
    <>
      <div
        className="relative h-[230px] w-full bg-cover bg-[#6e767d]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="profile-avatar">
          <Avatar avatarImg={users.profilePicture} />
        </div>
      </div>
      <div className="flex items-center gap-8 pt-4 pl-8 pr-8 pb-4">
        <UserNameProfile username={users.handle} user={users.name} />
        <Update userHandle={handle} />
        <div className="flex items-center gap-4">
          <p>Bio:</p>
          <p>{users.bio}</p>
        </div>
      </div>
      <SingleUserTweets userAccout={users} />
    </>
  );
}
export default UserInfosProfile;
