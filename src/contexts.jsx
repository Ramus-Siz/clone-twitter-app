import { createContext, useContext, useEffect, useState } from "react";
import jsonData from "./utils/initial-data.json";
import FechTweetsData from "./components/fetchData";
export const tweetContext = createContext([]);
export const UserContext = createContext({
  isLogged: false,
  pseudo: "",
  name: "",
  userImageProfil: "",
});

export function TweetsProvider({ children }) {
  const [tweetsData, setTweetsData] = useState(FechTweetsData());

  const [theNweTweet, setTheNweTweet] = useState(tweetsData);
  console.log(theNweTweet);
  //update the tweetContext
  function setTweetToinsert(newTwets) {
    setTweetsData(newTwets);
  }

  return (
    <tweetContext.Provider value={{ tweets: tweetsData, setTweetToinsert }}>
      {children}
    </tweetContext.Provider>
  );
}
