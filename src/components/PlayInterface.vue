<template>
  <div class="play-interface">
    <div class="bg" :style="{backgroundImage:`url(${detail.al.picUrl})`}">

    </div>
    <div class="top">
      <div class="back" @click="$emit('back')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-a-zuojiantouzhixiangzuojiantou"></use>
        </svg>
      </div>
      <div class="center">
        <div class="title">
          <!-- 跑马灯 -->
          <!-- 根据MDN，marquee已经废弃，不推荐使用 -->
          <marquee behavior="scroll" direction="left">{{detail.al.name}}</marquee>
        </div>
        <div class="author"></div>
      </div>
      <div class="share">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </div>
    </div>
    <!-- 中间碟片部分 -->
    <div class="content" v-if="!showLyric" @click="showLyric=!showLyric">
     <img class="needle" :class="{active:playing}" src="@/assets/img/needle-ab.png" alt="">
     <img class="disc" src="@/assets/img/frame.png" alt="">
     <img class="photo" :src="detail.al.picUrl" alt="">
    </div>
    <div class="lyric" v-else  @click="showLyric=!showLyric">
      <p class="active" v-for="(item, id) in lyric" :key="id">{{item.lyric}}</p>
    </div>
    <!-- 歌词 -->
    <div class="progress">

    </div>
    <div class="footer">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xunhuan"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shangyishoushangyige"></use>
      </svg>
      <svg class="icon bofang" aria-hidden="true" @click="playMusic">
        <use v-if="playing" xlink:href="#icon-zanting3"></use>
        <use v-else xlink:href="#icon-bofang"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiayigexiayishou"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofangliebiaoguanli"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  components: {
    // Marquee,
  },
  props: {
    detail: Object,
    playing: Boolean,
    playMusic: Function,
  },
  setup(props) {
    const store = useStore();
    const showLyric = ref(false);

    const lyric = computed(() => store.getters.lyric);

    return {
      lyric,
      showLyric,
    };
  },
};
</script>

<style lang="scss" scoped>
.play-interface {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-size: auto 100%;
    filter: blur(50px);
    background-position: center;
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.4rem;
    width: 7.5rem;
    height: 1.2rem;
    position: absolute;
    left: 0;
    top: 0;
    color: #fff;
    .icon {
      fill:#fff;
      width: 0.4rem;
      height: 0.4rem;
    }
    marquee {
      width: 5rem;
      flex: 1;
    }
  }
  .content {
    position: absolute;
    width: 7.5rem;
    height: 7.5rem;
    left: 0;
    top: 1rem;
    .needle {
      width: 2.5rem;
      height: auto;
      position: absolute;
      left: 3.5rem;
      transform-origin: 0.3rem 0;
      transform: rotate(-10deg);
      transition: all 1s;
      z-index: 10;
    }
    .needle.active {
      width: 2.5rem;
      height: auto;
      position: absolute;
      left: 3.5rem;
      transform-origin: 0.3rem 0;
      transform: rotate(25deg);
      transition: all 1s;
      z-index: 10;
    }
    .disc {
      width: 5.5rem;
      height: auto;
      position: absolute;
      left: calc(50% - 2.75rem);
      top: 2.5rem;
    }
    .photo {
      height: 3.5rem;
      width: 3.5rem;
      border-radius: 1.75rem;
      position: absolute;
      left: calc(50% - 1.75rem);
      top: 3.5rem;
    }
  }
  .lyric {
    position: absolute;
    width: 7.5rem;
    height: 8rem;
    left: 0;
    top: calc(50% - 4rem);
    overflow: scroll;
    text-align: center;
    color: #fff;
    padding: 0.2rem 0;
    .active {
      color: orangered
    }
  }
  .footer {
    width: 7.5rem;
    height: 1.5rem;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.4rem;
    .icon {
      fill: #fff;
      width: 0.5rem;
      height: 0.5rem;
    }
    .bofang.icon {
      width: 0.9rem;
      height: 0.9rem;
    }
  }
}
</style>
