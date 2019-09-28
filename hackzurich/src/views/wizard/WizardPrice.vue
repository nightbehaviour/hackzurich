<template>
    <div>

      <h1>How much are you willing to spend for your surprise trip?</h1>
      <v-divider class="hdiv" mb="12"></v-divider>

      <v-row>
        <v-spacer></v-spacer>
        <v-col>
          <v-btn class="priceBtn" outlined depressed>0-5 CHF</v-btn>
          <v-btn class="priceBtn" outlined depressed>5-10 CHF</v-btn>
        </v-col>
        <v-col>
          <v-btn class="priceBtn" outlined depressed>15-20 CHF</v-btn>
          <v-btn class="priceBtn" outlined depressed>20+ CHF</v-btn>
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