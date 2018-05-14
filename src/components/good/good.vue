<template>
  <div class="md-good" @click="goodDetail">
    <image class="md-good__logo" :src="good.url" mode="aspectFill" />
    <div class="md-good__mask"></div>
    <div class="md-good__info">
      <div class="md-good__title">
        <text>{{good.name}}</text>
      </div>
      <div class="md-good__detail">
        <div class="md-good__timeinfo">
          <text>{{good.address}}</text>
        </div>
        <div class="md-good__address">
          <text>{{good.km}}</text>
        </div>
      </div>
    </div>

    <div class="md-good__bottom">
      <div class="price">￥{{good.price}}</div>
      <div class="oldprice">￥{{good.oldPrice}}</div>
      <div class="selled">已售{{good.sell}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    good: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    goodDetail() {
      // wx.navigateTo({
      //   url: '../goods/goods'
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/sass-bem/bem';
$bem-component-namespace: 'md';

@include c('good') {
  overflow: hidden;
  position: relative;
  border-radius: 8rpx;
  margin: 15rpx;

  @include e('logo') {
    width: 100%;
    height: 375rpx;
    vertical-align: bottom;
  }

  @include e('mask') {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    height: 100%;
    width: 560rpx;
    border-top-left-radius: 8rpx;
    border-bottom-left-radius: 8rpx;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.6)0, rgba(0, 0, 0, 0)100%);
  }

  @include e('info') {
    position: absolute;
    top: 30rpx;
    left: 12rpx;
    z-index: 2;
    overflow: hidden;
  }

  @include e('title') {
    color: #fff;
    font-size: 40rpx;
    margin-bottom: 10rpx;

    text {
      overflow: hidden;
      text-overflow: ellipsis;
      text-shadow: 2rpx 2rpx rgba(0, 0, 0, 0.4);
      -webkit-line-clamp: 2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }
  }

  @include e('detail') {
    position: relative;
    padding-left: 36rpx;

    @include e('timeinfo') {
      color: #fff;
      font-size: 22rpx;
      line-height: 1;

      text {
        margin-right: 20rpx;
      }
    }

    @include e('address') {
      color: #fff;
      font-size: 22rpx;
      line-height: 1;
      margin-top: 6rpx;
    }

    &:before {
      content: '';
      position: absolute;
      top: 4rpx;
      left: 24rpx;
      width: 6rpx;
      height: 100%;
      background-color: #4abdcc;
    }
  }

  @include e('bottom') {
    position: absolute;
    left: 25rpx;
    bottom: 20rpx;
    z-index: 2;
    color: #fff;
    font-size: 22rpx;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    width: 600rpx;
    align-items: flex-end;

    .price {
      color: #f63;
      font-size: 30rpx;
      margin-right: 14rpx;
    }

    .oldprice {
      color: #fff;
      font-size: 22rpx;
      text-decoration: line-through;
      flex: 1;
    }

    .selled {
      color: #fff;
      font-size: 22rpx;
    }
  }
}

</style>
