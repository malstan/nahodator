<template>
  <nav >
    <div class="flex flex-col gap-1 absolute top-6 right-6 z-30 cursor-pointer" @click="clickToToggle">
        <span :class="isOpen ? 'invisible ' : 'visible'" class="w-8 h-1 block bg-stone-800 dark:bg-stone-300"></span>
        <span class="w-8 h-1 block bg-stone-800 dark:bg-stone-300"></span>
        <span :class="isOpen ? 'invisible ' : 'visible'" class="w-8 h-1 block bg-stone-800 dark:bg-stone-300"></span>
    </div>

      <div :class="isOpen ? 'right-0 ' : '-right-80'" class="fixed top-0 bottom-0 p-6 w-72 max-w-full bg-primary dark:bg-primaryDarker ease-in duration-300 z-20">

        <div class="absolute cursor-pointer" @click="toggleDark()">
          <SunIcon v-if="!isDark"  class="size-8 text-stone-800 dark:text-stone-300"/>
          <MoonIcon v-if="isDark" class="size-8 text-stone-800 dark:text-stone-300"/>
        </div>

        <ul class="flex flex-col items-start mt-20 text-2xl gap-5 text-stone-800 dark:text-stone-300">
          <li @click="clickToToggle"><router-link to="/">Domov</router-link></li>
          <li @click="clickToToggle"><router-link to="/coin">Hod mincou</router-link></li>
            <li @click="clickToToggle"><router-link to="/random">Náhodné číslo</router-link></li>
            <li @click="clickToToggle"><router-link to="/magicball">Magic 8 ball</router-link></li>
            <li @click="clickToToggle"><router-link to="/matches">Zápalky</router-link></li>
            <li @click="clickToToggle"><router-link to="/crossroads">Križovatky</router-link></li>
          </ul>
        </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useDark, useToggle  } from '@vueuse/core';

import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'

const isOpen = ref( false );

const isDark = useDark();
const toggleDark = useToggle( isDark );

function clickToToggle () {
  isOpen.value = !isOpen.value;
}

</script>