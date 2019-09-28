<template>
    <div>
      <h1>How much time do you have on your hands?</h1>
      
        <v-slider
        v-model="time"
        ></v-slider>
      
    </div>
</template>

<script>

  export default {
    name: 'WizardPrice',
    data () {
      return{
        time: 100
      }
    }
  }
</script>

<style scoped>

</style>