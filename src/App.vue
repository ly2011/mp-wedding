<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  data() {
    return {
      // systemInfo: null,
      // userInfo: null
    };
  },
  computed: {
    ...mapState('sys', ['systemInfo']),
    ...mapState('user', ['userInfo'])
  },
  created() {
    // 调用API从本地缓存中获取数据
    const that = this;
    const logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    console.log('app created and cache logs by setStorageSync');

    this.fetchData();

    // wx.getSystemInfo({
    //   success: function(res) {
    //     that.systemInfo = res;
    //   }
    // });
  },
  methods: {
    ...mapActions('sys', ['getSystemInfo']),
    ...mapActions('user', ['getUserInfo']),
    async fetchData() {
      await this.getSystemInfo();
      await this.getUserInfo();
      await Promise.all([this.getSystemInfo(), this.getUserInfo()])
    }

    // getUserInfo: function(cb) {
    //   var that = this;
    //   if (this.userInfo) {
    //     typeof cb == 'function' && cb(this.userInfo);
    //   } else {
    //     // 调用登录接口
    //     wx.login({
    //       success: function() {
    //         wx.getUserInfo({
    //           success: function(res) {
    //             that.userInfo = res.userInfo;
    //             typeof cb == 'function' && cb(that.userInfo);
    //           }
    //         });
    //       }
    //     });
    //   }
    // }
  }
};
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
