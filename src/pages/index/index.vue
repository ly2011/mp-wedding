<template>
  <div class="md-index">
    <button open-type="getUserInfo" v-show="!userInfo">获取用户信息</button>
    <div class="md-index__content">
      <scroll-view class="md-index__scroller" :style="scrollViewStyle"  scroll-y="true" lower-threshold="800" bindscrolltolower="loadmore">
        <swiper class="md-index__banners" indicator-dots="true" autoplay="true" interval="4000" duration="1000" indicator-color="#60ffff" indicator-active-color="#fff">
          <block v-for="(item, index) in banner" :key="index">
            <swiper-item>
              <image  :src="item" class="md-index__banner" mode="aspectFill"/>
            </swiper-item>
          </block>
        </swiper>

        <div class="md-index__funcs">
          <div class="md-index__func" v-for="item in functions" :key="item.id" @click="fucClick">
            <image :src="item.url" mode="aspectFill" />
            <div class="md-index__name">{{item.name}}</div>
          </div>
        </div>

        <view class="md-index__maylike">
          <view class="md-index__title">猜你喜欢</view>
          <view class="md-index__goods">
            <block v-for="(good, index) in goods" :key="index">
              <good :good="good"></good>
            </block>
          </view>
        </view>
      </scroll-view>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import Good from '@/components/good/good'

export default {
  data() {
    return {
      width: 0,
      height: 0
    };
  },
  computed: {
    ...mapState('user', ['userInfo']),
    ...mapState('sys', ['systemInfo']),
    ...mapState('home', ['banner', 'functions', 'goods']),
    scrollViewStyle() {
      // return `width:${this.width}px;height:${this.height}px`
    }
  },
  components: {
    Good
  },

  methods: {
    bindViewTap() {
      const url = '../logs/main';
      wx.navigateTo({ url });
    },
    fucClick() {
      wx.navigateTo({
        url: '../storelist/main'
      })
    }
  },

  created() {

  }
};
</script>

<style lang="scss" scoped>
@import 'node_modules/sass-bem/bem';
$bem-component-namespace: 'md';

@include c('index') {
  background-color: #f0f0f0;
  @include e('banner') {
    width: 100%;
    height: 411px;
  }
  @include e('funcs') {
    background-color: #fff;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    padding: 20rpx 0 0 0;
  }

  @include e('func') {
    width: 25%;
    text-align: center;
    margin-bottom: 30rpx;

    image {
      width: 100rpx;
      height: 100rpx;
      text-align: center;
    }

    @include e('name') {
      text-align: center;
      color: #666;
      font-size: 26rpx;
      margin-top: 10rpx;
    }
  }

  @include e('maylike') {
    background-color: #fff;
    margin-top: 30rpx;
    padding-top: 20rpx;

    @include e('title') {
      color: #808080;
      font-size: 28rpx;
      margin-left: 28rpx;
      margin-top: -10rpx;
    }
  }

}
</style>
