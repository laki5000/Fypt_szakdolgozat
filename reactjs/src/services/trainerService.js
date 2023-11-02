import { Component } from 'react';
import axios from 'axios';

const SAVE_TRAINER_API_URL = 'http://localhost:8080/api/v1/trainers/save';
const LOAD_TRAINER_APPLICATIONS_API_URL = 'http://localhost:8080/api/v1/trainers/load/applications';
const GET_TRAINER_API_URL = 'http://localhost:8080/api/v1/trainers/load';


export default new class TrainerService extends Component{
    saveTrainer(trainer){
        return axios.post(SAVE_TRAINER_API_URL, trainer);
    }

    loadTrainerApplications(hiteles){
        return axios.get(LOAD_TRAINER_APPLICATIONS_API_URL, {
            headers: {
              'Hiteles': hiteles
            }
          })
    }

    getTrainer(id){
      return axios.get(GET_TRAINER_API_URL, {
          headers: {
            'Id': id
          }
        })
  }
} 