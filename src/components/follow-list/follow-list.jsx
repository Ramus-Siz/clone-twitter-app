import { listOfTweets } from "../../utils/listTweet";
import ShowMore from "../show-more/show-more";
import AccountToFollow from "./acount-to-follow";

function FollowList() {
  return (
    <>
      <div className="follow-list">
        {listOfTweets.map((value) => (
          <AccountToFollow value={value} key={value.id} />
        ))}
        <ShowMore />
      </div>
    </>
  );
}

export default FollowList;
