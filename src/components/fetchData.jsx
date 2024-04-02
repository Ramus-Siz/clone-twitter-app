import axios from "axios";

const getData = async () => {
  const { data } = await axios.get(
    `http://rafiki-twitter.onrender.com/api/tweets`
  );
  const tweets = data.reverse();
  return tweets;
};

let tweets = await getData();
console.log(tweets);

function FechTweetsData() {
  return tweets;
}

export default FechTweetsData;
