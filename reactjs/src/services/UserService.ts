import axios from "axios";

const SAVE_USER_API_URL = "http://localhost:8080/api/v1/users/save";
const GET_USER_API_URL = "http://localhost:8080/api/v1/users/load";

const UserService = {
  saveUser: (user) => {
    return axios.post(SAVE_USER_API_URL, user);
  },

  getUserByEmail: (email) => {
    return axios.get(GET_USER_API_URL + "/byemail/" + email);
  },
};
export default UserService;
