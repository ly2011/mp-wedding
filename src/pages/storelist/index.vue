<template>
  <div class="md-storelist">

    <div class="search">
      <icon type="search" color="#4c4c4c" size="18"></icon>
      <input type="text" maxlength="100" placeholder="输入商户名、地名、找优惠" placeholder-style="color: #999" />
    </div>

    <div class="navbtns">
      <div class="nav-item nearby" @click="navitation('01')">
        附近
        <image :src="selectedNav === '01' ? '/static/images/arrow_up.png' : '/static/images/arrow_down.png'" />
      </div>
      <div class="line"></div>
      <div class="nav-item sort" @click="navitation('02')">
        全部分类
        <image :src="selectedNav === '02' ? '/static/images/arrow_up.png' : '/static/images/arrow_down.png'" />
      </div>
      <div class="line"></div>
      <div class="nav-item rank" @click="navitation('03')">
        排序
        <image :src="selectedNav === '03' ? '/static/images/arrow_up.png' : '/static/images/arrow_down.png'" />
      </div>
    </div>

    <div class="wrap">
      <scroll-view class="scroller" scroll-y="true" lower-threshold="800" bindscrolltolower="loadmore">
        <block v-for="(store, index) in storelist" :key="index">
          <store-item :store="store"></store-item>
        </block>
      </scroll-view>

      <div class="spinner" v-if="showspinner">
        <div class="items">
          <block v-for="item in spinners" :key="item.id">
            <div class="item" @click="spinnerClick">{{item.name}}</div>
          </block>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import Star from '@/components/star';
import StoreItem from '@/components/storeitem';
export default {
  components: {
    Star,
    StoreItem
  },
  computed: {
    ...mapState('shoplist', ['selectedNav', 'showspinner', 'spinners', 'storelist'])
  },
  methods: {
    ...mapActions('shoplist', ['changeNav', 'closeSpinner']),
    async navitation(id) {
      await this.changeNav(id);
    },
    spinnerClick() {
      this.closeSpinner();
    }
  }
};
</script>

<style lang="scss" scoped>
.md-storelist {
  background-color: #f0f0f0;

  .search {
    background-color: #fff;
    margin: 20rpx 40rpx;
    border-radius: 70rpx;
    height: 70rpx;
    line-height: 70rpx;
    display: flex;
    flex-wrap: nowrap;
    padding: 0 30rpx;
    vertical-align: middle;
    align-items: center;

    icon {
      margin-right: 10rpx;
      height: 18rpx;
    }

    input {
      flex: 1;
      vertical-align: middle;
      height: 70rpx;
      display: inline-block;
      font-size: 26rpx;
    }
  }

  .navbtns {
    display: flex;
    height: 80rpx;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    background-color: #fff;

    .nav-item {
      flex: 1;
      text-align: center;
      color: #777;
      font-size: 26rpx;
      height: 80rpx;
      line-height: 80rpx;

      image {
        display: inline-block;
        width: 26rpx;
        height: 26rpx;
        margin-left: 6rpx;
        vertical-align: middle;
      }
    }

    .line {
      width: 3rpx;
      background-color: #aaa;
      height: 45rpx;
      flex-shrink: 0;
    }
  }

  .wrap {
    position: relative;

    .scroller {
      margin-top: -5rpx;
    }

    .spinner {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 1;
      top: 0;
      left: 0;

      .items {
        background-color: #fff;
        padding-left: 20rpx;

        .item {
          padding-left: 25rpx;
          border-bottom: 1rpx solid #777;
          height: 90rpx;
          line-height: 90rpx;
          color: #333;
          font-size: 30rpx;
        }
      }
    }
  }
}
</style>
