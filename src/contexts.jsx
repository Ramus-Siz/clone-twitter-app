import { createContext, useContext, useEffect, useState } from "react";
// import FechUsersData from "./components/fetchUsersData";
// import FechTweetsData from "./components/fetchData";
import { get } from "react-hook-form";
export const tweetContext = createContext([]);
export const UserContext = createContext({});

export function TweetsProvider({ children }) {
  const getTweets = sessionStorage.getItem("tweets");
  const tweets = JSON.parse(getTweets);
  const [tweetsData, setTweetsData] = useState(tweets);

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

export function UsersProvider({ children }) {
  const getUserWithInfos = sessionStorage.getItem("userWithInfos");
  const userWithInfos = JSON.parse(getUserWithInfos);
  const [usersData, setUsersData] = useState(userWithInfos);

  const [theNewUser, setTheNwewUser] = useState(usersData);

  console.log(theNewUser);
  //update the tweetContext
  function setUsersToinsert(newUser) {
    setUsersData(newUser);
  }

  return (
    <UserContext.Provider value={{ users: usersData, setUsersToinsert }}>
      {children}
    </UserContext.Provider>
  );
}
