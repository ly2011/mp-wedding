import Vue from 'vue';
import App from './App';
import store from './store';

Vue.config.productionTip = false;
App.mpType = 'app';

Vue.prototype.$store = store;

const app = new Vue({
  // store,
  ...App
});
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      'pages/logs/main',
      '^pages/index/main',
      'pages/storelist/main',
      'pages/store/main',
      'pages/goods/main',
      'pages/taxi/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#181818',
      navigationBarTitleText: '婚礼纪',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: '#666666',
      selectedColor: '#000000',
      borderStyle: 'white',
      backgroundColor: '#f8f9fb',
      list: [
        {
          text: '主页',
          pagePath: 'pages/index/main',
          iconPath: 'static/images/i01.png',
          selectedIconPath: 'static/images/i01.png'
        }, {
          text: '拼车',
          pagePath: 'pages/taxi/main',
          iconPath: 'static/images/i02.png',
          selectedIconPath: 'static/images/i02.png'
        }
      ]
    }
  }
};
