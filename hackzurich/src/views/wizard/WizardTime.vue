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
              console.log(e)
          }
        }).catch(e => {})        
        



      }
    }
  }
</script>

<style scoped>

</style>