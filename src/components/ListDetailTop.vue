<template>
  <div class="list-detail-top">
    <!-- 背景 -->
    <img class="bg" :src="playlist.coverImgUrl" alt="">
    <div class="list-top-nav">
      <div class="back">
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
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue';

export default {
  props: {
    playlist: Object,
  },
  setup(props) {
    const state = reactive({
      count: 0,
    });

    onMounted(() => {
      console.log(props);
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
.list-detail-top {
  width: 7.5rem;
  height: 5rem;
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
    font-size: 0.6rem;
    height: 1.2rem;

    .back, .right {
      color: #fff;
      display: flex;

      .title {
        margin-left: 0.4rem;
        sup {
          vertical-align: 75%;
          line-height: 5px;
          font-size:11px;
        }
      }
      .search {
        margin-right: 0.4rem;
      }
      .icon {
        width: 0.4rem;
        height: 0.4rem;
        fill: #fff;
      }
    }
  }
}
</style>
