import axios from "axios";
import { BASE_API_URL } from "../utils/baseUrl.config";

const getUserData = async () => {
  const { data } = await axios.get(`${BASE_API_URL}/api/users/8`);
  console.log(data);
  return data;
};

let users = await getUserData();
// console.log(FechUsersData);

function FechUsersData() {
  return users;
}

export default FechUsersData;
