<template>
  <BurgerMenu />
  
  <div class="h-screen w-full flex items-center dark:bg-stone-800 text-stone-900 dark:text-stone-300">
    <router-view/>
  </div>
</template>

<script setup>
import BurgerMenu from "./components/BurgerMenu.vue";
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;

}
</style>
