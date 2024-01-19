import { useContext } from "react";
import { UserContext, tweetContext } from "../contexts";
import SingleTweet from "./singleTweet";

export default function SingleUserTweets({ userAccout }) {
  const copyOfListTweets = useContext(tweetContext);

  // filter the context containing the array of tweet objects
  const tweetFilter = copyOfListTweets.filter(
    (user) => user.username == userAccout.username
  );
  console.log(tweetFilter);
  return (
    <div className="tweets">
      {tweetFilter.map((value) => (
        <SingleTweet value={value} key={value.id} />
      ))}
    </div>
  );
}
