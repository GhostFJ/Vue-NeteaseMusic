<template>
  <div class="list-detail-main">
    <div class="main-top">
      <div class="left-side">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <div class="text">
          <div class="title">播放全部</div>
          <div class="numbers" v-if="playlist.tracks">(共{{playlist.tracks.length}}首)</div>
        </div>
      </div>
      <div class="right-side">
        <div class="btn">
          + 收藏({{filterNums(playlist.subscribedCount)}})
        </div>
      </div>
    </div>
    <!-- 歌单列表 -->
    <div class="list-show">
      <div class="play-item" v-for="(item, id) in playlist.tracks" :key="id">
        <div class="left">
          <div class="index">{{id + 1}}</div>
          <div class="content">
            <div class="title">
              {{item.name.length > 10 ? item.name.slice(0,10)+'...' : item.name }}
            </div>
            <div class="author">
              <span class="tag" v-for="(tag, num) in playlist.tags" :key="num">{{tag}}</span>
              <span class="name">
                {{item.al.name.length > 9 ? item.al.name.slice(0,8)+'...' : item.al.name}}
              </span>
            </div>
          </div>
        </div>

        <div class="right">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofang1"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sandian"></use>
          </svg>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue';

export default {
  props: {
    playlist: Object,
  },
  setup() {
    const filterNums = (num) => {
      let res;
      if (num > 100000000) {
        res = num / 100000000;
        res = `${res.toFixed(2)}亿`;
      } else if (num > 10000) {
        res = num / 10000;
        res = `${parseInt(res, 10)}万`;
      }
      return res;
    };

    return {
      filterNums,
    };
  },
};
</script>

<style lang="scss" scoped>
.list-detail-main {
  width: 7.5rem;
  padding: 0 0.2rem;
  background-color: #fff;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  margin-top: 0.4rem;
  .main-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1rem;
    .left-side {
      display: flex;
      align-items: center;
      .icon {
        width: 0.4rem;
        height: 0.4rem;
      }
      .text {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 0.3rem;
        .title {
          font-size: 0.35rem;
          font-weight: 900;
        }
        .numbers {
          font-size: 0.25rem;
          color: #999;
        }
      }
    }
    .right-side {
      .btn {
        font-size: 0.25rem;
        color: #fff;
        background-color: orangered;
        // width: 2rem;
        // height: 0.8rem;
        line-height: 0.6rem;
        border-radius: 0.8rem;
        padding: 0.1rem;
        display: flex;
        align-items: center;
      }
    }
  }
  .list-show {
    .play-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 1rem;
      margin-bottom: 0.2rem;
      .left {
        display: flex;
        align-items: center;
        .title {
          font-size: 0.35rem;
          // font-weight: 500;
        }
        .index {
          color: #888;
          width: 0.2rem;
        }
        .content {
          margin-left: 0.4rem;
          width: 5rem;
          overflow: hidden;
          .tag {
            font-size: 0.2rem;
            font-weight: bold;
            color: orangered;
            border: 1px solid orangered;
            border-radius: 0.1rem;
            margin-right: 0.1rem;
          }
          .name {
            color: #888;
          }
        }
      }
      .right {
        .icon {
          margin: 0 0.15rem;
        }
      }
    }
  }
}
</style>
