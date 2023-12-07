import { listOfTweets } from "../utils/listTweet";
import SingleTweet from "./singleTweet";

export default function Tweets() {
  return (
    <div className="tweets">
      {listOfTweets.map((value) => (
        <SingleTweet value={value} key={value.id} />
      ))}
    </div>
  );
}
