// user.js
import { GET_USER_INFO } from '@/store/mutations-type';
import { getUserInfo, login } from '@/utils/wechat';
const state = {
  userInfo: null
}

const mutations = {
  [GET_USER_INFO]: (state, {data}) => {
    state.userInfo = data
  }
}

const actions = {
  getUserInfo: async({state, commit}) => {
    // if (state.userInfo) {
    //   return
    // }
    try {
      console.log('====================================');
      console.log('getUserInfo request');
      console.log('====================================');

      await login()
      const data = await getUserInfo()
      console.log('====================================');
      console.log('userInfo: ', data);
      console.log('====================================');
      commit(GET_USER_INFO, {data: data.userInfo})
    } catch (error) {
      console.log('====================================');
      console.log('request error', error);
      console.log('====================================');
    }
  }
}

export default {
  state,
  mutations,
  actions
}
