<script setup>
import CoffeePlan from './CoffeePlan.vue'
import { ref } from 'vue'

const plans = ref(['The Single', 'The Curious', 'The Addict', 'The Hacker'])

const selectedCoffeePlan = ref()

function handleSelectCofeePlan(name) {
  console.log(name)
  selectedCoffeePlan.value = name
}
</script>
<template>
  <div class="plans">
    selected: {{ selectedCoffeePlan }}
    <CoffeePlan
      v-for="plan in plans"
      :key="plan"
      :name="plan"
      :selected="plan === selectedCoffeePlan"
      @selected="($event) => handleSelectCofeePlan($event)"
    ></CoffeePlan>
  </div>
</template>