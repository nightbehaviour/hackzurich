<template>
    <div>
      <h1>How much time do you have on your hands?</h1>
      <v-divider class="hdiv"></v-divider>
      
      <v-slider
        v-model="time"
      ></v-slider>

      <v-btn  v-if="this.time!=0" id="surpriseButton" block depressed
        v-on:click="submit"
      >Surprise Me!</v-btn>

      <v-progress-circular v-if="loading" indeterminate></v-progress-circular>

      
    </div>
</template>

<script>
  let fetch = require('node-fetch')
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
    methods: {
      submit: function() {
        this.loading = true;

        var start = this.$store.state.queryForm;
        console.log(start)
        
        
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