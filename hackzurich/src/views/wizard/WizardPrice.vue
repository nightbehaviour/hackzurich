<template>
    <div>

      <h1>How much are you willing to spend for your surprise trip?</h1>
      <v-divider class="hdiv" mb="12"></v-divider>

      <v-row>
        <v-spacer></v-spacer>
        <v-col>
          <v-btn class="priceBtn" onclick="this.maxPrice=5" outlined depressed>0-5 CHF</v-btn>
          <v-btn class="priceBtn" onclick="this.maxPrice=20" outlined depressed>15-20 CHF</v-btn>
        </v-col>
        <v-col>
          <v-btn class="priceBtn" onclick="this.maxPrice=10" outlined depressed>5-10 CHF</v-btn>
          <v-btn class="priceBtn" onclick="this.maxPrice=999" outlined depressed>20+ CHF</v-btn>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
      
    </div>
</template>

<script>

  export default {
    name: 'WizardPrice',
    data () {
      return {
        maxPrice: 0
      }
    },
    watch: {
      maxPrice() {
        this.$store.commit('setMaxPrice', this.maxPrice);
      }
    }
    
  }
</script>

<style scoped>

</style>