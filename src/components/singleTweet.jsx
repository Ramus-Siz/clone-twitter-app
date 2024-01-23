import { Link } from "react-router-dom";
import TweetActions from "./tweet-actions";

export default function SingleTweet({ value }) {
  return (
    <div
      className=" flex justify-start  items-start gap-4 px-6 py-6 border-b-1-[#2f3336]"
      key={value.id}
    >
      <div className="flex-[0_0_70px]">
        <Link to={`/profile/${value.username}`}>
          <img src={value.userImageProfil} alt="" />
        </Link>
      </div>
      <div className="tweet-content">
        <div className="tweet-body">
          <div className="tweet-title">
            <span className="tweet-title-author">{value.tweetTitle}</span>
            {value.isCertified && (
              <img
                src="src/images/Icons/cerfied.png"
                alt=""
                className="tweet-title-author"
              />
            )}
            <p className="tweet-title-details">{value.username}</p>
            <p className="tweet-title-details">{value.timeOfPublication}</p>
          </div>
          <p className="tweet-text">{value.userTweet}</p>
          <div className="tweet-image">
            {value.tweetImage && <img src={value.tweetImage} alt="" />}
          </div>
        </div>

        <TweetActions value={value} />
      </div>
    </div>
  );
}
