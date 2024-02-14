import { Link } from "react-router-dom";
import InputTweetSearch from "../tweet-search/input-tweet-search";
import TrendsForYou from "./trends-for-you";
import ShowMore from "../show-more/show-more";
import FollowList from "../follow-list/follow-list";

function Trends() {
  return (
    <>
      <div className="trends">
        <InputTweetSearch />
        <div className="trends-for-you">
          <div className="trend-for-you-title">
            <h2>Trends for you</h2>
            <img src="src\images\Icons\Settings.png" alt="" />
          </div>
          <TrendsForYou
            trendCountry={"Turkey"}
            hashtag={"#SQUID"}
            numberOfTweets={"2,066"}
          />
          <TrendsForYou
            trendCountry={"Turkey"}
            hashtag={"#SQUID"}
            numberOfTweets={"2,066"}
          />
          <TrendsForYou
            trendCountry={"Turkey"}
            hashtag={"#SQUID"}
            numberOfTweets={"2,066"}
          />
          <Link>
            <ShowMore />
          </Link>
        </div>
        <div>
          <FollowList />
        </div>
      </div>
    </>
  );
}
export default Trends;
