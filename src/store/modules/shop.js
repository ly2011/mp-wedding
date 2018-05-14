// store/modules/shop.js
import {
  GET_STORE_LOCATION,
  SET_STORE_GOODSMORE,
  STORE_OPENLOCATION
} from '@/store/mutations-type';
import { getLocation, openLocation } from '@/utils/wechat';

const state = {
  seeAllGoods: false,
  latitude: 0,
  longitude: 0,
  btnMsg: '查看全部',
  store: {
    id: '001',
    name: '真品婚礼定制',
    photo:
      'http://p0.meituan.net/wedding/87b374004a26ac7d5e1cfd82ba8c73a33341812.jpg%40640w' +
      '_480h_1e_1c_1l%7Cwatermark%3D0',
    star: 4.2,
    starcount: 4,
    buztype: '婚庆公司',
    address: '二环路东五段万达广场8单元2101(近成仁公交站)',
    phone: '18581885527',
    goods: [
      {
        id: '01',
        photo:
          'http://p1.meituan.net/wedding/5c683d257d0a418c146308b455bb5b582651471.jpg%40640w' +
          '_480h_0e_1l%7Cwatermark%3D0',
        name: '热烈如初',
        price: '13800',
        oldprice: '19800',
        selled: '5'
      },
      {
        id: '02',
        photo:
          'http://p1.meituan.net/wedding/adf460e1e88714cb30e118387de0b09e3536225.jpg%40640w' +
          '_480h_0e_1l%7Cwatermark%3D0',
        name: '全包好超值无敌到爆宇宙套餐',
        price: '8800',
        oldprice: '10800',
        selled: '20'
      },
      {
        id: '03',
        photo:
          'http://p0.meituan.net/wedding/4972ddf9c2067c193f6408f006f818c02213163.jpg%40640w' +
          '_480h_0e_1l%7Cwatermark%3D0',
        name: '林中奇缘',
        price: '15800',
        oldprice: '20800',
        selled: '17'
      },
      {
        id: '04',
        photo:
          'http://p1.meituan.net/wedding/8a40a46c24c3f812586853aa5d5cb56d3134895.jpg%40640w' +
          '_480h_0e_1l%7Cwatermark%3D0',
        name: '清新云系婚礼经典款',
        price: '12900',
        oldprice: '15800',
        selled: '10'
      }
    ],

    comments: [
      {
        id: '01',
        comment:
          '之前去吃过仁和春天酒店的餐饮， 觉得菜品还不错，把这家酒店介绍给了朋友，终于上月完成了她的婚礼， 现场布置的很漂亮，宴会厅很高，没有柱子，应该是很不错的厅。餐标' +
          '2888起，中高端的婚宴酒店，服务和品质不错。交通方便，就在2环路边上。酒店比较新，应该是最近几年开业的，整体好评',
        star: 5,
        name: 'llyjessica',
        cover:
          'http://photos.breadtrip.com/avatar_1c_24_a9be5921a59d1743f019c14e5999f51c.jpg-av' +
          'atar.l',
        photo: [
          'http://p0.meituan.net/wedding/d12fbff776107a7517a943dbd7ee9983161817.jpg%40249w_' +
            '249h_0e_1l%7Cwatermark%3D0',
          'http://p1.meituan.net/wedding/ab53686fab6d5bb6c7071cebdbf3719a216669.jpg%40249w_' +
            '249h_0e_1l%7Cwatermark%3D0',
          'http://p1.meituan.net/wedding/8b97535a84f2a65992b0888010261409157060.jpg%40249w_' +
            '249h_0e_1l%7Cwatermark%3D0'
        ]
      },
      {
        id: '02',
        comment:
          '上星期去参加了朋友的婚宴，第一次来人和春天酒店，地理位置很好在二环高架旁，酒店是很漂亮，提前进去看了布景，灯光打下来也很美，真的是很精致的婚礼💒。餐也不错，里' +
          '面的服务态度就不说了很不错。好像是20多桌左右吧！人数还是不能容纳太多，觉得还挺不错的！推荐以后的婚礼和宴席都可以来。',
        star: 4.4,
        name: '挽挽是碗碗',
        cover:
          'http://photos.breadtrip.com/avatar_17_66_dbd2fafd1ba92b26a9c5b5498527f7b7b074323' +
          'f.jpg-avatar.l',
        photo: [
          'http://qcloud.dpfile.com/pc/ZkJc7sTnfN6TPfh3uZRKk_JAboF2uokfXw_zGxiA84KxD7i2kM-B' +
            'C_cjA8iaaz3Z.jpg',
          'http://qcloud.dpfile.com/pc/toSx1AwA9IzWdiWibOpjMYuStN8-efxUhDYTyE3dzdYh8ta1TbMU' +
            'c98hxtu-DcaE.jpg',
          'http://qcloud.dpfile.com/pc/bjVgsQ-36JVg5I_l5zg4nzbYRgzz4lw5qd8ladcKZiuNI2YwUBqh' +
            'ZfAFjKB6H7OK.jpg',
          'http://qcloud.dpfile.com/pc/toSx1AwA9IzWdiWibOpjMYuStN8-efxUhDYTyE3dzdYh8ta1TbMU' +
            'c98hxtu-DcaE.jpg'
        ]
      },
      {
        id: '03',
        comment:
          '婚庆是父母帮偶们挑选的（偶婚前一直不在上海，老公公司很忙 加上大老爷们一个，也知道要看什么……最重要他那品味，不敢相信！品味最好的一次是找到了偶）记得第一次妈妈' +
          '和偶说去看婚庆了，看了一家离家有点距离的婚庆，每次去都要做半小时的车，我就直接说不要定了，换一家，太远！妈妈说婚博会上 他们家人最多，接待的小...',
        star: 3.2,
        name: 'vwvent',
        cover:
          'http://photos.breadtrip.com/avatar_8a_9a_fa4953d7fa5d031e5ae27a3977f30ddab724248' +
          '2.jpg-avatar.l',
        photo: [
          'http://qcloud.dpfile.com/pc/lBypaosyaHwArZJJfoDicae2Nhdu70WB3htMUHpfT7XFZDTpY1jT' +
            'PBtBiShMGWuC.jpg',
          'http://qcloud.dpfile.com/pc/dLY2-bno1t0KVqTLTi-IYHGU966Lb4v2BXMhH1UvE9ymIBGsFPwH' +
            'nH7n9H0hfTx-.jpg',
          'http://qcloud.dpfile.com/pc/m88QI7_3DnpXNzeaVljSTikbJUnStd-qhP_6RpwQyFGBqt4zHfH7' +
            'ZxAF-vPQPR3g.jpg'
        ]
      },
      {
        id: '04',
        comment:
          '第一次去婚博会酒店还没选好，所以就留了个号码，选完酒店后就确认来喜上了。其实本人太懒了不高兴挑来挑去，看看喜上也算婚庆品牌，而且工作人员小冷又态度不错所以其他也' +
          '不高兴看了。第一次去浦东接待定是anna，首先她带我了解了个大致流程和情况，这让云里雾里的我稍微安了点心啊……其次是确认套餐，所有的都可以在套餐里加减。我觉得满' +
          '方便的，有任何问题都可以沟通，不过不要以为来一次就可以了，我来来回回也有4次吧！还有婚庆配套的化妆是宇涵造型的妹子，比我婚纱照化的好多了，这里表扬下。结婚当天我' +
          '什么都不用考虑，会有工作人员提前进场，安排好一切。总之还是很满意的。感谢所有的工作人员。',
        star: 4.8,
        name: '程萍',
        cover:
          'http://photos.breadtrip.com/avatar_7e_99_8666810bacfb8677ef21065623b95139f8e4372' +
          '9.jpg-avatar.l',
        photo: [
          'http://qcloud.dpfile.com/pc/Fz4Td_w4bgVvSiWpda3UOE40huPPApbPqrpIMA4D0lsGKtZVVy10' +
            '_IHGzJTdp2vy.jpg',
          'http://qcloud.dpfile.com/pc/4NcbDPrK74X1TWTV0qWQYgweas83AXNFmF229Z4CJ4j2FNh46a0B' +
            'Hyi7kZsZ1SM1.jpg',
          'http://qcloud.dpfile.com/pc/vh1QKGNYkTnN9QkxU5KRzN-5-e17r35zD8vsfxxOmBrntScy6jnu' +
            '4wG_uQx59kh-.jpg'
        ]
      }
    ]
  }
};

const mutations = {
  [GET_STORE_LOCATION]: (state, { latitude, longitude }) => {
    state.latitude = latitude;
    state.longitude = longitude;
  },
  [SET_STORE_GOODSMORE]: (state, { msg, seeAllGoods }) => {
    state.btnMsg = msg;
    state.seeAllGoods = seeAllGoods;
  }
};

const actions = {
  getLocation: async ({ state, commit }) => {
    try {
      const res = await getLocation('wgs84'); // // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      console.log('location: ', res);

      commit(GET_STORE_LOCATION, res);
    } catch (error) {
      console.log('error', error);
    }
  },
  goodsmore: ({ state, commit }) => {
    let msg = '查看全部';
    if (state.seeAllGoods) {
      msg = '查看全部';
    } else {
      msg = '收起';
    }
    commit(SET_STORE_GOODSMORE, {
      msg,
      seeAllGoods: !state.seeAllGoods
    });
  },
  openLocation: async ({ state, commit }) => {
    try {
      const res = await openLocation({
        latitude: state.latitude, // 纬度，范围为-90~90，负数表示南纬
        longitude: state.longitude, // 经度，范围为-180~180，负数表示西经
        scale: 28, // 缩放比例
        name: '这是那儿呀', // 位置名
        address: '当前位置定位...' // 地址的详细说明
      });
    } catch (error) {}
  },
  // 打电话
  callPhone: ({ state, commit }) => {
    wx.makePhoneCall({
      phoneNumber: '10086'
    });
  }
};

export default {
  state,
  mutations,
  actions
};
