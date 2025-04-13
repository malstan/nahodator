<template>
    <div class="container mx-auto text-center">
        <div class="flex flex-col justify-center gap-4 items-center mb-6">
            <input type="number" name="min" placeholder="Min" class="input-primary" v-model="minNumber"/>
            <input type="number" name="max" placeholder="Max" class="input-primary" v-model="maxNumber"/>
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

const conditions = [
    {
        condition: minNumber.value === '' || maxNumber.value === '',
        message: 'Chýba číslo.'
    },
    {
        condition: minNumber.value > maxNumber.value,
        message: 'Vymeň čísla.'
    },
    {
        condition: minNumber.value === maxNumber.value,
        message: 'Čísla sú rovnaké.'
    },
    {
        condition: minNumber.value.toString().length > 16 || maxNumber.value.toString().length > 16,
        message: 'Veľmi veľké číslo.'
    },
]

function generateNumber() {
    numberError.value = '';
    randomNumber.value = '';

    conditions.forEach(condition => {
        if(condition.condition) numberError.value = condition.message
        else randomNumber.value = Math.floor(Math.random() * (maxNumber.value - minNumber.value + 1)) + minNumber.value
    })
}
</script>
