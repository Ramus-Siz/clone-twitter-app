import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts";

export default function Avatar({ avatarImg, name }) {
  const user = useContext(UserContext);
  const getUser = sessionStorage.getItem("userWithInfos");
  const userWithInfos = JSON.parse(getUser);
  return (
    <Link to={`/profile/${userWithInfos.handle}`}>
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
