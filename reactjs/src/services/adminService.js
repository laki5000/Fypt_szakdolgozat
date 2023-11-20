import axios from "axios";

const LOAD_ADMIN_API_URL = "http://localhost:8080/api/v1/admins/load";

const AdminService = {
  getAdmindata: (user_id) => {
    return axios.get(LOAD_ADMIN_API_URL + "/" + user_id);
  },
};
export default AdminService;
