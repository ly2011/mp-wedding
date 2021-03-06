// store/modules/shoplist.js
import { CHANGE_STORELIST_NAV, CHANGE_STORELIST_SHOWSPINNER, GET_STORELIST_SPINNERS } from '@/store/mutations-type';
const state = {
  selectedNav: '00',
  // width: windowWidth,
  showspinner: false,
  nearby: [
    {
      name: '附近（智能范围）',
      id: 'a01'
    }, {
      name: '500米',
      id: 'a02'
    }, {
      name: '1000米',
      id: 'a03'
    }, {
      name: '2000米',
      id: 'a04'
    }, {
      name: '5000米',
      id: 'a05'
    }
  ],
  sort: [
    {
      name: '全部',
      id: 'b00'
    }, {
      name: '婚礼策划',
      id: 'b01'
    }, {
      name: '婚纱摄影',
      id: 'b02'
    }, {
      name: '婚宴酒店',
      id: 'b03'
    }, {
      name: '婚礼用车',
      id: 'b04'
    }, {
      name: '婚礼用品',
      id: 'b05'
    }, {
      name: '金银首饰',
      id: 'b06'
    }
  ],
  rank: [
    {
      name: '智能排序',
      id: 'c00'
    }, {
      name: '离我最近',
      id: 'c01'
    }, {
      name: '人气最高',
      id: 'c02'
    }, {
      name: '评价最好',
      id: 'c03'
    }, {
      name: '人均最低',
      id: 'c04'
    }, {
      name: '人均最高',
      id: 'c05'
    }
  ],
  spinners: [],
  storelist: [
    {
      name: '仁和春天酒店·婚宴',
      photo: 'http://p0.meituan.net/wedding/d577b0c3f3f5c382f7b33ed0d54366843826610.jpg%40630w' +
          '_380h_1e_1c_1l%7Cwatermark%3D0',
      star: 4.4,
      price: '1599元/桌起',
      buztype: '星级酒店',
      km: '1.6km'
    }, {
      name: '真品婚礼定制',
      photo: 'http://p0.meituan.net/wedding/87b374004a26ac7d5e1cfd82ba8c73a33341812.jpg%40640w' +
          '_480h_1e_1c_1l%7Cwatermark%3D0',
      star: 2.8,
      price: '￥8000',
      buztype: '婚庆公司',
      km: '2.1km'
    }, {
      name: 'SHINE茜恩婚纱(滨江店)',
      photo: 'http://p0.meituan.net/wedding/a2300d1d4d959296c3fdacaca27d9e931510025.jpg%40640w' +
          '_480h_1e_1c_1l%7Cwatermark%3D0',
      star: 1.1,
      price: '￥9000',
      buztype: '婚纱礼服',
      km: '3.2km'
    }, {
      name: '风尚国际婚纱(外景领导品牌)',
      photo: 'http://p1.meituan.net/wedding/93103e7f5b18b92a80374650ca33c4ca2012836.jpg%40640w' +
          '_480h_0e_1l%7Cwatermark%3D0',
      star: 3.5,
      price: '￥4888',
      buztype: '影楼',
      km: '4.5km'
    }, {
      name: '仁和春天酒店·婚宴',
      photo: 'http://p0.meituan.net/wedding/d577b0c3f3f5c382f7b33ed0d54366843826610.jpg%40630w' +
          '_380h_1e_1c_1l%7Cwatermark%3D0',
      star: 4.4,
      price: '1599元/桌起',
      buztype: '星级酒店',
      km: '1.6km'
    }, {
      name: '真品婚礼定制',
      photo: 'http://p0.meituan.net/wedding/87b374004a26ac7d5e1cfd82ba8c73a33341812.jpg%40640w' +
          '_480h_1e_1c_1l%7Cwatermark%3D0',
      star: 2.8,
      price: '￥8000',
      buztype: '婚庆公司',
      km: '2.1km'
    }, {
      name: 'SHINE茜恩婚纱(滨江店)',
      photo: 'http://p0.meituan.net/wedding/a2300d1d4d959296c3fdacaca27d9e931510025.jpg%40640w' +
          '_480h_1e_1c_1l%7Cwatermark%3D0',
      star: 1.1,
      price: '￥9000',
      buztype: '婚纱礼服',
      km: '3.2km'
    }, {
      name: '风尚国际婚纱(外景领导品牌)',
      photo: 'http://p1.meituan.net/wedding/93103e7f5b18b92a80374650ca33c4ca2012836.jpg%40640w' +
          '_480h_0e_1l%7Cwatermark%3D0',
      star: 3.5,
      price: '￥4888',
      buztype: '影楼',
      km: '4.5km'
    }, {
      name: '仁和春天酒店·婚宴',
      photo: 'http://p0.meituan.net/wedding/d577b0c3f3f5c382f7b33ed0d54366843826610.jpg%40630w' +
          '_380h_1e_1c_1l%7Cwatermark%3D0',
      star: 4.4,
      price: '1599元/桌起',
      buztype: '星级酒店',
      km: '1.6km'
    }, {
      name: '真品婚礼定制',
      photo: 'http://p0.meituan.net/wedding/87b374004a26ac7d5e1cfd82ba8c73a33341812.jpg%40640w' +
          '_480h_1e_1c_1l%7Cwatermark%3D0',
      star: 2.8,
      price: '￥8000',
      buztype: '婚庆公司',
      km: '2.1km'
    }, {
      name: 'SHINE茜恩婚纱(滨江店)',
      photo: 'http://p0.meituan.net/wedding/a2300d1d4d959296c3fdacaca27d9e931510025.jpg%40640w' +
          '_480h_1e_1c_1l%7Cwatermark%3D0',
      star: 1.1,
      price: '￥9000',
      buztype: '婚纱礼服',
      km: '3.2km'
    }, {
      name: '风尚国际婚纱(外景领导品牌)',
      photo: 'http://p1.meituan.net/wedding/93103e7f5b18b92a80374650ca33c4ca2012836.jpg%40640w' +
          '_480h_0e_1l%7Cwatermark%3D0',
      star: 3.5,
      price: '￥4888',
      buztype: '影楼',
      km: '4.5km'
    }, {
      name: '仁和春天酒店·婚宴',
      photo: 'http://p0.meituan.net/wedding/d577b0c3f3f5c382f7b33ed0d54366843826610.jpg%40630w' +
          '_380h_1e_1c_1l%7Cwatermark%3D0',
      star: 4.4,
      price: '1599元/桌起',
      buztype: '星级酒店',
      km: '1.6km'
    }, {
      name: '真品婚礼定制',
      photo: 'http://p0.meituan.net/wedding/87b374004a26ac7d5e1cfd82ba8c73a33341812.jpg%40640w' +
          '_480h_1e_1c_1l%7Cwatermark%3D0',
      star: 2.8,
      price: '￥8000',
      buztype: '婚庆公司',
      km: '2.1km'
    }, {
      name: 'SHINE茜恩婚纱(滨江店)',
      photo: 'http://p0.meituan.net/wedding/a2300d1d4d959296c3fdacaca27d9e931510025.jpg%40640w' +
          '_480h_1e_1c_1l%7Cwatermark%3D0',
      star: 1.1,
      price: '￥9000',
      buztype: '婚纱礼服',
      km: '3.2km'
    }, {
      name: '风尚国际婚纱(外景领导品牌)',
      photo: 'http://p1.meituan.net/wedding/93103e7f5b18b92a80374650ca33c4ca2012836.jpg%40640w' +
          '_480h_0e_1l%7Cwatermark%3D0',
      star: 3.5,
      price: '￥4888',
      buztype: '影楼',
      km: '4.5km'
    }
  ]
}

const mutations = {
  [CHANGE_STORELIST_NAV]: (state, { data }) => {
    state.selectedNav = data
  },
  [CHANGE_STORELIST_SHOWSPINNER]: (state, { data }) => {
    state.showspinner = data
  },
  [GET_STORELIST_SPINNERS]: (state, { data }) => {
    state.spinners = data
  }
}

const actions = {
  changeNav: async ({ state, commit }, id) => {
    console.log('====================================');
    console.log('id: ', id);
    console.log('====================================');
    if (id == state.selectedNav) {
      id = '00';
      commit(CHANGE_STORELIST_SHOWSPINNER, {data: false})
    } else {
      commit(CHANGE_STORELIST_SHOWSPINNER, {data: true})
    }
    console.log('====================================');
    console.log('id-2: ', id);
    console.log('====================================');
    commit(CHANGE_STORELIST_NAV, { data: id })
    let temps = state.spinners;
    if (id == '02') {
      temps = state.sort;
    } else if (id == '03') {
      temps = state.rank
    } else if (id == '01') {
      temps = state.nearby
    }
    commit(GET_STORELIST_SPINNERS, {data: temps})
  },
  closeSpinner: ({state, commit}) => {
    commit(CHANGE_STORELIST_SHOWSPINNER, {data: false})
  }
}

export default {
  state,
  mutations,
  actions
}
