<template>
    <v-container class="wizard-container white d-flex flex-column">
        <TopNav
                @nextPage="nextPage"
                @prevPage="prevPage"></TopNav>
        <transition name="slide" mode="out-in">
            <component
                    :is="currentStepComponent"
                    @nextPage="nextPage"
            />
        </transition>
    </v-container>
</template>

<script>
  import TopNav from '../components/TopNav'

  const wizardSteps = [
    'WizardDepartureLocations',
    'WizardDateAndTime',
    'WizardPeople',
    'WizardPrice',
    'WizardTime',
    'WizardResult'
  ]

  export default {
    components: {
      TopNav,
      WizardDepartureLocations: () => import('./wizard/WizardDepartureLocations.vue'),
      WizardDateAndTime: () => import('./wizard/WizardDateAndTime.vue'),
      WizardPeople: () => import('./wizard/WizardPeople.vue'),
      WizardPrice: () => import('./wizard/WizardPrice.vue'),
      WizardTime: () => import('./wizard/WizardTime.vue'),
      WizardResult: () => import('./wizard/WizardResult.vue')

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
