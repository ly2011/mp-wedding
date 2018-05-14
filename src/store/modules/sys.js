// sys.js
import { GET_SYSTEM_INFO } from '@/store/mutations-type';
import { getSystemInfo } from '@/utils/wechat';
const state = {
  systemInfo: {}
}

const mutations = {
  [GET_SYSTEM_INFO]: (state, { data }) => {
    state.systemInfo = data
  }
}

const actions = {
  getSystemInfo: async ({ state, commit }) => {
    const systemInfo = await getSystemInfo()

    commit(GET_SYSTEM_INFO, {data: systemInfo})
  }
}

export default {
  state,
  mutations,
  actions
}
