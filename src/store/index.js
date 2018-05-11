import Vue from 'vue'
import Vuex from 'vuex'

import goods from './modules/goods'
import shop from './modules/shop'
import shoplist from './modules/shoplist'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    goods: {
      namespaced: true,
      ...goods
    },
    shop: {
      namespaced: true,
      ...shop
    },
    shoplist: {
      namespaced: true,
      ...shoplist
    }
  }
})

export default store
