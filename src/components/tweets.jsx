import { useContext, useEffect, useState } from "react";
import { listOfTweets } from "../utils/listTweet";
import SingleTweet from "./singleTweet";
import jsondatas from "../utils/initial-data.json"
import { UserContext } from "../contexts";



export default function Tweets() {
  // let user = useContext(UserContext);
  
  // let currentUser = jsondatas.currentUser;
  let listTweets = jsondatas.tweets;
  let copyOfListTweets=[...listTweets]
  console.log(jsondatas);

  // function upDateUser() {
  //   user.pseudo = currentUser.pseudo;
  //   user.isLogged = true;
  //   user.userImageProfil = currentUser.userImageProfil;
  //   user.name=currentUser.name
    
  // }

  //  useEffect(() => {
  //    upDateUser();
  //  })

  return (
    
    <div className="tweets">
     

      {copyOfListTweets.map((value) => (
        <SingleTweet value={value} key={value.id} />
      ))}
    </div>
  );
}
