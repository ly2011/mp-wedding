// user.js
import { GET_USER_INFO } from '@/store/mutations-type';
import { getUserInfo, login } from '@/utils/wechat';
const state = {
  userInfo: {}
}

const mutations = {
  [GET_USER_INFO]: (state, {data}) => {
    state.userInfo = data
  }
}

const actions = {
  getUserInfo: async ({ state, commit }) => {
    // if (state.userInfo) {
    //   return
    // }
    try {
      await login()
      const data = await getUserInfo()
      commit(GET_USER_INFO, {data: data.userInfo})
    } catch (error) {
    }
  }
}

export default {
  state,
  mutations,
  actions
}
