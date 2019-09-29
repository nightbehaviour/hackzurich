import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    queryForm:{
      startLocation: "",
      traveldate: "",
      traveltime: "",
      passengers: [{
        halbtax: false,
        ga: false
      }],
      maxPricePP: 0,
      maxTime: 0,

    },
    results: {
      destination: "Frick",
      offer_price: 2560,
      rebate: 2540,
      rebate_pct: 0.5

    }
  },
  mutations: {
    setStartLocation (state, val){
      state.queryForm.startLocation = val
    }, 
    setTravelDate (state, val){
      state.queryForm.travelDate = val
    },
    setTravelTime (state, val){
      state.queryForm.travelTime = val
    },
    setOwnHalbtax (state, val){
      state.queryForm.passengers[0].halbtax = val
    },
    setOwnGA (state, val){
      state.queryForm.passengers[0].ga = val
    },
    setPassengers (state, val){
      state.queryForm.passengers = val
    },      
    removePassenger (state){
      state.queryForm.passengers.pop()
    }, 
    setMaxPrice (state, val){
      state.queryForm.maxPricePP = val
    },
    setMaxTime (state, val){
      state.queryForm.maxTime = val
    },


    setResults (state, val){
      state.results = val
    },
    setDestination (state, val){
      state.results.destination = val
    },
    offer_price (state, val){
      state.results.offer_price = val
    },  
    rebate (state, val){
      state.results.rebate = val
    },  
    rebate_pct (state, val){
      state.results.rebate_pct = val
    },    
  },
  actions: {

    getData(state) {
      return state.queryForm;
    },
    
  }
  

})
