<template>
    <div class="container mx-auto text-center">
       
            <div class="coin mx-auto w-56 h-56 relative transition-transform duration-1000 ease-in " :class="coinFlipping">
                <div class="side absolute inset-0 bg-center bg-cover z-10 bg-coin-front"></div>
                <div class="side absolute inset-0 bg-center bg-cover bg-coin-back" style="transform: rotateX(-180deg);"></div>
            </div>
            
            <button class="btn-primary mt-12" @click="flipCoin" :disabled="isButtonDisabled">Zatoč</button>
    
    </div>
</template>
<script setup>
import { ref } from "vue";

const coinFlipping = ref( '' );
const isButtonDisabled = ref( false );

function flipCoin () {
    Math.floor(Math.random() * 2) == 1 ? coinFlipping.value = 'flipFront' : coinFlipping.value = 'flipBack';
    isButtonDisabled.value = true;
    
    setTimeout(() => isButtonDisabled.value = false, 2000);
}

</script>

<style>
.coin {
  transform-style: preserve-3d; 
}
.side {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden; }

/* coin animation */
.flipFront {
  -webkit-animation: resultFront 2s ease 0s forwards normal;
  -moz-animation: resultFront 2s ease 0s forwards normal;
  animation: resultFront 2s ease 0s forwards normal; }

.flipBack {
  -webkit-animation: resultBack 2s ease 0s forwards normal;
  -moz-animation: resultBack 2s ease 0s forwards normal;
  animation: resultBack 2s ease 0s forwards normal; }

/* result is front side */
@-webkit-keyframes resultFront {
  0% {
    transform: rotateX(0) scale(1); }
  50% {
    transform: rotateX(900deg) scale(1.5); }
  100% {
    transform: rotateX(1800deg) scale(1); } }

@keyframes resultFront {
  0% {
    transform: rotateX(0) scale(1); }
  50% {
    transform: rotateX(900deg) scale(1.5); }
  100% {
    transform: rotateX(1800deg) scale(1); } }

/* result is back side */
@-webkit-keyframes resultBack {
  0% {
    transform: rotateX(0) scale(1); }
  50% {
    transform: rotateX(990deg) scale(1.5); }
  100% {
    transform: rotateX(1980deg) scale(1); } }

@keyframes resultBack {
  0% {
    transform: rotateX(0) scale(1); }
  50% {
    transform: rotateX(990deg) scale(1.5); }
  100% {
    transform: rotateX(1980deg) scale(1); } }

</style>