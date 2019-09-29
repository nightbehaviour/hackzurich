<template>
    <div class="d-flex justify-center anim-container flex-column">
        <h1 id="main-title" style="">SBB Surprise</h1>
        <v-divider class="hdiv" mb="12"></v-divider>
        <p>We think you'll enjoy the following trip!</p>
        <h1>{{this.$store.state.queryForm.startLocation}}</h1>

            <v-range-slider
                    class="sliderdisabled"
                    v-model="value1"
                    disabled
                    color="secondary"
                    vertical="vertical"
            ></v-range-slider>
        <h1>{{this.$store.state.results.destination}}</h1>
        <p>{{this.$store.state.queryForm.travelDate}} - {{this.$store.state.queryForm.travelTime}}</p>
        <v-spacer></v-spacer>
        <p>We can offer this trip to the special price of {{(this.$store.state.results.offer_price/100).toFixed(2)}} CHF. This trip is {{(this.$store.state.results.rebate/100).toFixed(2)}} cheaper than the ticket usually is.</p>
        <v-btn id="surpriseButton" block depressed
        >Book your trip now!</v-btn>
    </div>
</template>

<script>
  export default {
    name: 'WizardResult',
    data () {
        return {
          value1: [0, 100],
        }
    },
  }
</script>

<style scoped>

</style>