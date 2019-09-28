

<template>
    <div class="mt-12 d-flex justify-center anim-container">
        <h1 style="text-align: center">SBB SURPRISE</h1>
        <v-divider></v-divider>
        <p>Intro text to Surprise</p>

      <h2>Tell us where you are traveling from:</h2>
        <v-icon style="color: #eb0000">mdi-map-marker</v-icon>
        <v-text-field 
          required
          
        ></v-text-field>
        <div class="flex-grow-1"></div>
    </div>
    
</template>

<script>

  export default {
    name: 'WizardDepartureLocations'
    
  }
</script>

<style scoped>

</style>