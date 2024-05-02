<template>
    <div class="container text-center mx-auto h-full flex flex-col justify-between pb-12 pt-24">
        <div class="mb-6 relative">
            <img v-for="(match, index) of matches" :key="index" :src="match.image" alt="zápalka" class="ease-out duration-700 my-2 cursor-pointer" :class="match.hidden && '-translate-x-1/3'" @click="showMatch(index)">

            <div class="absolute top-0 bottom-0 left-[-27%] w-[27%] bg-white dark:bg-stone-800"></div>
        </div>

        <div>
            <div class="flex justify-center items-center gap-24 max-xs:gap-6">

                <div class="">
                    <img class="mx-auto max-w-[15.3125rem] max-xs:max-w-[12.5rem]" src="../assets/match-no-burned.png" alt="no burned match">
                    <div class="flex justify-center align-center gap-3 mb-8 mt-4">
                        <button><MinusCircleIcon @click="notBurned > limits.min && notBurned--" class="size-12 max-xs:size-8"/></button>
                        <input type="number" name="noBurned" readonly v-model="notBurned" class="input-primary max-w-24 max-xs:max-w-18">
                        <button><PlusCircleIcon @click="(canAdd() && notBurned < limits.max) && notBurned++" class="size-12 max-xs:size-8"/></button>
                    </div> 

                    <img class="mx-auto max-w-[15.3125rem] max-xs:max-w-[12.5rem]" src="../assets/match-burned.png" alt="burned match">
                    <div class="flex justify-center gap-3 mt-4">
                        <button><MinusCircleIcon @click="burned > limits.min && burned--" class="size-12 max-xs:size-8"/></button>
                        <input type="number" name="burned" readonly v-model="burned"  class="input-primary max-w-24 max-xs:max-w-18">
                        <button><PlusCircleIcon @click="(canAdd() && burned < limits.max) && burned++" class="size-12 max-xs:size-8"/></button>
                    </div>
                </div>
                
                <button @click="matchesSubmited"><ArrowPathIcon class="size-32 max-xs:size-20"/></button>
            </div>
            
            <div class="text-lg text-red-600 my-6">{{errorMessage}}</div>
        </div>

    </div>
</template>
<script setup>
import { ref } from "vue";

import {PlusCircleIcon, MinusCircleIcon, ArrowPathIcon } from '@heroicons/vue/24/outline'

const notBurned = ref( 1 );
const burned = ref( 1 );

const matches = ref([])

const limits = {
    min: 1,
    max: 9
}

const errorMessage = ref("")

function canAdd () {
    if ( notBurned.value + burned.value > 9 ) {
        errorMessage.value = "Príliš veľa zápaliek";
        setTimeout( () => {
             errorMessage.value = ""
        }, 1000)
        return false;
    }
    return true;
}

function matchesSubmited () {

    matches.value = [];

    const matchesCount = burned.value + notBurned.value;

    const images = {
        notBurned: "img/match-no-burned.png",
        burned: "img/match-burned.png",
    }

    let burnedIndexes = [];
    let randomIndex;
    for (let i = 0; i < burned.value; i++) {
        do {
            randomIndex = Math.floor(Math.random() * matchesCount);
        } while (burnedIndexes.includes(randomIndex));
        burnedIndexes.push( randomIndex );
    }

    for ( let i = 0; i < matchesCount; i++ ) {
        let match = {
            image: burnedIndexes.includes( i ) ? images.burned : images.notBurned,
            hidden: true
        }
        matches.value.push(match)
    }
}

function showMatch ( index ) {
    matches.value[ index ].hidden = false;
}
</script>