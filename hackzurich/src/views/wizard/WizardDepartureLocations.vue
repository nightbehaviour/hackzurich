

<template>
    <div class="mt-12 d-flex justify-center anim-container">
      <h1 id="main-title" style="">SBB Surprise</h1>
      <v-divider class="hdiv"></v-divider>
      <p class="info-text">Intro text to Surprise</p>

      <h1>Tell us where you are traveling from:</h1>
        <v-row>
          <v-spacer></v-spacer>
          <v-icon id="location-pin" >mdi-map-marker</v-icon>
          <v-spacer></v-spacer>
        </v-row>
        <v-text-field 
          required
          label="Starting Destination"
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