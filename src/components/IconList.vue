<template>
  <div class="icon-list">
    <div class="icon-item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tuijian"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div class="icon-item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sirenfm-copy-copy"></use>
      </svg>
      <span>私人FM</span>
    </div>
    <div class="icon-item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="icon-item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-daochu1024-02"></use>
      </svg>
      <span>排行榜</span>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
.icon-list {
  display: flex;
  width: 7.5rem;
  justify-content: space-between;
  padding: 0.35rem;
  .icon-item{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .icon{
    width: 0.8rem;
    height: 0.8rem;
  }
  span {
    font-size: 0.25rem;
  }
}
</style>
