import { Component } from 'react';
import axios from 'axios';

const LOAD_ADMIN_API_URL = 'http://localhost:8080/api/v1/admins/load';

export default new class AdminService extends Component{

    getAdmindata(id){
        return axios.get(LOAD_ADMIN_API_URL, {
            headers: {
              'ID': id
            }
          })
    }
} 