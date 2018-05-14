<template>
  <div class="star-rating">
    <block v-for="(i, index) in [1, 2, 3, 4, 5]" :key="index">
      <image src="/static/images/arrow01.png" v-if="i <= count" />
      <image src="/static/images/arrow02.png" v-if="i > count && i - 1 < count" />
      <image src="/static/images/arrow03.png" v-if="i > count && !(i - 1 < count)" />
    </block>
  </div>
</template>

<script>
export default {
  props: {
    count: Number
  }
};
</script>

<style lang="scss" scoped>
.star-rating {
  display: inline-block;
  margin-right: 6rpx;

  image {
    width: 28rpx;
    height: 27rpx;
    margin-right: 4rpx;
  }
}
</style>
