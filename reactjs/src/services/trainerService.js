import axios from "axios";

const SAVE_TRAINER_API_URL = "http://localhost:8080/api/v1/trainers/save";
const LOAD_TRAINER_APPLICATIONS_API_URL =
  "http://localhost:8080/api/v1/trainers/load/applications";
const GET_TRAINER_API_URL = "http://localhost:8080/api/v1/trainers/load";
const GET_TRAINER_BY_USER_ID_API_URL =
  "http://localhost:8080/api/v1/trainers/load/byuserid";
const DELETE_TRAINER_BY_ID_API_URL =
  "http://localhost:8080/api/v1/trainers/delete/";

const TrainerService = {
  saveTrainer: (trainer) => {
    return axios.post(SAVE_TRAINER_API_URL, trainer);
  },
  loadtrainersAndUsers(hiteles) {
    return axios.get(LOAD_TRAINER_APPLICATIONS_API_URL, {
      headers: {
        Hiteles: hiteles,
      },
    });
  },
  getTrainer(id) {
    return axios.get(GET_TRAINER_API_URL, {
      headers: {
        Id: id,
      },
    });
  },
  getTrainerByUserId(user_id) {
    return axios.get(GET_TRAINER_BY_USER_ID_API_URL, {
      headers: {
        UserId: user_id,
      },
    });
  },
  deleteTrainer(id) {
    return axios.delete(DELETE_TRAINER_BY_ID_API_URL + id);
  },
};
export default TrainerService;
