<template>
    <div>
      <h1>How many people bitch</h1>
      <passenger v-for="(passenger, index) in passengers" :key="index" @input="passengers[index]= $event" :passenger="passenger"></passenger>
      <v-btn @click="passengers.push({halbtax: false, ga: false})">
        <v-icon color="primary" >mdi-plus</v-icon>
      </v-btn>
    </div>
</template>

<script>
  import passenger from '../../components/passenger'

  export default {
    name: 'WizardPeople',
    components: {
      passenger
    },
    data(){
      return {
        passengers: [{
          halbtax: false,
          ga: false
        }]
      }
    }
  }
</script>

<style scoped>

</style>