import axios from "axios";

const SAVE_USER_API_URL = "http://localhost:8080/api/v1/users/save";
const LOGIN_USER_API_URL = "http://localhost:8080/api/v1/users/login";
const AUTH_USER_API_URL = "http://localhost:8080/api/v1/users/auth";
const GET_USER_API_URL = "http://localhost:8080/api/v1/users/load";

const UserService = {
  saveUser: (user) => {
    return axios.post(SAVE_USER_API_URL, user);
  },
  loginUser: (user) => {
    return axios.post(LOGIN_USER_API_URL, user);
  },
  authUser: (token) => {
    return axios.get(AUTH_USER_API_URL, {
      headers: {
        Authorization: token,
      },
    });
  },
  getUserByEmail: (email) => {
    return axios.get(GET_USER_API_URL + "/byemail/" + email);
  },
  getUserById: (id) => {
    return axios.get(GET_USER_API_URL + "/byid/" + id);
  },
};
export default UserService;
