<script setup >
import { useStorage } from '@/composables/useStorage'

let food = useStorage('food', 'Tacos')

let age = useStorage('age', 46)


</script>

<template>
  <main>
    <p>
      What is your favorite food? <input type="text" v-model="food">
    </p>
    <p>
      What is age? <input type="text" v-model="age">
    </p>
  </main>
</template>
