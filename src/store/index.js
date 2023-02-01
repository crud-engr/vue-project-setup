import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    username: null,
    token: null,
    user: null,
  },
  mutations: {
    SET_USERNAME(state, username) {
      state.username = username;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState({ storage: window.sessionStorage })],
});
