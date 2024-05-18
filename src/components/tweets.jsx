import { useContext, useEffect, useState } from "react";
import SingleTweet from "./singleTweet";
import { tweetContext } from "../contexts";

export default function Tweets() {
  const getTwetsession = sessionStorage.getItem("tweets");
  const tweetsSession = JSON.parse(getTwetsession);
  const { tweets } = useContext(tweetContext);
  console.log(tweetsSession);

  return (
    <div className="tweets">
      {tweetsSession.map((value) => (
        <SingleTweet value={value} key={value.id} />
      ))}
    </div>
  );
}
