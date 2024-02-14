import { useContext, useEffect, useState } from "react";
import SingleTweet from "./singleTweet";
import { tweetContext } from "../contexts";
import jsondata from "../utils/initial-data.json";
export default function Tweets() {
  console.log(jsondata);
  console.log(jsondata.currentUser.name);

  const { tweets } = useContext(tweetContext);
  return (
    <div className="tweets">
      {tweets.map((value) => (
        <SingleTweet value={value} key={value.id} />
      ))}
    </div>
  );
}
