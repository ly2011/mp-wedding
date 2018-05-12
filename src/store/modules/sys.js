// sys.js
import { GET_SYSTEM_INFO } from '@/store/mutations-type';
import { getSystemInfo } from '@/utils/wechat';
const state = {
  systemInfo: null
}

const mutations = {
  [GET_SYSTEM_INFO]: (state, {data}) => {
    state.systemInfo = data
  }
}

const actions = {
  getSystemInfo: async ({ state, commit }) => {
    console.log('====================================');
    console.log('我被请求了。。。');
    console.log('====================================');
    const systemInfo = await getSystemInfo()
    commit(GET_SYSTEM_INFO, {data: systemInfo})
  }
}

export default {
  state,
  mutations,
  actions
}
