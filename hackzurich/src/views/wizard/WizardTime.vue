<template>
    <div>
      <h1>How long do you want to travel for?</h1>
      <v-divider class="hdiv"></v-divider>
      
      <v-slider
        class="slider"
        v-model="time"
        thumb-label
        thumb-color="primary"
        inverse-label
        label="Minutes"
        color="secondary"
        track-color="accent"
      ></v-slider>
      <v-btn :disabled=isDisabled id="surpriseButton" block depressed
        v-on:click="submit"
      >Surprise Me!</v-btn>

      <v-progress-circular v-if="loading" indeterminate></v-progress-circular>
        <v-row>
            <v-spacer></v-spacer>
            <v-icon class="location-pin" id="location-pin" >mdi-clock</v-icon>
            <v-spacer></v-spacer>
        </v-row>
    </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'WizardPrice',
    data () {
      loading: false
      return {
        time: 0,
        results: []
      }
    },
    watch: {
      time() {
        this.$store.commit('setMaxTime', this.time)
      }
    },
    computed:{
      isDisabled () {
        return this.time == 0
      }
    },
    methods: {
      submit: function() {
        this.loading = true;

        var start = this.$store.state.queryForm;

        
        /*
        axios.put('http://hack-env.dpcts33unv.eu-central-1.elasticbeanstalk.com/api/get-offers', {
        
        })        
        */



      }
    }
  }
</script>

<style scoped>

</style>