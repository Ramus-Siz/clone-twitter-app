import React, { useContext, useRef, useState } from "react";
import { Header, Tweets } from "../components";
import { TweetEditorForm } from "../components";
import { TweetAvatar } from "../components";
import { TweetButton } from "../components";
import { TweetButtonActions } from "../components";
import { UserContext, tweetContext } from "../contexts";

import jsondatas from "../utils/initial-data.json";

import cnnProfileImage from "../images/tweet-profile-photo.png";
import nytimeProfileImage from "../images/profil-ny.png";
import bradleyProfileImage from "../images/profile-photo.png";
import tweeterProfileImage from "../images/profil-tweeter.png";
import nytimeTweetImage from "../images/tweet-image.png";

function Home({ title }) {
  // const { AddTweetToContext } = useContext(tweetContext);
  // let listTweets = jsondatas.tweets;
  const { tweets, setTweetToinsert } = useContext(tweetContext);
  let currentUser = useContext(UserContext);

  const [newTweetInput, setNewTweetInput] = useState("");
  const inputRef = useRef(null);

  function handleTweetAdd(e) {
    setNewTweetInput(e.target.value);
  }

  // function setInput() {
  //   let tweetInput = e.target.value;
  //   return tweetInput;
  // }

  function handleClickButtonTweet(e) {
    e.preventDefault();

    if (newTweetInput.replace(/\s+/, "").length) {
      let dataTweet = setNewTweetsInfos(newTweetInput);

      setTweetToinsert([dataTweet, ...tweets]);
      inputRef.current.value = "";
      // setNewTweetInput("");

      console.log("the tweets: ", tweets);
    }
  }
  // function AddTweetToContext(play) {
  //   setNewTweet(play.newTweets);
  //   setTweet(newTweet, ...tweets);
  // }
  // let newTweetWithInfos = setNewTweetsInfos(newTweetInput);

  function setNewTweetsInfos(newTweetInput) {
    let keyOftheLastTweet = tweets.length;
    let keyOfTweet = keyOftheLastTweet + 1;

    let newTweetToadd = {
      tweetTitle: currentUser.name,
      username: currentUser.pseudo,
      userImageProfil: currentUser.userImageProfil,
      userTweet: newTweetInput,
      tweetImage: "",
      reactions: 0,
      isLiked: false,
      retweet: "0",
      reply: "0",
      timeOfPublication: ". Jan 4",
      isCertified: true,
      id: keyOfTweet,
    };

    return newTweetToadd;
  }

  // function setImageUrl(listTweet) {
  //   listTweet[0].userImageProfil = cnnProfileImage;
  //   listTweet[1].userImageProfil = nytimeProfileImage;
  //   listTweet[1].tweetImage = nytimeTweetImage;
  //   listTweet[2].userImageProfil = tweeterProfileImage;
  //   listTweet[3].userImageProfil = tweeterProfileImage;
  //   listTweet[3].tweetImage = nytimeTweetImage;
  //   listTweet[4].userImageProfil = tweeterProfileImage;
  //   listTweet[5].userImageProfil = bradleyProfileImage;
  // }

  // console.log(tweets);

  return (
    <main className="timeline">
      <Header title={"Home"} />
      <div className="tweet-editor">
        <TweetAvatar avatarImg="src/images/profile-photo.png" />
        <div className="tweet-editor-form">
          <TweetEditorForm
            setNewTweetsInput={handleTweetAdd}
            clearInput={inputRef}
          />
          <div className="tweet-editor-buttons">
            <TweetButtonActions />
            <TweetButton handleClick={handleClickButtonTweet} />
          </div>
        </div>
      </div>
      <Tweets />
    </main>
  );
}

export default Home;
