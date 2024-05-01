<template>
    <div class="container mx-auto text-center">
        <div class="flex flex-col justify-center gap-4 items-center mb-6">
            <input type="number" name="min" placeholder="Min" class="input-primary text-center" v-model="minNumber"/>
            <input type="number" name="max" placeholder="Max" class="input-primary text-center" v-model="maxNumber"/>
        </div>
        <div class="text-lg text-red-600">{{numberError}}</div>
        <div class="text-4xl">{{randomNumber}}</div>

        <button class="btn-primary mt-6" @click="generateNumber">Daj číslo</button>
    </div>
</template>
<script setup>
import { ref } from "vue";

const minNumber = ref('')
const maxNumber = ref( '' )

const numberError = ref( '' )
const randomNumber = ref( '' )

function generateNumber() {
    numberError.value = '';
    randomNumber.value = '';

    if (minNumber.value === '' || maxNumber.value === '')
        numberError.value = 'Chýba číslo.';
    else if (minNumber.value > maxNumber.value)
        numberError.value = 'Vymeň čísla.';
    else if (minNumber.value === maxNumber.value)
        numberError.value = 'Čísla sú rovnaké.';
    else if (minNumber.value.toString().length > 16 || maxNumber.value.toString().length > 16)
        numberError.value = 'Veľmi veľké číslo.';
    else
        randomNumber.value = Math.floor(Math.random() * (maxNumber.value - minNumber.value + 1)) + minNumber.value
}
</script>