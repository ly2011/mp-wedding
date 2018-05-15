<template>
  <div class="md-comment">
    <div class="comments">
      <div class="count">网友点评({{count}})</div>
      <block v-for="(comment, cIndex) in comments" :key="cIndex">
        <div class="comment-item">
          <image class="cover" :src="comment.cover" mode="aspectFill" />
          <div class="comment-info">
            <div class="name">{{comment.name}}</div>
            <div class="star">打分
              <star :count="comment.star" />
            </div>
            <div class="msg">{{comment.comment}}</div>
            <div>{{comment.photo.join(',')}}</div>
            <div class="picture">
              <block v-for="(item, pIndex) in comment.photo" :key="pIndex">
                <image :src="item" mode="aspectFill" @click="photoScan(cIndex, pIndex)" />
              </block>
            </div>
          </div>
        </div>
      </block>
    </div>
  </div>
</template>

<script>
import { previewImage } from '@/utils/wechat';
import Star from '@/components/star';
export default {
  props: {
    count: Number,
    comments: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Star
  },
  methods: {
    photoScan(commentIndex, photoIndex) {
      previewImage(photoIndex, this.comments[parseInt(commentIndex, 10)].photo);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
.md-comment {
  background-color: #fff;
  margin-top: 30rpx;
  padding-left: 20rpx;

  .count {
    color: #111;
    font-size: 28rpx;
    height: 100rpx;
    line-height: 100rpx;
    border-bottom: 3rpx solid #f0f0f0;
  }

  .comment-item {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding-top: 20rpx;

    .cover {
      width: 70rpx;
      height: 70rpx;
      border-radius: 60rpx;
      margin-left: 10px;
      margin-right: 14px;
      flex-shrink: 0;
    }

    .comment-info {
      flex: 1;
      padding-bottom: 20rpx;
      border-bottom: 3rpx solid #f0f0f0;
      margin-right: 10rpx;

      .name {
        color: #111;
        font-size: 32rpx;
        font-weight: bold;
        @include text-ellipsis;
        line-height: 1.1em;
      }

      .star {
        color: #111;
        font-size: 26rpx;
        margin-top: 4rpx;
      }

      .msg {
        color: #111;
        font-size: 26rpx;
        margin-top: 4rpx;
        line-height: 36rpx;
      }

      .picture {
        margin-top: 16rpx;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;

        image {
          width: 120rpx;
          height: 120rpx;
          display: inline-block;
          margin-right: 40rpx;
        }
      }
    }
  }
}
</style>
