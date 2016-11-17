import 'vue-material/dist/vue-material.css'
// 3rd party
import Vue from 'vue'
import VueRouter from 'vue-router'
import {sync} from 'vuex-router-sync'
import VueMaterial from 'vue-material'

// store
import createStore from './store'

// components
import App from './App'
import Navbar from './components/Navbar'
import Home from './containers/Home'
import Users from './containers/Users'

// components
Vue.component('nav-bar', Navbar)

// vue-material
Vue.use(VueMaterial)
Vue.material.theme.register('default', {
  primary: 'indigo',
  accent: 'pink',
})

// router
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/users', component: Users},
  ],
})

// state-management
const store = createStore()
sync(store, router)

/* eslint-disable no-new */
Vue.component('Something', {
  template: '<div>hello</div>',
  created () {
    console.log(this.$store)
  },
})
Vue.component('App', App)
new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App },
});
