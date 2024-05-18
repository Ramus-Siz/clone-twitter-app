import { useContext } from "react";
import ShowMore from "../show-more/show-more";
import AccountToFollow from "./acount-to-follow";
import { UserContext, tweetContext } from "../../contexts";

function FollowList() {
  const currentUser = useContext(UserContext);
  console.log(currentUser);

  // let toFollow = currentUser.filter(
  //   (account) => account.handle !== "@daRiddla"
  // );
  // const listTweetsToFolow = toFollow.slice(0, 3);

  return (
    <>
      <div className="follow-list">
        <AccountToFollow value={currentUser} />

        <ShowMore />
      </div>
    </>
  );
}

{
  // function FollowList() {
  // const currentUser = useContext(UserContext);
  // let toFollow = currentUser.filter(
  //   (account) => account.handle !== "@daRiddla"
  // );
  // const listTweetsToFolow = toFollow.slice(0, 3);
  // return (
  //   <>
  //     <div className="follow-list">
  //       {currentUser.map((value) => (
  //         <AccountToFollow value={value} key={value.id} />
  //       ))}
  //       <ShowMore />
  //     </div>
  //   </>
  // );
  // }
}

export default FollowList;
