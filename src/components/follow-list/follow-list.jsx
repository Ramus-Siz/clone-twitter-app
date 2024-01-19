import { useContext } from "react";
import ShowMore from "../show-more/show-more";
import AccountToFollow from "./acount-to-follow";
import { tweetContext } from "../../contexts";

function FollowList() {
  const copyOfListTweets = useContext(tweetContext);
  const listTweetsToFolow = copyOfListTweets.slice(0, 3);

  return (
    <>
      <div className="follow-list">
        {listTweetsToFolow.map((value) => (
          <AccountToFollow value={value} key={value.id} />
        ))}
        <ShowMore />
      </div>
    </>
  );
}

export default FollowList;
