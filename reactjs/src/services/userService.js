import axios from "axios";

const LOAD_ALL_USER_API_URL = "http://localhost:8080/api/v1/users/load/all";
const LOAD_USER_API_URL = "http://localhost:8080/api/v1/users/load";
const LOAD_BY_EMAIL_USER_API_URL =
  "http://localhost:8080/api/v1/users/load/byemail";
const LOGIN_USER_API_URL = "http://localhost:8080/api/v1/users/login";
const AUTH_USER_API_URL = "http://localhost:8080/api/v1/users/auth";
const SAVE_USER_API_URL = "http://localhost:8080/api/v1/users/save";
const DELETE_USER_BY_ID_API_URL = "http://localhost:8080/api/v1/users/delete/";

const UserService = {
  getAllUser: () => {
    return axios.get(LOAD_ALL_USER_API_URL);
  },
  getUserdata: (id) => {
    return axios.get(LOAD_USER_API_URL, {
      headers: {
        ID: id,
      },
    });
  },
  getUserdataByEmail: (email) => {
    return axios.get(LOAD_BY_EMAIL_USER_API_URL, {
      headers: {
        Email: email,
      },
    });
  },
  authUser: (token) => {
    return axios.get(AUTH_USER_API_URL, {
      headers: {
        Authorization: token,
      },
    });
  },
  saveUser: (user) => {
    return axios.post(SAVE_USER_API_URL, user);
  },
  loginUser: (user) => {
    return axios.post(LOGIN_USER_API_URL, user);
  },
  deleteUser(id) {
    return axios.delete(DELETE_USER_BY_ID_API_URL + id);
  },
  getAge: (dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  },
};
export default UserService;
