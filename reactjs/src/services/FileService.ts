import axios from "axios";

const UPLOAD_IMAGE_API_URL = "http://localhost:8080/api/files/upload";

const FileService = {
  uploadImage: (userid, image) => {
    return axios.post(UPLOAD_IMAGE_API_URL + "/" + userid, image);
  },
};
export default FileService;
