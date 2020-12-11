import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    msg: 'chushihua'
  },
  mutations: {
    getMsg(state, payload) {
      console.log(payload);
      state.msg = payload.msg;
    }
  },
  getter: {}
});
