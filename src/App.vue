<template>
  <navigation />
  <router-view />
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  name: "App",
  components: {
    Navigation
  },
};
</script>

<style>
</style>
