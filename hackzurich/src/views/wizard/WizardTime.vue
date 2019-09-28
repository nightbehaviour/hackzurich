<template>
    <div>
      <h1>How much time do you have on your hands?</h1>
      <v-divider class="hdiv"></v-divider>
      
      <v-slider
        v-model="time"
      ></v-slider>

      <v-btn id="surpriseButton" block depressed>Surprise Me!</v-btn>

      
    </div>
</template>

<script>

  export default {
    name: 'WizardPrice',
    data () {
      return {
        time: 0
      }
    },
    watch: {
      time() {
        this.$store.commit('setMaxTime', this.time)
      }
    }
  }
</script>

<style scoped>

</style>