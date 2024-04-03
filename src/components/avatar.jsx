import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts";

export default function Avatar({ avatarImg, name }) {
  const user = useContext(UserContext);
  return (
    <Link to={`profile/${user.users.handle}`}>
      <img src={avatarImg} alt="" className="userProfileImage" />
    </Link>
  );
}
