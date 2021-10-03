// src/store/modules/user.js
const state = {
  name: 'hello vue3',
  age: 18
}

const mutations = {
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AGE: (state, age) => {
    state.age = age
  }
}

const actions = {
  setName({ commit }, name) {
    commit('SET_NAME', name)
  },
  setAge({ commit }, age) {
    commit('SET_AGE', age)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
