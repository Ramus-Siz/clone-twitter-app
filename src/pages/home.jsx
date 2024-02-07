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
  // const { AddTweetToContext } = useContext(tweetContext);
  // let listTweets = jsondatas.tweets;
  const { tweets, setTweetToinsert } = useContext(tweetContext);
  let currentUser = useContext(UserContext);
  // const [newTweetInput, setNewTweetInput] = useState("");
  const inputRef = useRef(null); // to clear the tweet input
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // function handleTweetAdd(e) {
  //   setNewTweetInput(e.target.value);
  // }

  // function setInput() {
  //   let tweetInput = e.target.value;
  //   return tweetInput;
  // }

  const onSubmit = (data) => {
    console.log(data);
    let twetinputData = data.newTweet;
    console.log(twetinputData);
    handleClickButtonTweet(twetinputData);

    // PostTweet();
  };

  function handleClickButtonTweet(twetinputData) {
    let dataTweet = setNewTweetsInfos(twetinputData);
    axios
      .post(
        "https://65c0d3fcdc74300bce8cce71.mockapi.io/data/tweets",
        dataTweet
      )
      .then((response) => console.log(response))
      .catch((err) => console.error(err));

    setTweetToinsert([dataTweet, ...tweets]);
    inputRef.current.value = "";
    // setNewTweetInput("");
    console.log("the tweets: ", tweets);
  }

  // let newTweetWithInfos = setNewTweetsInfos(newTweetInput);

  function setNewTweetsInfos(twetinputData) {
    let keyOftheLastTweet = tweets.length;
    let keyOfTweet = keyOftheLastTweet + 1;

    let newTweetToadd = {
      tweetTitle: currentUser.name,
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
        <TweetAvatar avatarImg="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/526.jpg" />
        <div className="tweet-editor-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <TweetEditorForm
              // setNewTweetsInput={handleTweetAdd}
              register={register}
              clearInput={inputRef}
            />
            <div className="tweet-editor-buttons">
              <TweetButtonActions />
              <TweetButton />
            </div>
          </form>
        </div>
      </div>
      <Tweets />
    </main>
  );
}

export default Home;
