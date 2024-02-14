import { useParams } from "react-router-dom";
import { listOfTweets } from "../../utils/listTweet";

function SingleUserAccountPreview() {
  const { username } = useParams();
  const userAccout = listOfTweets.find(
    (userAccout) => userAccout.username === username
  );
  return (
    <>
      <div>{userAccout.id}</div>
      <div>{userAccout.username}</div>
      <div>{userAccout.reactions}</div>
      <div>{userAccout.userImageProfil}</div>
      <div>{userAccout.tweetImage}</div>
      <div>{userAccout.isCertified}</div>
    </>
  );
}

export default SingleUserAccountPreview;
