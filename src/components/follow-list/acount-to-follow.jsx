import { Link } from "react-router-dom";
import Follow from "../follow-button";

function AccountToFollow({ value }) {
  return (
    <>
      <div>
        <div id={value.id}>
          <div className="toFollow">
            <Link to={`profile/${value.handle}`}>
              <div className="inline-profile-img-and-user-infos">
                <img src={value.profilePicture} alt="" />
                <div>
                  <div className="inline-author-and-iscertified">
                    <p className="tweet-title-author">{value.name}</p>

                    <img
                      src="src/images/Icons/cerfied.png"
                      alt=""
                      className="tweet-title-author"
                    />
                  </div>
                  <p className="tweet-title-details">{value.handle}</p>
                </div>
              </div>
            </Link>

            <Follow />
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountToFollow;
