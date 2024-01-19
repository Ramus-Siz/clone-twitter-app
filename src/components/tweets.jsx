import { useContext, useEffect, useState } from "react";
import SingleTweet from "./singleTweet";
import jsondatas from "../utils/initial-data.json";
import { UserContext, tweetContext } from "../contexts";

export default function Tweets({ newCopyOfListTweets }) {
  // const copyOfListTweets = useContext(tweetContext);
  return (
    <div className="tweets">
      {newCopyOfListTweets.map((value) => (
        <SingleTweet value={value} key={value.id} />
      ))}
    </div>
  );
}
