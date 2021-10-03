<template>
  <div class="list-detail-top">
    <!-- 背景 -->
    <img class="bg" :src="playlist.coverImgUrl" alt="">
    <!-- top -->
    <div class="list-top-nav">
      <div class="back" @click="$router.go(-1)">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-a-zuojiantouzhixiangzuojiantou"></use>
        </svg>
        <div class="title">歌单<sup>&reg;</sup></div>
      </div>

      <div class="right">
        <svg class="icon search" aria-hidden="true">
            <use xlink:href="#icon-sousuo"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sandian"></use>
        </svg>
      </div>
    </div>
    <!-- 详情 -->
    <div class="content">
      <div class="left-side">
        <img :src="playlist.coverImgUrl" alt="">
        <div class="count">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-play"></use>
          </svg>
          <span>
            {{filterNums(playlist.playCount)}}
          </span>
        </div>
      </div>
      <div class="right-side">
        <h3>{{playlist.name}}</h3>
        <div class="author" v-if="playlist.creator">
          <img :src="playlist.creator.avatarUrl" alt="" class="avatar">
          <span>{{playlist.creator.nickname}}</span>
        </div>
        <div class="description">
          {{playlist.description}}
        </div>
      </div>
    </div>
    <!-- 图表列表 -->
    <div class="icon-list">
      <div class="icon-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pinglun-"></use>
        </svg>
        <span>{{playlist.commentCount}}</span>
      </div>
      <div class="icon-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
        <span>{{playlist.shareCount}}</span>
      </div>
      <div class="icon-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-iconfontzhizuobiaozhun023146"></use>
        </svg>
        <span>下载</span>
      </div>
      <div class="icon-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-show_duoxuan"></use>
        </svg>
        <span>多选</span>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue';

export default {
  props: {
    // 报错：不存在的属性
    // 按视频说因为一开始是空的，在渲染时会报错，所以给各默认的值存在以防止
    // 实际无法解决
    // 1、采用v-if可以解决
    // 2、采用Suspense组件，不行
    playlist: Object,
  },
  setup(props) {
    const state = reactive({
      count: 0,
    });

    onMounted(() => {
      // console.log(props.playlist.value);
    });

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
      ...toRefs(state),
      filterNums,
    };
  },
};
</script>

<style lang="scss" scoped>
.list-detail-top {
  width: 7.5rem;
  padding: 0 0.4rem;
  .bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 7.5rem;
    height: auto;
    z-index: -1;
    filter: blur(40px);
  }
  .list-top-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.5rem;
    height: 1.2rem;

    .back, .right {
      color: #fff;
      display: flex;

      .title {
        margin-left: 0.5rem;
        sup {
          vertical-align: 75%;
          line-height: 5px;
          font-size: 0.3rem;
        }
      }
      .search {
        margin-right: 0.5rem;
      }
      .icon {
        width: 0.4rem;
        height: 0.4rem;
        fill: #fff;
      }
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    .left-side {
      position: relative;
      img {
        width: 2.8rem;
        height: 2.8rem;
        border-radius: 0.1rem;
      }
      .count {
        position: absolute;
        display: flex;
        align-items: center;
        right: 0.1rem;
        top: 0.1rem;
        background-color: rgb(39, 39, 39);
        color: #fff;
        opacity: 70%;
        font-weight: 900;
        .icon {
          width: 0.3rem;
          height: 0.25rem;
          fill: #fff;
        }
        span {
          font-size: 0.1rem;
        }
      }
    }

    .right-side {
      width: 3.5rem;
      h3 {
        color: #fff;
      }
      .author {
        display: flex;
        align-items: center;
        margin: 0.2rem 0;
        img.avatar {
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 0.3rem;
          margin-right: 0.2rem;
        }
        span {
          color: rgb(212, 212, 212);
          font-size: 0.26rem;
        }
      }
      .description {
        font-size: 0.24rem;
        color: rgb(187, 187, 187);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }

  .icon-list {
    display: flex;
    justify-content: space-around;
    .icon-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon {
        width: 0.6rem;
        height: 0.6rem;
        fill: #fff;
      }
      span {
        padding-top: 0.1rem;
        font-size: 0.25rem;
        color: #fff;
      }
    }
  }
}
</style>
