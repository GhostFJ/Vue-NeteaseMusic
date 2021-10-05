<template>
  <div class="player" v-if="playlist[playId]">
    <div class="left" @click="show=!show">
      <img :src="playlist[playId].al.picUrl" alt="">
      <div class="title">
        {{playlist[playId].al.name}}
      </div>
    </div>

    <div class="right">
      <svg
        class="icon"
        aria-hidden="true"
        @click="playMusic"
      >
        <use v-if="playing" xlink:href="#icon-zanting"></use>
        <use v-else xlink:href="#icon-bofang"></use>
      </svg>

      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofangliebiao"></use>
      </svg>

      <!-- 音乐播放器 -->
      <audio
        ref="audio"
        :src="`https://music.163.com/song/media/outer/url?id=${playlist[playId].id}.mp3`"
      ></audio>

      <PlayInterface
        @back="show=!show"
        v-show="show"
        :playMusic="playMusic"
        :playing="playing"
        :detail="playlist[playId]"
        :currentTime="curTime"
      ></PlayInterface>
    </div>
  </div>
</template>

<script>
import {
  computed, ref, onUpdated, watch,
} from 'vue';
import { useStore } from 'vuex';
import PlayInterface from '@/components/PlayInterface.vue';

// vue3 中使用mapState等还是有问题的，搜索解决方法是推荐重新封装，故先这样写
export default {
  components: {
    PlayInterface,
  },
  setup() {
    const store = useStore();

    const audio = ref(null);
    const playing = ref(false);
    const show = ref(false);

    const playlist = computed(() => store.getters.playlist);
    const playId = computed(() => store.getters.curPlayId);

    // 时间控制
    const curTime = ref(0);
    const intervalId = ref(null);

    const setTime = () => {
      intervalId.value = setInterval(() => {
        curTime.value = audio.value.currentTime;
      }, 1000);
    };

    const playMusic = () => {
      if (audio.value.paused) {
        audio.value.play();
        setTime();
        playing.value = true;
      } else {
        audio.value.pause();
        playing.value = false;
        clearInterval(intervalId);
      }
    };

    // 考虑用watch来实现，因为mounted的时候，还没有初始化
    watch([playlist, playId], ([curList, curId], [preList, preId]) => {
      // console.log('curList: ', curList);
      // console.log('preList: ', preList);
      // console.log('curId: ', curId);
      // console.log('preId: ', preId);
      store.dispatch('player/setLyric', { id: curList[curId].id });
    });

    // onUpdated(() => {
    //   store.dispatch('player/setLyric', { id: playlist[playId].id });
    // });

    return {
      playing,
      show,
      playMusic,
      audio,
      playlist,
      playId,
      setTime,
      curTime,
    };
  },
};
</script>

<style lang="scss" scoped>
.player {
  background: #fff;
  width: 7.5rem;
  height: 1.2rem;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;
  .left {
    display: flex;
    align-items: center;
    padding: 0 0.2rem;
    img {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 0.4rem;
    }
    .title {
      padding: 0 0.2rem;
      font-size: 0.3rem;
    }
  }
  .right {
    .icon {
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 0.2rem;
    }
  }
}
</style>
