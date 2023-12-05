import axios from 'axios';

export default {

  addExercise(newExercise) {
    return axios.post('/exercise', newExercise)
  },

  getExerciseByUserId(userId) {
    return axios.get(`/exercise/${userId}`)
  }
}