// src/store/modules/user.js
import { login } from '@/apis/index.js';

const state = {
  name: '',
  age: 18,
  loginState: false,
  phone: '',
  password: '',
};

const mutations = {
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AGE: (state, age) => {
    state.age = age;
  },
  SET_LOGIN_STATE: (state, status) => {
    state.loginState = status;
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
    console.log('payload: ', payload);
    const res = await login(payload);
    console.log('res: ', res);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
