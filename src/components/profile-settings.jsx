import { TweetAvatar } from ".";

function ProfileSettings() {
  return (
    <>
      <div className="profile-settings">
        <div className="avatar-profile-photo">
          <TweetAvatar />
        </div>
        <div>
          <div className="avatar-sidebar">
            <p>Bradley Ortiz</p>
            <img src="src\images\Icons\Vector.png" alt="" />
          </div>

          <p>@Bradley</p>
        </div>
        <img
          src="src\images\Icons\More-2.png"
          alt=""
          className="more-settings"
        />
      </div>
    </>
  );
}
export default ProfileSettings;
