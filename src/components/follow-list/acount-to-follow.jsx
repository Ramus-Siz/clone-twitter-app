import Follow from "../follow-button";

function AccountToFollow({ value }) {
  return (
    <>
      <div>
        <div id={value.id}>
          <div className="toFollow">
            <div className="inline-profile-img-and-user-infos">
              <img src={value.userImageProfil} alt="" />
              <div>
                <div className="inline-author-and-iscertified">
                  <p className="tweet-title-author">{value.tweetTitle}</p>
                  {value.isCertified && (
                    <img
                      src="src/images/Icons/cerfied.png"
                      alt=""
                      className="tweet-title-author"
                    />
                  )}
                </div>
                <p className="tweet-title-details">{value.username}</p>
              </div>
            </div>

            <Follow />
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountToFollow;
