<template>
  <v-row class="flex-grow-0">
    <v-spacer></v-spacer>
    <h3>Passenger</h3>
    <v-spacer></v-spacer>
    <v-chip class="chips" :color="passengerData.halbtax ? 'primary':''" :value="passengerData.halbtax" @click="passengerData.halbtax = !passengerData.halbtax">1/2</v-chip>
    <v-chip class="chips" :color="passengerData.ga ? 'primary':''" :value="passengerData.ga" @click="passengerData.ga = !passengerData.ga">GA</v-chip>
    <v-spacer></v-spacer>
  </v-row>
</template>


<script>
  export default {
    name: 'WizardPeople',
    components: {
    },
    props: {
      passenger: Object
    },
    data(){
      return{
        passengerData: {
          halbtax: false,
          ga: false
        }
      }
    },
    created() {
      this.passengerData = this.passenger
    },
    watch: {
      passengerData: {
        deep: true,
        handler(){
          this.$parent.$emit('input', this.passengerData)
        }
      }
    }
  }
</script>