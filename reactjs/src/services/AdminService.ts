import axios from "axios";

const GET_ADMIN_API_URL = "http://localhost:8080/api/v1/admins/load";

const AdminService = {
  getAdminByUserid: (userid) => {
    return axios.get(GET_ADMIN_API_URL + "/byuserid/" + userid);
  },
};
export default AdminService;
