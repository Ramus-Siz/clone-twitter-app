import cnnProfileImage from "../images/tweet-profile-photo.png";
import nytimeProfileImage from "../images/profil-ny.png";
import bradleyProfileImage from "../images/profile-photo.png";
import tweeterProfileImage from "../images/profil-tweeter.png";

export const listOfTweets = [
  {
    tweetTitle: "CNN",
    username: "@CNN",
    userImageProfil: cnnProfileImage,
    userTweet:
      "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a major breakthrough that would serve to both strengthen the US steel industry and combat the global climate crisis.",
    tweetImage: "",
    reactions: 188,
    retweet: 144,
    reply: 5,
    timeOfPublication: ". 7m",
    isCertified: true,
    id: 1,
  },
  {
    tweetTitle: "The New York Times",
    username: "@nytimes",
    userImageProfil: nytimeProfileImage,
    userTweet:
      "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
    tweetImage: "src/images/tweet-image.png",
    reactions: "482",
    retweet: "48",
    reply: "19",
    timeOfPublication: ". 2h",
    isCertified: true,
    id: 2,
  },
  {
    tweetTitle: "Tweeter",
    username: "@Tweeter",
    userImageProfil: tweeterProfileImage,
    userTweet: "BIG NEWS lol jk still Twitter",
    tweetImage: "",
    reactions: "267.1K",
    retweet: "36.6K",
    reply: "6.8K",
    timeOfPublication: ". Oct 29",
    isCertified: true,
    id: 3,
  },
  {
    tweetTitle: "Tweeter",
    username: "@Tweeter",
    username: "@CNN",
    userImageProfil: tweeterProfileImage,
    userTweet: "hello literally everyone",
    tweetImage: "src/images/tweet-image.png",
    reactions: "3.3K",
    retweet: "785.4K",
    reply: "118.7K",
    timeOfPublication: ". Oct 4",
    isCertified: true,
    id: 4,
  },
  {
    tweetTitle: "Tweeter",
    username: "@Tweeter",
    userImageProfil: tweeterProfileImage,
    userTweet: "hello literally everyone",
    tweetImage: "src/images/tweet-image.png",
    reactions: "267.1K",
    retweet: "36.6K",
    reply: "6.8K",
    timeOfPublication: ". Oct 4",
    isCertified: true,
    id: 5,
  },
  {
    tweetTitle: "Bradley Ortiz",
    username: "@Bradley...",
    userImageProfil: bradleyProfileImage,
    userTweet: "Nothing to teach you today!",
    tweetImage: "",
    reactions: "268.1K",
    retweet: "32.6K",
    reply: "1.8K",
    timeOfPublication: ". Jan 4",
    isCertified: true,
    id: 6,
  },
];
