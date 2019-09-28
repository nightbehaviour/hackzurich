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
      <v-row>
        <v-spacer></v-spacer>
        <v-progress-circular v-if="loading" indeterminate></v-progress-circular>
        <v-spacer></v-spacer>
      </v-row>
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


        //var data = this.$store.state.queryForm;
        var data = {startLocation: "Basel", travelDate: "2019-10-2", travelTime: "13:45"}
        
        
        var start = data.startLocation
        var date = data.travelDate
        var time = data.travelTime



        console.log(start)
        console.log(date)
        console.log(time)

        
        
        
        var response;

        axios.get('http://hack-env.dpcts33unv.eu-central-1.elasticbeanstalk.com/api/get-offers', {
          start: start,
          date: date,
          time: time
        }).then(e => {
          if(e.data.success) {
              console.log(e.data.JSON())
              this.loading = false;
              return e.data
              
          }
        }).then(data => {
          response = data
          console.log(response)
          $emit('nextPage')
        }).catch(error => {
          console.log(error)
        })
        
        



      }
    }
  }
</script>

<style scoped>

</style>