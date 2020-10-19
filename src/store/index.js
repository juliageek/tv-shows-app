import Vue from "vue";
import Vuex from "vuex";

import shows from "./shows.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    shows
  }
});

export default store;
