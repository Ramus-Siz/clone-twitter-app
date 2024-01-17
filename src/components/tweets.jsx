import { useContext, useEffect, useState } from "react";
import SingleTweet from "./singleTweet";
import jsondatas from "../utils/initial-data.json";
import { getTweets } from "../App";
import { tweetContext } from "../contexts";

export default function Tweets() {
  const copyOfListTweets = useContext(tweetContext);

  return (
    <div className="tweets">
      {copyOfListTweets.map((value) => (
        <SingleTweet value={value} key={value.id} />
      ))}
    </div>
  );
}
