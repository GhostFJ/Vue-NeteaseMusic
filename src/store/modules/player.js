// src/store/modules/user.js
const state = {
  playlist: [],
  curPlayId: 0,
};

const mutations = {
  SET_PLAYLIST: (state, list) => {
    state.playlist = list;
  },
  SET_PLAY_ID: (state, id) => {
    state.curPlayId = id;
  },
};

const actions = {
  setPlaylist({ commit }, list) {
    commit('SET_NAME', list);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
