<template>
    <div>
      <h1>How many people bitch</h1>
      
      
      <passenger></passenger>

      <v-btn>
        <v-icon color="primary">mdi-plus</v-icon>
      </v-btn>

    </div>
</template>

<script>
  import passenger from '../../components/passenger'

  export default {
    name: 'WizardPeople',
    components: {
      passenger
    }
    
  }
</script>

<style scoped>

</style>