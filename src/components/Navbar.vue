<template>
  <div v-md-theme="'default'">
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleNav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">Vue</h2>
    </md-toolbar>

    <md-sidenav class="md-left" ref="nav" @open="open" @close="open">
      <md-toolbar class="md-large">
        <img src="../assets/logo.png" />
        <h3 class="md-title">Vue</h3>
      </md-toolbar>

      <md-list>
        <md-list-item @click="toggleNav">
          <router-link to="/home">
            <md-icon>home</md-icon><span>Home</span>
          </router-link>
        </md-list-item>
        <md-list-item @click="toggleNav">
          <router-link to="/users">
            <md-icon>people</md-icon><span>Users</span>
          </router-link>
        </md-list-item>
        <md-list-item @click="toggleNav">
          <router-link to="/settings">
            <md-icon>settings</md-icon><span>Settings</span>
          </router-link>
        </md-list-item>
      </md-list>
    </md-sidenav>
  </div>
</template>

<script>

  export default {
    name: 'nav-bar',
    methods: {
      open () {
        this.navOpen = true
      },
      close () {
        this.navOpen = false
      },
      toggleNav () {
        this.$refs.nav.toggle()
      },
    },
    data () {
      return {
        navOpen: true,
      }
    },
  };
  </script>
