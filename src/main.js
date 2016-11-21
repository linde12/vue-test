import 'vue-material/dist/vue-material.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import FastClick from 'fastclick'

import App from './App'
import Navbar from './components/Navbar'
import Home from './containers/Home'
import Music from './containers/Music'
import Users from './containers/Users'

/* eslint-disable no-undef */
FastClick.attach(document.body)

// Components
Vue.component('nav-bar', Navbar)

// VueMaterial
Vue.use(VueMaterial)
Vue.material.theme.register('default', {
  primary: 'indigo',
  accent: 'pink',
})

// Router
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/music', component: Music},
    {path: '/users', component: Users},
  ],
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
});
