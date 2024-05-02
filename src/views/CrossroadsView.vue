<template>
    <div class="container text-center mx-auto h-full flex flex-col justify-around pb-12 pt-24">
        <div class="relative origin-bottom w-full h-[25rem]" :style="crossroadsAngle > 0 && 'transform: rotate(-' + crossroadsAngle + 'deg)'">
              <img v-for="(arrow, index) of arrows" :key="index" :src="arrow.image" alt="šípka" class="absolute left-[41%] duration-1000 ease-in-out origin-bottom " :style="'transform: rotate(' + arrow.rotate + 'deg)'">
        </div>
              
        <div  class="flex justify-center items-center gap-24 max-xs:gap-6">
           <div class="flex justify-center align-center gap-3">
                <button><MinusCircleIcon @click="roadCount > limits.min && roadCount--" class="size-12 max-xs:size-8"/></button>
                <input type="number" name="roads" readonly v-model="roadCount" class="input-primary max-w-24 max-xs:max-w-18">
                <button><PlusCircleIcon @click="roadCount < limits.max && roadCount++" class="size-12 max-xs:size-8"/></button>
            </div> 
        
            <button @click="generateCrossroads()"><ArrowPathIcon class="size-32 max-xs:size-20"/></button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

import { PlusCircleIcon, MinusCircleIcon, ArrowPathIcon } from '@heroicons/vue/24/outline'

const roadCount = ref( 2 );

const arrows = ref( [] );
const crossroadsAngle = ref(0)

const limits = {
    min: 2,
    max: 8
}

function generateCrossroads () {

    arrows.value = []

    crossroadsAngle.value = roadCount.value % 2 == 0 ? 6.5 : 0;

    const finalRoad = Math.floor( Math.random() * roadCount.value );

     const images = {
        green: "img/arrow-green.png",
        black: "img/arrow.png",
    }

    let rotate = 0;
    for (let i = 0; i < roadCount.value; i++) {
        let road = {
            image: i == finalRoad ? images.green : images.black,
            rotate: rotate
        };

        arrows.value.push( road )

        rotate *= -1;
        i%2 == 0 && (rotate += 13)
    }
}
</script>