<template>
  <div class="player">
    <div class="left" v-if="playlist[playId]">
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
        <use v-if="playing" xlink:href="#icon-bofang"></use>
        <use v-else xlink:href="#icon-zanting1"></use>
      </svg>

      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofangliebiao"></use>
      </svg>

      <!-- 音乐播放器 -->
      <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playlist[playId].id}.mp3`"></audio>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

// vue3 中使用mapState等还是有问题的，搜索解决方法是推荐重新封装，故先这样写
export default {
  setup() {
    const store = useStore();

    const audio = ref(null);
    const playing = ref(true);

    const playlist = computed(() => store.getters.playlist);
    const playId = computed(() => store.getters.curPlayId);
    console.log(playlist[playId]);

    const playMusic = () => {
      console.log(audio);
      if (audio.value.paused) {
        audio.value.play();
        playing.value = true;
      } else {
        audio.value.pause();
        playing.value = false;
      }
    };

    return {
      playing,
      playMusic,
      audio,
      playlist,
      playId,
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
