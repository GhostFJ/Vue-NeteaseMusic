<template>
  <div class="list-detail">
    <list-detail-top :playlist=playlist></list-detail-top>
    <list-detail-main :playlist=playlist></list-detail-main>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { getPlayListDetail } from '@/apis/index.js';

import ListDetailTop from '@/components/ListDetailTop.vue';
import ListDetailMain from '@/components/ListDetailMain.vue';

export default {
  components: {
    ListDetailTop,
    ListDetailMain,
  },
  setup() {
    const route = useRoute();
    const store = useStore();

    const state = reactive({
      playlist: {},
    });

    onMounted(async () => {
      const listId = route.query.id;
      const res = await getPlayListDetail(listId);
      state.playlist = res.playlist;
      // 存到vuex中
      store.commit('player/SET_PLAYLIST', res.playlist.tracks);

      console.log('res: ', res);
      console.log('store', store);
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
