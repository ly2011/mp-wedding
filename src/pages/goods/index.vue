<template>
  <div class="md-goods">
    <div class="top">
      <swiper class="banners" indicator-dots="true" autoplay="true" interval="4000" duration="1000" indicator-color="#60ffff" indicator-active-color="#fff">
        <block v-for="(item, pIndex) in goods.photo" :key="pIndex">
          <swiper-item>
            <image :src="item" class="banner" mode="aspectFill" @click="banner(pIndex)" />
          </swiper-item>
        </block>
      </swiper>

      <div class="mask"></div>
      <div class="info">
        <div class="name">{{goods.name}}</div>
        <div class="desc">{{goods.describe}}</div>
      </div>
    </div>

    <div class="services">
      <div class="serve">
        <block v-for="item in goods.services" :key="item">
          <div class="service">
            <icon type="success_circle" color="#65c07a" size="16"></icon>
            {{item}}
          </div>
        </block>
      </div>

      <div class="selled">
        <icon type="success_circle" color="#999" size="16"></icon>
        已售{{goods.selled}}
      </div>
    </div>

    <div class="store">
      <div class="title">适用商户</div>
      <div class="storeinfo">
        <div class="storemain">
          <div class="name">{{goods.store.name}}</div>
          <div class="km">
            <star :count="goods.store.star"></star>
            <div class="distance">{{goods.store.km}}</div>
          </div>
        </div>
        <div class="verticalline"></div>
        <image src="/static/images/phone_orange.png" class="call" @click="callPhone" />
      </div>
      <div class="location" @click="location">
        <image src="/static/images/position.png" mode="aspectFill" class="icon" />
        <div class="info">{{goods.store.address}}</div>
        <image src="/static/images/arrow_left.png" class="arrow_left" />
      </div>
    </div>

    <div class="group border_top_bottom">
      <div class="title">团购详情</div>
      <block v-for="good in goods.group.goods" :key="good.id">
        <div class="group_item">
          <div class="name">{{good.name}}</div>
          <div class="count">{{good.count}}</div>
          <div class="value">{{good.value}}</div>
        </div>
      </block>
      <div class="oldvalue">
        <div class="name">总价值</div>
        <div class="value">{{goods.group.oldValue}}元</div>
      </div>
      <div class="nowvalue">
        <div class="name">团购价</div>
        <div class="value">{{goods.group.groupValue}}</div>
      </div>
      <div class="describe">
        <text>{{goods.group.describe}}</text>
      </div>
    </div>

    <div class="notice border_top_bottom">
      <div class="title">购买须知</div>
      <block v-for="gguid in goods.guide" :key="gguid.id">
        <div class="name">{{gguid.name}}</div>
        <block v-for="(item, ggIndex) in gguid.info" :key="ggIndex">
          <div class="info">
            <div class="point"></div>
            {{item}}
          </div>
        </block>
      </block>
    </div>

    <comment :count="goods.comments.length" :comments="goods.comments" />

    <div class="buy">
      <div class='price'>￥{{goods.group.grounpValue}}</div>
      <div class='oldprice'>￥{{goods.group.oldValue}}</div>
      <div class='gobuy' @click='gobuy'>立即抢购</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import { previewImage } from '@/utils/wechat';
import Star from '@/components/star';
import Comment from '@/components/comment';
export default {
  components: {
    Star,
    Comment
  },

  computed: {
    ...mapState('goods', ['goods'])
  },

  methods: {
    banner(index) {
      previewImage(index, this.goods.photo);
    },
    gobuy() {
      wx.showToast({
        title: '改功能暂未开放'
      });
    },
    callPhone() {
      wx.makePhoneCall({
        phoneNumber: '10086'
      });
    },
    location() {}
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
.md-goods {
  background-color: #f0f0f0;
  .top {
    position: relative;
    .banners {
      width: 100%;
      height: 400rpx;

      .banner {
        width: 100%;
        height: 400rpx;
        vertical-align: bottom;
      }
    }

    .mask {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 220rpx;
      left: 0;
      bottom: 0;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 100%);
    }

    .info {
      position: absolute;
      z-index: 2;
      bottom: 0;
      left: 0;
      padding: 20rpx;

      .name {
        color: #fff;
        font-size: 30rpx;
        font-weight: bold;
        @include text-ellipsis;
      }

      .desc {
        color: #fff;
        font-size: 24rpx;
        margin-top: 10rpx;
        line-height: 32rpx;
      }
    }
  }

  .services {
    background-color: #fff;
    border-bottom: 2rpx solid #ddd;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 80rpx;
    width: 100%;

    .serve {
      flex: 1;
      color: #65c07a;
      font-size: 26rpx;
      display: flex;
      flex-direction: row;
      margin-left: 20rpx;
      height: 80rpx;
      line-height: 80rpx;

      .service {
        margin-right: 26rpx;
      }
    }

    .selled {
      color: #999;
      font-size: 26rpx;
      margin-right: 26rpx;
      vertical-align: middle;
      height: 80rpx;
      line-height: 80rpx;
    }

    icon {
      margin-top: 0rpx;
      margin-right: 6rpx;
    }
  }

  .store {
    border-bottom: 3rpx solid #ddd;
    border-top: 3rpx solid #ddd;
    background-color: #fff;
    padding-left: 20rpx;
    margin-top: 26rpx;

    .title {
      color: #111;
      font-size: 28rpx;
      height: 90rpx;
      line-height: 90rpx;
    }

    .storeinfo {
      display: flex;
      padding: 20rpx 0;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      border-bottom: 3rpx solid #ddd;
      border-top: 3rpx solid #ddd;

      .storemain {
        flex: 1;
        margin-right: 10rpx;

        .name {
          color: #111;
          font-size: 32rpx;
          font-weight: bold;
          @include text-ellipsis;
        }
      }

      .verticalline {
        height: 70rpx;
        width: 3rpx;
        background-color: #ddd;
      }

      .call {
        width: 40rpx;
        height: 40rpx;
        display: inline-block;
        padding: 20rpx 30rpx;
      }

      .km {
        display: flex;
        flex-wrap: nowrap;
        margin-top: 10rpx;

        .distance {
          color: #999;
          font-size: 26rpx;
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
  }

  .border_top_bottom {
    border-bottom: 3rpx solid #ddd;
    border-top: 3rpx solid #ddd;
  }

  .group {
    padding-left: 20rpx;
    background-color: #fff;
    margin-top: 20rpx;

    .title {
      border-bottom: 3rpx solid #ddd;
      height: 90rpx;
      line-height: 90rpx;
      color: #111;
      font-size: 28rpx;
    }

    .group_item {
      color: #111;
      font-size: 28rpx;
      margin-top: 16rpx;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;

      .name {
        width: 400rpx;
      }

      .count {
        width: 250rpx;
      }

      .value {
        width: 100rpx;
        text-align: right;
        margin-right: 16rpx;
      }
    }

    .oldvalue {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-wrap: nowrap;
      margin-top: 10rpx;

      .name {
        width: 150rpx;
        color: #111;
        font-size: 28rpx;
        font-weight: bold;
      }

      .value {
        width: 200rpx;
        color: #111;
        font-size: 28rpx;
        margin-top: 10rpx;
        font-weight: bold;
        text-align: right;
        margin-right: 16rpx;
      }
    }

    .nowvalue {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-wrap: nowrap;

      .name {
        font-weight: bold;
        width: 150rpx;
        color: #ff6b3a;
        font-size: 32rpx;
        margin-top: 10rpx;
      }

      .value {
        font-weight: bold;
        width: 200rpx;
        color: #ff6b3a;
        font-size: 32rpx;
        text-align: right;
        margin-right: 16rpx;
      }
    }

    .describe {
      color: #111111;
      font-size: 28rpx;
      line-height: 1.3rem;
      margin: 20rpx 10rpx 20rpx 0;
    }
  }

  .notice {
    background-color: #fff;
    margin-top: 20rpx;
    padding-left: 20rpx;
    padding-bottom: 20rpx;
  }

  .notice .title {
    border-bottom: 3rpx solid #ddd;
    height: 90rpx;
    line-height: 90rpx;
    color: #111;
    font-size: 28rpx;
  }
  .notice .name {
    margin-top: 20rpx;
    color: #777777;
    font-size: 28rpx;
  }
  .notice .info {
    margin-top: 10rpx;
    color: #111111;
    font-size: 26rpx;
    margin-right: 10rpx;

    line-height: 28rpx;
  }
  .notice .info .point {
    width: 6rpx;
    height: 6rpx;
    margin: 8rpx 0;
    background-color: #111111;
    border-radius: 6rpx;
    display: inline-block;
    margin-right: 4rpx;
  }

  .buy {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    border-top: 3rpx solid #ddd;
    height: 120rpx;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }

  .buy .oldprice {
    flex: 1;
    color: #999;
    font-size: 24rpx;
    text-decoration: line-through;
    margin-left: 10rpx;
    margin-top: 8rpx;
  }
  .buy .price {
    color: #ff6633;
    font-size: 44rpx;
    margin-left: 25rpx;
    font-weight: bold;
  }
  .buy .gobuy {
    background-color: #ff6633;
    padding: 22rpx 34rpx;
    color: #fff;
    font-size: 30rpx;
    margin-right: 20rpx;
    border-radius: 4rpx;
  }
}
</style>
