<template>
    <div>
      <h1>When are you free?</h1>
      <v-divider class="hdiv"></v-divider>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            class="date"
            v-model="date"
            label="Pick a date"
            prepend-icon=""
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" no-title scrollable>
          <v-btn text color=$sbb-black @click="menu = false">Cancel</v-btn>
          <v-btn text color=$sbb-black @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    
      <v-row justify="space-around">
        <v-col class="lg-offset8" md="12" lg="4">
          <v-text-field
                  class="date"
                  label="Pick a time"
                  value="12:30:00"
                  type="time"
                  v-model="selectedTime"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-icon class="location-pin" id="location-pin" >mdi-calendar-question</v-icon>
        <v-spacer></v-spacer>
      </v-row>
    </div>
</template>

<script>
  export default {
    name: 'WizardDate',
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      selectedTime: "11:15",
    }),
    watch: {
      date() {
        this.$store.commit('setTravelDate', this.date)
      },
      selectedTime() {
        this.$store.commit('setTravelTime', this.selectedTime)
      }
    }
  }
</script>

<style scoped>

</style>