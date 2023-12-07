function TrendsForYou({ trendCountry, hashtag, numberOfTweets }) {
  return (
    <>
      <div>
        <div className="trending-country">
          <p>Trending in {trendCountry}</p>
          <img src="src\images\Icons\more trending informations.png" alt="" />
        </div>

        <p className="hashtag">{hashtag}</p>
        <p>{numberOfTweets} Tweets</p>
      </div>
    </>
  );
}

export default TrendsForYou;
