import { Link } from "react-router-dom";
import TweetActions from "./tweet-actions";

export default function SingleTweet({ value }) {
  return (
    <div
      className=" flex justify-start items-start gap-4 px-6 py-6 border-b-1-[#2f3336]"
      key={value.id}
    >
      <div className="flex-[0_0_70px]">
        <Link to={`/profile/${value.username}`}>
          <img
            src={value.userImageProfil}
            alt=""
            className="max-w-full max-h-100px rounded-full"
          />
        </Link>
      </div>
      <div className="flex flex-col items-start justify-start gap-7 w-full">
        <div className="flex flex-col gap-2">
          <div className="flex justify-start items-start gap-2.5 text-base">
            <span className="text-basetext-base">{value.tweetTitle}</span>
            {value.isCertified && (
              <img
                src="src/images/Icons/cerfied.png"
                alt=""
                className="text-base"
              />
            )}
            <p className="text-[#6e767d]">{value.username}</p>
            <p className="text-[#6e767d]">{value.timeOfPublication}</p>
          </div>
          <p className="text-[#d9d9d9] text-base">{value.userTweet}</p>
          <div className="w-full pt-1.5">
            {value.tweetImage && (
              <img
                src={value.tweetImage}
                alt=""
                className="max-w-full h-auto rounded-[50px] border-solid border-1 border-[#2f3336]"
              />
            )}
          </div>
        </div>

        <TweetActions value={value} />
      </div>
    </div>
  );
}
