<template>
  <div class="list-detail">
    <list-detail-top :playlist=playlist></list-detail-top>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue';
import { useRoute } from 'vue-router';
import { getPlayListDetail } from '@/apis/index.js';

import ListDetailTop from '@/components/ListDetailTop.vue';

export default {
  components: {
    ListDetailTop,
  },
  setup() {
    const state = reactive({
      playlist: {},
    });

    const route = useRoute();

    onMounted(async () => {
      const listId = route.query.id;
      const res = await getPlayListDetail(listId);
      state.playlist = res.playlist;
      console.log('res: ', res);
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
