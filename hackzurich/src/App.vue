<template>
    <div>
    <router-view></router-view>
    </div>
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
