import { useState } from "react";
import {
  IncerementeOrDecrementeLikes,
  formatLikes,
} from "../utils/actions-buttons-functions";
export default function TweetActions({ value }) {
  let formatLike = formatLikes(value.reactions);
  const [action, setActions] = useState(formatLikes(value.reactions));

  const [iconeLikeOutline, setIconeLikeOutline] = useState(
    <ion-icon name="heart-outline"></ion-icon>
  );
  const [iconeLikSharp, setIconeLikSharp] = useState(
    <ion-icon name="heart" id="sharp"></ion-icon>
  );

  function IncrementToggle() {
    let likes = IncerementeOrDecrementeLikes(value);
    setActions(formatLikes(likes));
    // setIconeLike(iconeLikSharp);
  }

  return (
    <div className="flex justify-center items-center gap-20 text[grey]">
      <div className="tweet-action reply">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.0459 0.242002L7.89795 0.232002H7.89595C3.52195 0.232002 0.0959473 3.659 0.0959473 8.034C0.0959473 12.132 3.28195 15.24 7.56095 15.404V19.232C7.56095 19.34 7.60495 19.518 7.68095 19.635C7.82295 19.86 8.06495 19.982 8.31295 19.982C8.45095 19.982 8.58995 19.944 8.71495 19.864C8.97895 19.696 15.1879 15.724 16.8029 14.358C18.7049 12.748 19.8429 10.388 19.8459 8.046V8.029C19.8399 3.662 16.4159 0.242002 12.0459 0.241002V0.242002ZM15.8329 13.214C14.6989 14.174 10.9709 16.619 9.06095 17.857V14.67C9.06095 14.256 8.72595 13.92 8.31095 13.92H7.91495C4.25495 13.92 1.59695 11.444 1.59695 8.034C1.59695 4.5 4.36495 1.732 7.89695 1.732L12.0439 1.742H12.0459C15.5779 1.742 18.3459 4.508 18.3479 8.038C18.3449 9.948 17.4059 11.882 15.8339 13.214H15.8329Z"
            fill="#D9D9D9"
          />
        </svg>

        <span>{value.reply}</span>
      </div>
      <div className="tweet-action retweet">
        <svg
          width="24"
          height="18"
          viewBox="0 0 24 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="idRetweet"
        >
          <path
            d="M23.77 12.67C23.478 12.377 23.003 12.377 22.71 12.67L20.49 14.89V4.65C20.49 2.582 18.807 0.899998 16.74 0.899998H10.89C10.476 0.899998 10.14 1.236 10.14 1.65C10.14 2.064 10.476 2.4 10.89 2.4H16.74C17.98 2.4 18.99 3.41 18.99 4.65V14.89L16.77 12.67C16.477 12.377 16.002 12.377 15.71 12.67C15.418 12.963 15.416 13.438 15.71 13.73L19.21 17.23C19.355 17.377 19.547 17.45 19.74 17.45C19.933 17.45 20.123 17.378 20.27 17.23L23.77 13.73C24.064 13.438 24.064 12.963 23.77 12.67ZM13.11 15.95H7.25997C6.01997 15.95 5.00997 14.94 5.00997 13.7V3.46L7.22997 5.68C7.37797 5.827 7.56997 5.9 7.76197 5.9C7.95397 5.9 8.14597 5.827 8.29197 5.68C8.58497 5.387 8.58497 4.912 8.29197 4.62L4.79197 1.12C4.49897 0.825998 4.02397 0.825998 3.73197 1.12L0.231975 4.62C-0.0620254 4.912 -0.0620254 5.387 0.231975 5.68C0.525975 5.973 0.998975 5.973 1.29197 5.68L3.51197 3.46V13.7C3.51197 15.768 5.19497 17.45 7.26197 17.45H13.112C13.526 17.45 13.862 17.114 13.862 16.7C13.862 16.286 13.525 15.95 13.112 15.95H13.11Z"
            fill="#D9D9D9"
          />
        </svg>

        <span>{value.retweet}</span>
      </div>
      <div className="tweet-action reactions" onClick={IncrementToggle}>
        {}
        {value.isLiked ? iconeLikSharp : iconeLikeOutline}

        <span>{action}</span>
      </div>
      <div className="tweet-action share">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.53 5.47L10.53 0.470002C10.237 0.177002 9.76201 0.177002 9.47001 0.470002L4.47001 5.47C4.17601 5.763 4.17601 6.238 4.47001 6.53C4.76401 6.822 5.23701 6.824 5.53001 6.53L9.25001 2.81V13C9.25001 13.414 9.58601 13.75 10 13.75C10.414 13.75 10.75 13.414 10.75 13V2.81L14.47 6.53C14.616 6.677 14.808 6.75 15 6.75C15.192 6.75 15.384 6.678 15.53 6.53C15.823 6.237 15.823 5.763 15.53 5.47Z"
            fill="#D9D9D9"
          />
          <path
            d="M17.708 19.944H2.292C1.028 19.944 0 18.916 0 17.652V12C0 11.586 0.336 11.25 0.75 11.25C1.164 11.25 1.5 11.586 1.5 12V17.652C1.5 18.089 1.855 18.444 2.292 18.444H17.708C18.145 18.444 18.5 18.089 18.5 17.652V12C18.5 11.586 18.836 11.25 19.25 11.25C19.664 11.25 20 11.586 20 12V17.652C20 18.916 18.972 19.944 17.708 19.944Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
    </div>
  );
}
