import { Header } from "../components";
import UserInfosProfile from "../components/user-infos-profile/user-infos-profile";

function Profile({ title }) {
  return (
    <main className="timeline">
      <Header title={"Profile"} />
      <UserInfosProfile />
    </main>
  );
}

export default Profile;
