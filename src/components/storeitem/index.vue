<template>
  <div class="md-storeitem" @click="storeClick">
    <image class="md-storeitem__logo" :src="store.photo" mode="aspectFill" />
    <div class="md-storeitem__info">
      <div class="name">{{store.name}}</div>
      <div class="star_price">
        <star :count="store.star" /> {{store.price}}
      </div>
      <div class="type_km">
        <div class="type">{{store.buztype}}</div>
        <div class="km">{{store.km}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Star from '@/components/star';
export default {
  props: {
    store: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    Star
  },
  methods: {
    storeClick() {
      wx.navigateTo({
        url: '../store/main'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
@import 'node_modules/sass-bem/bem';
$bem-component-namespace: 'md';

@include c('storeitem') {
  background-color: #fff;
  margin-top: 10rpx;
  padding: 20rpx;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  flex-direction: row;

  @include e('logo') {
    width: 180rpx;
    height: 180rpx;
    flex-shrink: 0;
  }

  @include e('info') {
    height: 180rpx;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10rpx;
    margin-left: 10rpx;

    .name {
      color: #111;
      font-size: 40rpx;
      @include text-ellipsis;
    }

    .star_price {
      color: #111;
      font-size: 28rpx;
    }

    .type_km {
      display: flex;
      flex-direction: row;
      color: #777;
      font-size: 28rpx;
      flex-wrap: nowrap;

      .type {
        @include text-ellipsis;
        flex: 1;
      }
    }
  }
}
</style>
