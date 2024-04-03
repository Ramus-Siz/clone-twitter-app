import { useParams } from "react-router-dom";
import Avatar from "../avatar";
import UserNameProfile from "./user-name-profile";
import { useContext, useEffect, useState } from "react";
import { tweetContext, UserContext } from "../../contexts";
import SingleUserTweets from "../single-user-tweets";
import axios from "axios";

function UserInfosProfile() {
  const { handle } = useParams();
  const [users, setUsers] = useState({});
  const userUrl = `http://localhost:8002/api/users/handle/${handle}`;

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
      <div className="user-name-profile">
        <UserNameProfile username={users.handle} user={users.name} />
      </div>
      <SingleUserTweets userAccout={users} />
    </>
  );
}
export default UserInfosProfile;
