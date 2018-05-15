<template>
  <div class="md-store">
    <div class="store">
      <image class="store-logo" :src="store.photo" mode="aspectFill" />
      <div class="store-info">
        <div class="name">{{store.name}}</div>
        <div class="star_price">
          <star :count="store.star" /> {{store.starcount}}条
        </div>
        <div class="type_km">
          <div class="type">{{store.buztype}}</div>
        </div>
      </div>
    </div>

    <div class="location" @click="mapLocation">
      <image class="icon" src="/static/images/position.png" mode="aspectFill" />
      <div class="info">{{store.address}}</div>
      <image class="arrow_left" src="/static/images/arrow_left.png" />
    </div>

    <div class="location phone" @click="callPhone">
      <image class="icon" src="/static/images/phone.png" mode="aspectFill" />
      <div class="info">{{store.phone}}</div>
      <image class="arrow_left" src="/static/images/arrow_left.png" />
    </div>

    <div class="goods">
      <block v-for="(good, index) in store.goods" :key="good.id">
        <div :class="{
        good: true,
        border: index > 0
      }" v-if="seeAllGoods || index < 2" @click="goodDetail">
          <image :src="good.photo" mode="aspectFill" class="photo" />
          <div class="info">
            <div class="goodsname">{{good.name}}</div>
            <div class="price">
              ￥{{good.price}}
              <text>￥{{good.oldprice}}</text>
            </div>
          </div>
          <div class="arrow">
            已售{{good.selled}}
            <image src="/static/images/arrow_left.png" />
          </div>
        </div>
      </block>
      <div class="more" @click="goodsmore">
        {{btnMsg}}
        <image :src="seeAllGoods ? '/static/images/arrow_up.png': '/static/images/arrow_down.png'" mode="aspectFill" />
      </div>
    </div>

    <comment :count="store.comments.length" :comments="store.comments" />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import Star from '@/components/star';
import Comment from '@/components/comment';
export default {
  components: {
    Star,
    Comment
  },
  computed: {
    ...mapState('shop', ['seeAllGoods', 'btnMsg', 'store'])
  },
  created() {
    // TODO 无法定位
    this.getLocation();
  },
  methods: {
    ...mapActions('shop', ['getLocation', 'goodsmore', 'openLocation', 'callPhone']),
    async mapLocation() {
      await this.openLocation();
    },
    async getLocation() {
      await this.getLocation();
    },
    goodDetail() {
      // 跳转到商品详情
      wx.navigateTo({
        url: '../goods/main'
      });
    }
  }
};
</script>

<style lang="scss" scopd>
@import '@/styles/mixins.scss';

.md-store {
  background-color: #f0f0f0;
  .store {
    padding: 15rpx;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    margin-left: 10rpx;

    .store-logo {
      width: 180rpx;
      height: 150rpx;
      flex-shrink: 0;
    }

    .store-info {
      height: 150rpx;
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

  .location {
    background-color: #fff;
    height: 90rpx;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    margin-top: 4rpx;

    .icon {
      width: 34rpx;
      height: 34rpx;
      margin-left: 20rpx;
    }

    .info {
      flex: 1;
      color: #333;
      font-size: 26rpx;
      margin: 0 10rpx;
      @include text-ellipsis;
    }

    .arrow_left {
      height: 30rpx;
      width: 21rpx;
      margin-right: 20rpx;
    }

    &.phone {
      margin-top: 4rpx;
    }
  }

  .goods {
    background-color: #fff;
    margin-top: 24rpx;

    .good {
      margin-left: 10rpx;
      padding: 20rpx;
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: nowrap;

      .photo {
        width: 120rpx;
        height: 120rpx;
        flex-shrink: 0;
      }

      .info {
        flex: 1;
        margin-left: 14rpx;

        .price {
          color: #f63;
          font-size: 34rpx;
          margin-top: 26rpx;

          text {
            color: #999;
            font-size: 24rpx;
            text-decoration: line-through;
          }
        }
      }

      .arrow {
        color: #777;
        font-size: 24rpx;
        height: 30rpx;
        line-height: 30rpx;
        margin-top: 4rpx;

        image {
          width: 21rpx;
          height: 30rpx;
          margin-left: 12rpx;
          vertical-align: middle;
        }
      }

      &.border {
        border-top: 3rpx solid #f0f0f0;
      }
    }

    .more {
      border-top: 3rpx solid #f0f0f0;
      color: #111;
      font-size: 24rpx;
      text-align: center;
      height: 90rpx;
      line-height: 90rpx;

      image {
        width: 26rpx;
        height: 26rpx;
        margin-left: 6rpx;
        vertical-align: middle;
      }
    }
  }
}
</style>
