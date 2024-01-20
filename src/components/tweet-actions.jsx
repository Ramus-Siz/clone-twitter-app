import { useState } from "react";
import { IncerementeOrDecrementeLikes } from "../utils/actions-buttons-functions";
export default function TweetActions({ value }) {
  const [action, setActions] = useState(value.reactions);
  const [iconeLikeOutline, setIconeLike] = useState(
    <ion-icon name="heart-outline"></ion-icon>
  );
  const [iconeLikSharp, setIconeLikSharp] = useState(
    <ion-icon name="heart" id="sharp"></ion-icon>
  );

  function IncrementToggle() {
    let like = IncerementeOrDecrementeLikes(value);
    setActions(like);
    // setIconeLike(iconeLikSharp);
  }

  return (
    <div className="tweet-actions">
      <div className="tweet-action reply">
        <img src="src/images/Icons/Replys.svg" alt="" />
        <span>{value.reply}</span>
      </div>
      <div className="tweet-action retweet">
        <img src="src/images/Icons/Retweets.svg" alt="" />
        <span>{value.retweet}</span>
      </div>
      <div className="tweet-action reactions" onClick={IncrementToggle}>
        {}
        {value.isLiked ? iconeLikSharp : iconeLikeOutline}

        <span>{action}</span>
      </div>
      <div className="tweet-action share">
        <img src="src/images/Icons/Shares.svg" alt="" />
      </div>
    </div>
  );
}
