<template>
    <div>
      <h1>How much are you willing to spend for your surprise trip?</h1>
      
      <v-row>
        <v-spacer></v-spacer>
        <v-col>
          <v-btn class="priceBtn">0-5 CHF</v-btn>
          <v-btn class="priceBtn">5-10 CHF</v-btn>
        </v-col>
        <v-col>
          <v-btn class="priceBtn">15-20 CHF</v-btn>
          <v-btn class="priceBtn">20+ CHF</v-btn>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
      
    </div>
</template>

<script>

  export default {
    name: 'WizardPrice',

    
  }
</script>

<style scoped>

</style>