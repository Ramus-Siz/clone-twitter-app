import React, { useContext, useRef, useState } from "react";
import { Header, Tweets } from "../components";
import { TweetEditorForm } from "../components";
import { TweetAvatar } from "../components";
import { TweetButton } from "../components";
import { TweetButtonActions } from "../components";
import { UserContext, tweetContext } from "../contexts";
import axios from "axios";
import { useForm } from "react-hook-form";
import InfiniteScroll from "react-infinite-scroll-component";
// import FechTweetsData from "../components/fetchData";
import { GenerateCreatedDataAndHour } from "../utils/formatedDate";
import { BASE_API_URL } from "../utils/baseUrl.config";

function Home({ title }) {
  const [dataForInfiniteScroll, setDataForInfiniteScroll] = useState(
    Array.from({ length: 20 })
  );
  const [hasMore, setHasMore] = useState(true);
  const { tweets, setTweetToinsert } = useContext(tweetContext);
  let currentUser = useContext(UserContext);
  const getTweets = sessionStorage.getItem("tweets");
  const tweetsSesion = JSON.parse(getTweets);
  const inputRef = useRef(null); // to clear the tweet input
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const getUserWithInfos = sessionStorage.getItem("userWithInfos");
  const userWithInfos = JSON.parse(getUserWithInfos);
  const onSubmit = (data) => {
    console.log(data.newTweet);
    let dataTweet = setNewTweetsInfos(data.newTweet);

    handleClickButtonTweet(dataTweet);
  };

  async function handleClickButtonTweet(dataTweet) {
    try {
      const response = await axios.post(
        `${BASE_API_URL}/api/tweets/add`,
        dataTweet
      );

      if (response.status === 200) {
        setTweetToinsert([...tweetsSesion, dataTweet]);
        const myTweets = sessionStorage.getItem("tweets");
        const tweetsArray = JSON.parse(myTweets) || [];
        tweetsArray.push(response.data.aadTweet);
        sessionStorage.setItem("tweets", JSON.stringify(tweetsArray));
        console.log("the tweets: ", tweets);
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  }

  function setNewTweetsInfos(twetinputData) {
    let keyOftheLastTweet = tweets.length + 1;
    let keyOfTweet = keyOftheLastTweet + 1;

    let newTweetToadd = {
      id: keyOfTweet,
      author: userWithInfos.id,
      media: [],
      retweetCount: 0,
      favoriteCount: 0,
      repliesCount: 0,
      text: twetinputData,
      createdAt: GenerateCreatedDataAndHour(),
    };

    return newTweetToadd;
  }

  // const fetchDataWhenScrolling = () => {
  //   setDataForInfiniteScroll(
  //     dataForInfiniteScroll.concat(Array.from({ length: 20 }))
  //   );
  // };

  return (
    // <InfiniteScroll
    //   dataLength={dataForInfiniteScroll.length}
    //   next={fetchDataWhenScrolling}
    //   hasMore={hasMore}
    // >
    <main className="timeline">
      <Header title={"Home"} />
      <div className="tweet-editor">
        <TweetAvatar profilePicture={currentUser.userImageProfil} />
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
    // </InfiniteScroll>
  );
}

export default Home;
