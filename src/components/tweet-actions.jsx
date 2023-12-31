import { useState } from "react";
import { useContext } from "react";
import { tweetContext } from "../contexts";

export default function TweetActions() {
  const data = useContext(tweetContext);
  const [action, setActions] = useState(0);

  function IncrementToggle() {
    setActions(action + 1);
  }

  return (
    <div className="tweet-actions">
      <div className="tweet-action reply">
        <img src="src/images/Icons/Replys.svg" alt="" />
        <span>{data.reply}</span>
      </div>
      <div className="tweet-action retweet">
        <img src="src/images/Icons/Retweets.svg" alt="" />
        <span>{data.retweet}</span>
      </div>
      <div className="tweet-action reactions" onClick={IncrementToggle}>
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="#6E767D"
          id="reactionsId"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 18.5317H9.98834C7.83584 18.4917 1.62501 12.88 1.62501 7.565C1.62501 5.01167 3.72917 2.77 6.12751 2.77C8.03584 2.77 9.31918 4.08667 9.99918 5.045C10.6775 4.08833 11.9608 2.77 13.87 2.77C16.27 2.77 18.3733 5.01167 18.3733 7.56583C18.3733 12.8792 12.1617 18.4908 10.0092 18.53H10V18.5317ZM6.12834 4.02083C4.39501 4.02083 2.87584 5.6775 2.87584 7.56667C2.87584 12.35 8.73751 17.23 10.0008 17.2817C11.2658 17.23 17.1258 12.3508 17.1258 7.56667C17.1258 5.6775 15.6067 4.02083 13.8733 4.02083C11.7667 4.02083 10.59 6.4675 10.58 6.49167C10.3883 6.96 9.61668 6.96 9.42418 6.49167C9.41251 6.46667 8.23667 4.02083 6.12917 4.02083H6.12834Z" />
        </svg>

        <span>{data.reactions + action}</span>
      </div>
      <div className="tweet-action share">
        <img src="src/images/Icons/Shares.svg" alt="" />
      </div>
    </div>
  );
}
