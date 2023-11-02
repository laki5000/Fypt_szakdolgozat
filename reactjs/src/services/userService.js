import { Component } from 'react';
import axios from 'axios';

const LOAD_USER_API_URL = 'http://localhost:8080/api/v1/users/load';
const LOAD_BY_EMAIL_USER_API_URL = 'http://localhost:8080/api/v1/users/load/byemail';
const LOGIN_USER_API_URL = 'http://localhost:8080/api/v1/users/login';
const AUTH_USER_API_URL = 'http://localhost:8080/api/v1/users/auth';
const SAVE_USER_API_URL = 'http://localhost:8080/api/v1/users/save';

export default new class UserService extends Component{

    getUserdata(id){
        return axios.get(LOAD_USER_API_URL, {
            headers: {
              'ID': id
            }
          })
    }

    getUserdataByEmail(email){
      return axios.get(LOAD_BY_EMAIL_USER_API_URL, {
          headers: {
            'Email': email
          }
        })
    }

    authUser(token){
        return axios.get(AUTH_USER_API_URL, {
            headers: {
              'Authorization': token
            }
          })
    }

    saveUser(user){
        return axios.post(SAVE_USER_API_URL, user);
    }

    loginUser(user){
        return axios.post(LOGIN_USER_API_URL, user);
    }
} 