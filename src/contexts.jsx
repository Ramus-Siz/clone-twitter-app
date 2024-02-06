import { createContext, useEffect, useState } from "react";
import jsonData from "./utils/initial-data.json";
import axios from "axios";
export const tweetContext = createContext();
export const UserContext = createContext({
  isLogged: false,
  pseudo: "",
  name: "",
  userImageProfil: "",
});

export function TweetsProvider({ children }) {
  const [tweetsData, setTweetsData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(
      `https://65c0d3fcdc74300bce8cce71.mockapi.io/data/tweets`
    );
    const tweets = data.reverse();
    setTweetsData(tweets);
    setTheNweTweet(tweets);
  };

  const [theNweTweet, setTheNweTweet] = useState(tweetsData);
  console.log(theNweTweet);

  //update the tweetContext
  function setTweetToinsert(newTwets) {
    setTheNweTweet(newTwets);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <tweetContext.Provider value={{ tweets: theNweTweet, setTweetToinsert }}>
      {children}
    </tweetContext.Provider>
  );
}
