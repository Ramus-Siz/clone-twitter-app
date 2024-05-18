import axios from "axios";
import { BASE_API_URL } from "../utils/baseUrl.config";

const getData = async () => {
  const { data } = await axios.get(`${BASE_API_URL}/api/tweets`);
  const tweets = data.reverse();
  return tweets;
};

let tweets = await getData();
console.log(tweets);

function FechTweetsData() {
  return tweets;
}

export default FechTweetsData;
