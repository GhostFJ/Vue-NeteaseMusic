<template>
  <div class="playlist">
    <div class="playlist-top">
      <div class="title">推荐歌单</div>
      <div class="more">更多&gt;</div>
    </div>

      <!-- 下方为推荐的轮播  -->
    <div class="playlist-content">
      <swiper
      :slidesPerView="3"
      :spaceBetween="30"
      :slidesPerGroup="3"
      :loop="true"
      :loopFillGroupWithBlank="true"
      >
        <swiper-slide v-for="(item, id) in imgUrls" :key="id">
          <router-link :to="{path:'/list', query:{id:item.id}}">
            <img :src="item.picUrl" :alt="item.name">
            <div class="name">
              {{item.name.length > 18 ? item.name.slice(0,15) + '...' : item.name}}
            </div>
            <div class="count">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-play"></use>
              </svg>
              <span>
                {{filterNums(item.playCount)}}
              </span>
            </div>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>

  </div>
</template>

<script>
import {
  onMounted, reactive, toRefs,
} from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import { getPlayList } from '@/apis/index.js';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiperData = reactive({
      imgUrls: [],
    });

    // 因为vue3没有过滤器了，就用方法来实现
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

    onMounted(async () => {
      const res = await getPlayList(6);
      swiperData.imgUrls = res.result;
    });

    return {
      ...toRefs(swiperData),
      filterNums,
    };
  },
};
</script>

<style lang="scss" scoped>
.playlist {
  width: 7.5rem;
  padding: 0 0.4rem;

  .playlist-top {
    display: flex;
    height: 1rem;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }

    .more {
      // display: flex;
      // align-items: center;
      // justify-content: center;
      width: 1rem;
      height: 0.4rem;
      text-align: center;
      line-height: 0.4rem;
      border: 1px solid #ccc;
      border-radius: 0.2rem;
      font-size: 0.24rem;
    }
  }

  .playlist-content {
    .swiper {
      width: 100%;
      height: 3rem;
      .swiper-slide {
        display: flex;
        flex-direction: column;
        position: relative;
        img {
          width: 100%;
          height: auto;
          border-radius: 0.1rem;
        }
        .name {
          height: 0.6rem;
          width: 100%;
          font-size: 0.2rem;
          line-height: 0.4rem;
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
          border-radius: 0.2rem;
          font-weight: 900;
          // border: 0px solid ;
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
    }
  }
}
</style>
