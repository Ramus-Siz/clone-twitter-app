import { useContext, useEffect, useState } from "react";
import { UserContext, tweetContext } from "../contexts";
import SingleTweet from "./singleTweet";
import { BASE_API_URL } from "../utils/baseUrl.config";
import axios from "axios";

export default function SingleUserTweets({ userAccout }) {
  const [userTweets, setUsersTweets] = useState([]);
  console.log(userAccout);
  const tweetsURL = `${BASE_API_URL}/api/tweets/handle/${userAccout.handle}`;
  let tweetFilter;
  if (userTweets != []) {
    tweetFilter = userTweets.filter((user) => user.userId == userAccout.id);
    console.log(tweetFilter);
  }

  const getUserData = async () => {
    try {
      const response = await axios.get(tweetsURL);
      if (response.status === 201) {
        setUsersTweets(response.data);
      }
    } catch (error) {
      console.log("singleTweet: ", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, [userAccout]);
  return (
    <div className="tweets">
      {tweetFilter.map((value) => (
        <SingleTweet value={value} key={value.id} />
      ))}
    </div>
  );
}
