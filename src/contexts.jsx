import { createContext, useContext, useEffect, useState } from "react";
import FechUsersData from "./components/fetchUsersData";
import FechTweetsData from "./components/fetchData";
export const tweetContext = createContext([]);
export const UserContext = createContext({});

export function TweetsProvider({ children }) {
  const [tweetsData, setTweetsData] = useState(FechTweetsData());
  const [usersData, setusersData] = useState(FechUsersData());

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
  const [usersData, setUsersData] = useState(FechUsersData());

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
