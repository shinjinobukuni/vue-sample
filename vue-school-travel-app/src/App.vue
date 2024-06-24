<template>
  <TheNavigationVue></TheNavigationVue>
  <div class="container">
    <router-view v-slot="{Component}">
        <component :is="Component" :key="$route.path"></component>
    </router-view>
  </div>
  
</template>
<script>
import TheNavigationVue from "@/components/TheNavigation.vue";

export default {
  components: {TheNavigationVue}
}

</script>
<style>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>