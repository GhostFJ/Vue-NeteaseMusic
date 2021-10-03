import { createStore } from 'vuex';
import user from './modules/user';
import player from './modules/player';
import getters from './getters';

const store = createStore({
  modules: { user, player },
  getters,
});

export default store;
