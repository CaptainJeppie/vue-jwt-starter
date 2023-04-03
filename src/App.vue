<template>
  <navigation />
  <router-view />
</template>

<script>
import { onMounted } from 'vue';
import Navigation from './components/Navigation.vue';
import { useHenkStore } from './stores/store';

export default {
  setup() {
    return{
      store: useHenkStore()
    }
    },
  name: "App",
  components: {
    Navigation
  },
  mounted(){
    this.store.autoLogin();
  }
};
</script>

<style>
</style>
