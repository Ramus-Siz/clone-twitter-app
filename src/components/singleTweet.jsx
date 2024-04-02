import { Link } from "react-router-dom";
import TweetActions from "./tweet-actions";
import { UserContext } from "../contexts";
import { useContext, useEffect, useState } from "react";
import FechUsersData from "./fetchUsersData";
import axios from "axios";

export default function SingleTweet({ value }) {
  const [users, setUsers] = useState({});
  const userUrl = `http://rafiki-twitter.onrender.com/api/users/${value.author}`;
  // console.log("users: ", users);
  // function findUsersById(id) {
  //   return users.find((user) => user.id === +id);
  // }

  // let users = findUsersById(value.author);

  useEffect(() => {
    const getUserData = async () => {
      const { data } = await axios.get(userUrl);
      setUsers(data);
    };
    getUserData();
  }, []);
  return (
    <div
      className=" flex justify-start items-start gap-4 px-6 py-6 border-b-1-[#2f3336]"
      key={value.id}
    >
      <div className="flex-[0_0_70px]">
        <Link to={`/profile/${users.handle}`}>
          <img
            src={users.profilePicture}
            alt=""
            className="max-w-full max-h-100px rounded-full"
          />
        </Link>
      </div>
      <div className="flex flex-col items-start justify-start gap-7 w-full">
        <div className="flex flex-col gap-2">
          <div className="flex justify-start items-start gap-2.5 text-base">
            <span className="text-basetext-base">{users.name}</span>

            <img
              src="src/images/Icons/cerfied.png"
              alt=""
              className="text-base"
            />

            <p className="text-[#6e767d]">{users.handle}</p>
            <p className="text-[#6e767d]">{formatDate(value.createdAt)}</p>
          </div>
          <p className="text-[#d9d9d9] text-base">{value.text}</p>
          <div className="w-full pt-1.5">
            {value.media[0] && (
              <img
                src={value.media[0]}
                alt=""
                className="w-full h-[25em] rounded-[50px] border-solid border-1 border-[#2f3336]"
              />
            )}
          </div>
        </div>

        <TweetActions value={value} />
      </div>
    </div>
  );
}
