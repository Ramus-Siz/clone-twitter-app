function UserNameProfile({ user, username }) {
  return (
    <div className="avatar-modele">
      <div className="avatar-sidebar">
        <p>{user}</p>
        <img src="src/images/Icons/Vector.png" alt="" />
      </div>

      <span className="tweet-title-details">{username}</span>
    </div>
  );
}

export default UserNameProfile;
