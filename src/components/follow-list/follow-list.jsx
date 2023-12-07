import { listOfTweets } from "../../utils/listTweet";
import ShowMore from "../show-more/show-more";
import AccountToFollow from "./acount-to-follow";

function FollowList() {
  const ListOtweetToMap = listOfTweets.slice(0, 3);

  return (
    <>
      <div className="follow-list">
        {ListOtweetToMap.map((value) => (
          <AccountToFollow value={value} key={value.id} />
        ))}
        <ShowMore />
      </div>
    </>
  );
}

export default FollowList;
