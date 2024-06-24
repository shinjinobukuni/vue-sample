<script setup>
import { ref } from 'vue'

const hover = ref(false)
</script>

<template>
  <button
    class="btn"
    @mouseenter="($event) => (hover = true)"
    @mouseleave="($event) => (hover = false)"
  >
    <slot name="icon" :hover="hover" random="hello"></slot>
    <slot>Submit</slot>
  </button>
</template>