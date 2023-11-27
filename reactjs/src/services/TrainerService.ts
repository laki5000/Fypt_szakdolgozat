import axios from "axios";

const SAVE_TRAINER_API_URL = "http://localhost:8080/api/v1/trainers/save";
const GET_TRAINER_API_URL = "http://localhost:8080/api/v1/trainers/load";
const DELETE_TRAINER_API_URL = "http://localhost:8080/api/v1/trainers/delete";

const TrainerService = {
  saveTrainer: (trainer) => {
    return axios.post(SAVE_TRAINER_API_URL, trainer);
  },
  getTrainerByUserid: (userid) => {
    return axios.get(GET_TRAINER_API_URL + "/byuserid/" + userid);
  },
  deleteTrainer: (id) => {
    return axios.delete(DELETE_TRAINER_API_URL + "/" + id);
  },
};
export default TrainerService;
