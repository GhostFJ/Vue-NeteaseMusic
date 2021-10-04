// src/store/modules/player.js
import { getLyric } from '@/apis/index.js';

const state = {
  playlist: [],
  curPlayId: 0,
  lyric: '',
};

const mutations = {
  SET_PLAYLIST: (state, list) => {
    state.playlist = list;
  },
  SET_PLAY_ID: (state, id) => {
    state.curPlayId = id;
  },
  SET_LYRIC: (state, val) => {
    state.lyric = val;
  },
};

const actions = {
  setPlaylist({ commit }, list) {
    commit('SET_NAME', list);
  },
  async setLyric({ commit }, payload) {
    const res = await getLyric(payload.id);
    commit('SET_LYRIC', res.lrc.lyric);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
