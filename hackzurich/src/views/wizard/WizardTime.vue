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

      
    </div>
</template>

<script>
  let fetch = require('node-fetch')

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
    },
    methods: {
      submit: function() {
        var OBJECT = {  
          method: 'GET',
          
        }
        var baseurl = 'http://hack-env.dpcts33unv.eu-central-1.elasticbeanstalk.com';
        var apiPath = '/api/get-offers';
        var query = "";

        var url = new URL(baseurl+apiPath);
        url.search = new URLSearchParams(query);

        fetch(url, OBJECT)  
          .then(response => response.text())
          .then(data => {
            console.log(data);
            return data;
        });


      }
    }
  }
</script>

<style scoped>

</style>