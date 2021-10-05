// src/store/modules/user.js
import { login, getUserInfo } from '@/apis/index.js';

const state = {
  name: '',
  phone: '',
  password: '',
  userData: {
    loginState: false,
    account: {},
    userInfo: {},
  },
};

const mutations = {
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_PHONE: (state, phone) => {
    state.phone = phone;
  },
  SET_PASSWORD: (state, val) => {
    state.password = val;
  },
  SET_LOGIN_STATE: (state, status) => {
    state.userData.loginState = status;
  },
  SET_ACCOUT: (state, info) => {
    state.userData.account = info;
  },
  SET_USERINFO: (state, info) => {
    state.userData.userInfo = info;
  },
  SET_USER: (state, val) => {
    state.userData = val;
  },
};

const actions = {
  setName({ commit }, name) {
    commit('SET_NAME', name);
  },
  setAge({ commit }, age) {
    commit('SET_AGE', age);
  },

  async login({ commit }, payload) {
    const res = await login(payload);

    if (res.code === 200) {
      commit('SET_PHONE', payload.phone);
      commit('SET_PASSWORD', payload.password);
      commit('SET_LOGIN_STATE', true);
      commit('SET_ACCOUT', res.account);

      const info = await getUserInfo(res.account.id);
      console.log('info: ', info);
      commit('SET_USERINFO', info);
      localStorage.userData = JSON.stringify(state.userData);
    }
    return res;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
