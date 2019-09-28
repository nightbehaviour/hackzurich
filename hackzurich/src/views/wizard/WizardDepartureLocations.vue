

<template>
    <div class="mt-12 d-flex justify-center anim-container">
      <h1 id="main-title" style="">SBB Surprise</h1>
      <v-divider class="hdiv" mb="12"></v-divider>
      <p class="info-text">We want you to discover Switzerland and all <br> it has to offer. We want to offer you the best<br> possible prices and surprise you with <br> the locations that fit your needs. </p>

      <h1>Tell us where you are traveling from:</h1>
        <v-row>
          <v-spacer></v-spacer>
          <v-icon id="location-pin" >mdi-map-marker</v-icon>
          <v-spacer></v-spacer>
        </v-row>
        <v-text-field 
          required
          label="Starting Destination"
          v-model="location"
        ></v-text-field>
        <div class="my-auto"></div>
    </div>
</template>

<script>

  export default {
    name: 'WizardDepartureLocations',
    data: () => ({
      location: ""
    }),
    watch: {
      location() {
        this.$store.commit('setStartLocation', this.location)
      }

    }
    
  }
</script>

<style scoped>

</style>