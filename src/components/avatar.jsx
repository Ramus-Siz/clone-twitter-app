import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts";

export default function Avatar({ avatarImg, name }) {
  const user = useContext(UserContext);
  return (
    <Link to={`/profile/${user.users.handle}`}>
      {avatarImg != "" ? (
        <img src={avatarImg} alt="" className="userProfileImage" />
      ) : (
        <span className="text-6xl flex items-center justify-center">
          <ion-icon name="person-circle-outline"></ion-icon>
        </span>
      )}
    </Link>
  );
}
