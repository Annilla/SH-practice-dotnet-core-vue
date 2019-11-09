import { apiService } from '../js/api.service'

export const actions = {
  async getUserData({ commit }) {
    try {
      const response = await apiService.searchUser.request('Annilla');
      commit('updateUserData', response.data);
    } catch(err) {
      // console.error(err);
    }
  },
};