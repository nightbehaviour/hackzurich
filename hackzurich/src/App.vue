<template>
    <v-app>
        <v-app-bar
                app
                color="white"
                elevate-on-scroll
        >
            <router-link to=“/wizard”>Go to Foo</router-link>
            <v-spacer></v-spacer>
        </v-app-bar>
    </v-app>
</template>

<script>

  export default {
    name: 'App',
    components: {
    },
  }
</script>

<style lang="scss">
    @import "./style/app";
    .v-application {
        background-color: white !important;
    }

    h2 {
        font-family: 'Playfair Display', serif;
        font-weight: 900;
    }
</style>
