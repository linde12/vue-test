import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'

Vue.use(Vuex)
export default function () {
  return new Vuex.Store({
    actions: {},
    getters: {},
    modules: {
      counter,
    },
  })
}
