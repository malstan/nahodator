<template>

    <div class="container text-center"> 
        <div :class="ballShaking && 'shaking'" class="h-[17.8125rem] max-xs:h-[14.6875rem] w-[18.125rem] max-xs:w-[15rem] mx-auto bg-magic-ball bg-center bg-cover flex justify-center items-center">
            <span v-if="answer" class="w-[8.125rem] aspect-square bg-white rounded-full text-center flex justify-center items-center text-stone-700 ml-1">{{ answer }}</span>
        </div>
        
        <input type="text" name="question" class="input-primary mt-6" placeholder="Opýtaj sa" autocomplete="off" v-model="question"/>

        <div class="text-lg text-red-600 my-6">{{questionError}}</div>

        <button class="btn-primary" @click="shake">Zatras</button>
   
    </div>

</template>
<script setup>
import { ref } from "vue";


const question = ref( '' );
const questionError = ref( '' );

const ballShaking = ref( false );

const answers = [
    "Je to isté.", "Je to rozhodne tak.", "Bezpochýb.", "Áno, určite.", "Spoľahni sa.", "Ako vidím, áno.", "Pravdepodobne.", "Vyzerá to dobre.", "Áno.", "Znamenia ukazujú na áno.",
    "Je to zahmlené.", "Skús neskôr.", "Teraz radšej nepoviem.", "Teraz sa nedá predpovedať.", "Sústreď sa a spýtaj sa znova.",
    "Nerátaj s tým.", "Moja odpoveď je nie.", "Moje zdroje tvrdia nie.", "Nevyzerá to dobre.", "Veľmi pochybné."
];
const answer = ref( '' );

function shake () {
    questionError.value = '';
    answer.value = '';

    if ( question.value == '' ) {
        questionError.value = "Zadaj otázku typu áno/nie a magická guľa ti povie odpoveď.";
        return;
    }

    ballShaking.value = true;

    setTimeout(() => {
        // generate answer
        const index = Math.floor(Math.random() * 19);
        answer.value = answers[index];
        ballShaking.value = false;
    },
    1000);
}

</script>

<style>
.shaking {
    -webkit-animation: shake 1s ease-in-out 0s forwards normal;
    -moz-animation: shake 1s ease-in-out 0s forwards normal;
    animation: shake 1s ease-in-out 0s forwards normal;
}

@keyframes shake {
    0% { transform: translateX(0); }

    20% { transform: translateX(20px); }

    40% { transform: translateX(-20px); }

    60% { transform: translateX(20px); }

    80% { transform: translateX(-20px); }

    100% { transform: translateX(0); }
}
</style>