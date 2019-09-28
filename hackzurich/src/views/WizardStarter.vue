<template>
    <v-container class="wizard-container white d-flex flex-column">
        <h1>ahhhiuhd</h1>
        <transition name="slide" mode="out-in">
            <component
                    :is="currentStepComponent"
                    @nextPage="nextPage"
            />
        </transition>

        <BottomNav
                @nextPage="nextPage"
                @prevPage="prevPage"
        />
    </v-container>
</template>

<script>
  import BottomNav from '../components/BottomNav'

  const wizardSteps = [
    'WizardDateAndTime',
    'WizardDepartureLocation'
  ]

  export default {
    components: {
      BottomNav,
      WizardDateAndTime: () => import('./wizard/WizardDateAndTime.vue'),
      WizardDepartureLocations: () => import('./wizard/WizardDepartureLocations.vue')
    },
    data () {
      return {
        onboardingStepIndex: 0
      }
    },
    computed: {
      currentStepComponent () {
        return wizardSteps[this.onboardingStepIndex]
      }
    },
    methods: {
      nextPage () {
        this.onboardingStepIndex++
      },
      prevPage () {
        this.onboardingStepIndex--
      }
    }
  }
</script>

<style>
    .wizard-container {
        height: 100%;
    }

    .slide-enter-active, .slide-leave-active {
        transition: .5s;
    }
    .slide-enter {
        transform: translate(100%, 0);
        opacity: 0;
    }
    .slide-enter-to {
        opacity: 1;
    }
    .slide-leave-to {
        transform: translate(-100%, 0);
        opacity: 0;
    }
</style>
