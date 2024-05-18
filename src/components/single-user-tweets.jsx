import { useContext } from "react";
import { UserContext, tweetContext } from "../contexts";
import SingleTweet from "./singleTweet";

export default function SingleUserTweets({ userAccout }) {
  const { tweets } = useContext(tweetContext);

  // filter the context containing the array of tweet objects
  const tweetFilter = tweets.filter((user) => user.userId == userAccout.id);
  console.log(tweetFilter);
  return (
    <div className="tweets">
      {tweetFilter.map((value) => (
        <SingleTweet value={value} key={value.id} />
      ))}
    </div>
  );
}
