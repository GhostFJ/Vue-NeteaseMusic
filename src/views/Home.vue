<template>
  <div class="home">
    <top-nav></top-nav>
    <my-swiper />
    <icon-list />
    <play-list />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';

import TopNav from '@/components/TopNav.vue';
import MySwiper from '@/components/MySwiper.vue';
import IconList from '@/components/IconList.vue';
import PlayList from '@/components/PlayList.vue';

export default {
  components: {
    TopNav,
    MySwiper,
    IconList,
    PlayList,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };

    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
