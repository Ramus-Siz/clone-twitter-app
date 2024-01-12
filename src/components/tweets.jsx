import { useEffect, useState } from "react";
import { listOfTweets } from "../utils/listTweet";
import SingleTweet from "./singleTweet";
import jsondatas from "../utils/initial-data.json"



export default function Tweets() {
  let currentUser = jsondatas.currentUser;
  let listTweets = jsondatas.tweets;
  let copyOfListTweets=[...listTweets]
  console.log(jsondatas);

  return (
    
    <div className="tweets">
     

      {copyOfListTweets.map((value) => (
        <SingleTweet value={value} key={value.id} />
      ))}
    </div>
  );
}
