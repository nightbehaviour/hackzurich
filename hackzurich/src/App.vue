<template>
  <v-app>
    <v-app-bar
            app
            color="white"
            elevate-on-scroll

            v-if="currentUser != null"
    >
      <v-btn icon v-if="$route.name !== 'dashboard'" @click="$router.push('/wizard')">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <v-btn icon @click="logout">
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
