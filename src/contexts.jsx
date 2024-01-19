import { createContext, useState } from "react";
import jsonData from "./utils/initial-data.json";
export const tweetContext = createContext();
export const UserContext = createContext({
  isLogged: false,
  name: "",
  pseudo: "",
  userImageProfil: "",
});

export function TweetsProvider({ children, tweetsToInsert }) {
  const [tweetToInsert, setTweetToinsert] = useState(tweetsToInsert);
  return (
    <tweetContext.Provider value={tweetToInsert}>
      {children}
    </tweetContext.Provider>
  );
}
