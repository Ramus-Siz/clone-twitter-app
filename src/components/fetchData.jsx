import axios from "axios";

const getData = async () => {
  const { data } = await axios.get(
    `https://65c0d3fcdc74300bce8cce71.mockapi.io/data/tweets`
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
