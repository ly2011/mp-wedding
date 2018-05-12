import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import goods from './modules/goods';
import home from './modules/home';
import shop from './modules/shop';
import shoplist from './modules/shoplist';
import sys from './modules/sys';
import user from './modules/user';

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
const store = new Vuex.Store({
  modules: {
    sys: {
      namespaced: true,
      ...sys
    },
    user: {
      namespaced: true,
      ...user
    },
    home: {
      namespaced: true,
      ...home
    },
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
  },
  plugins: debug ? [createLogger()] : []
})

export default store
