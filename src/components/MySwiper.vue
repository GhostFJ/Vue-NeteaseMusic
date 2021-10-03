<template>
  <div class="my-swiper">
    <swiper
      ref="swiper"
      class="swiper"
      :modules="modules"
      :autoplay="swiperOptions.autoplay"
      :loop="swiperOptions.loop"
      :speed="swiperOptions.speed"
      :pagination="swiperOptions.pagination"
      :space-between="20"
      :coverflowEffect="swiperOptions.coverflowEffect"
      :centered-slides="swiperOptions.centeredSlides"
      :slides-per-view="swiperOptions.slidesPerView"
      effect="coverflow"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(item, id) in imgUrls" :key="id">
        <img :src="item.pic" :alt="item.name">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue';
// swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import {
  Pagination,
} from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

import { getBanners } from '@/apis/index.js';

import swiperImg1 from '../assets/img/swiper1.jpg';
import swiperImg2 from '../assets/img/swiper2.jpg';
import swiperImg3 from '../assets/img/swiper3.jpg';
import swiperImg4 from '../assets/img/swiper4.jpg';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiperData = reactive({
      imgUrls: [
        { pic: swiperImg1 },
        { pic: swiperImg2 },
        { pic: swiperImg3 },
        { pic: swiperImg4 },
        // require('../assets/img/swiper1.jpg'), 仅留下一行作为示例，vite中这样使用不行
      ],
    });

    const swiperOptions = reactive({
      autoplay: {
        disableOnInteraction: false, // 鼠标滑动后继续自动播放
        delay: 4000, // 4秒切换一次
      },
      speed: 500, // 切换过渡速度
      loop: true,
      slidesPerView: 'auto', // 解决最后一张切换到第一张中间的空白
      centeredSlides: true, // 设置slide居中
      coverflowEffect: {
        // rotate: 0, //slide做3d旋转时Y轴的旋转角度。默认50。
        stretch: 50, // 每个slide之间的拉伸值（距离），越大slide靠得越紧。 默认0。
        depth: 100, // slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
        // depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，
        // 值越大这三个参数的效果越明显。默认1。
        modifier: 1,
        // slideShadows: false, //开启slide阴影。默认 true。
      },
      pagination: {
        clickable: true,
      },
    });

    const onSwiper = (swiper) => {
      // console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log('slide change');
    };

    onMounted(async () => {
      const res = await getBanners(1);
      swiperData.imgUrls = res.banners;
    });

    return {
      ...toRefs(swiperData),
      onSwiper,
      onSlideChange,
      swiperOptions,
      modules: [Pagination],
    };
  },
};
</script>

<style lang="scss" scoped>
.my-swiper{
   width: 7.5rem;
  .swiper {
    width: 7.1rem;
    height: 2.6rem;
    border-radius: 0.1rem;
  }
  .swiper-slide img {
    width: 100%;
  }
}
</style>
