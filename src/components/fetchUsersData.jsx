import axios from "axios";

const getUserData = async () => {
  const { data } = await axios.get(`http://localhost:8000/api/users/8`);
  return data;
};

let users = await getUserData();
// console.log(FechUsersData);

function FechUsersData() {
  return users;
}

export default FechUsersData;
