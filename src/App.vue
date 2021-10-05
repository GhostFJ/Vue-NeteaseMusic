<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { useStore } from 'vuex';
import { onMounted } from 'vue';
import Player from '@/components/Player.vue';

const store = useStore();

onMounted(() => {
  if (localStorage.userData) {
    const userData = JSON.parse(localStorage.userData);
    store.commit('user/SET_USER', userData);
  }
});
</script>

<template>
  <router-view></router-view>
  <Player></Player>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: '微软雅黑';
  font-size: 0.3rem;
}
.icon {
  width: 0.30rem;
  height: 0.3rem;
}
a {
  color: #333;
  text-decoration: none;
}
</style>
