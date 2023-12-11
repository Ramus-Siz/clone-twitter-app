import { Link } from "react-router-dom";

export default function Avatar({ avatarImg }) {
  return (
    <Link to="profile/@Bradley...">
      <img src={avatarImg} alt="" className="userProfileImage" />
    </Link>
  );
}
