import { Profiler } from "react";
import { Header } from "../components";

function Profile({ title }) {
  return (
    <>
      <main className="timeline">
        <Header title={"Profile"} />
      </main>
    </>
  );
}

export default Profile;
