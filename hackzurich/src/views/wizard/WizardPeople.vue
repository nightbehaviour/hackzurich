<template>
    <div>
      <h1>Are you looking to travel by yourself or are you bringing company?</h1>
        <v-spacer></v-spacer>
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