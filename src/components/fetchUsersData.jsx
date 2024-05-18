import axios from "axios";

const getUserData = async () => {
  const { data } = await axios.get(`http://localhost:8002/api/users/8`);
  console.log(data);
  return data;
};

let users = await getUserData();
// console.log(FechUsersData);

function FechUsersData() {
  return users;
}

export default FechUsersData;
