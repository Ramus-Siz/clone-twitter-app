import { useContext, useEffect, useState } from "react";
import SingleTweet from "./singleTweet";
import { tweetContext } from "../contexts";

export default function Tweets() {
  const getTwetsession = sessionStorage.getItem("tweets");
  const tweetsSession = JSON.parse(getTwetsession);
  let reversedTweetsSession;
  if (Array.isArray(tweetsSession)) {
    // Inverser les éléments du tableau
    reversedTweetsSession = tweetsSession.reverse();
  }
  const { tweets } = useContext(tweetContext);
  console.log(reversedTweetsSession);

  return (
    <div className="tweets">
      {reversedTweetsSession.map((value) => (
        <SingleTweet value={value} key={value.id} />
      ))}
    </div>
  );
}
