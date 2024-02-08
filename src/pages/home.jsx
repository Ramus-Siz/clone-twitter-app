import React, { useContext, useRef, useState } from "react";
import { Header, Tweets } from "../components";
import { TweetEditorForm } from "../components";
import { TweetAvatar } from "../components";
import { TweetButton } from "../components";
import { TweetButtonActions } from "../components";
import { UserContext, tweetContext } from "../contexts";
import axios from "axios";
import { useForm } from "react-hook-form";

function Home({ title }) {
  const { tweets, setTweetToinsert } = useContext(tweetContext);
  let currentUser = useContext(UserContext);
  const inputRef = useRef(null); // to clear the tweet input
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.newTweet);
    handleClickButtonTweet(data.newTweet);
  };

  function handleClickButtonTweet(twetinputData) {
    let dataTweet = setNewTweetsInfos(twetinputData);
    axios
      .post(
        "https://65c0d3fcdc74300bce8cce71.mockapi.io/data/tweets",
        dataTweet
      )

      .then((response) => console.log(response), reset())
      .catch((err) => console.log(err));

    setTweetToinsert([dataTweet, ...tweets]);

    inputRef.current.value = "";
    // setNewTweetInput("");
    console.log("the tweets: ", tweets);
  }

  function setNewTweetsInfos(twetinputData) {
    let keyOftheLastTweet = tweets.length;
    let keyOfTweet = keyOftheLastTweet + 1;

    let newTweetToadd = {
      tweetitle: currentUser.name,
      username: currentUser.pseudo,
      userImageProfil: currentUser.userImageProfil,
      userTweet: twetinputData,
      tweetImage: "https://loremflickr.com/628/433/abstract",
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

  return (
    <main className="timeline">
      <Header title={"Home"} />
      <div className="tweet-editor">
        <TweetAvatar avatarImg="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/526.jpg" />
        <div className="tweet-editor-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <TweetEditorForm register={register} />
            <div className="tweet-editor-buttons">
              <TweetButtonActions />
              <TweetButton />
            </div>
          </form>
          <p className="text-xs h-3 " style={{ color: "red" }}>
            {errors.newTweet && <span>{errors.newTweet.message}</span>}
          </p>
        </div>
      </div>
      <Tweets />
    </main>
  );
}

export default Home;
