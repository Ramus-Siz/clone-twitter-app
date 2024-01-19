import { createContext, useState } from "react";
import jsonData from "./utils/initial-data.json";
export const tweetContext = createContext();
const copyOfListTweets = [...jsonData.tweets];

export const UserContext = createContext({
  isLogged: false,
  name: "",
  pseudo: "",
  userImageProfil: "",
});

export function TweetsProvider({ children }) {
  const [theNweTweet, setTheNweTweet] = useState(copyOfListTweets);

  function setTweetToinsert(newTwets) {
    setTheNweTweet(newTwets);
  }
  return (
    <tweetContext.Provider value={{ tweets: theNweTweet, setTweetToinsert }}>
      {children}
    </tweetContext.Provider>
  );
}
