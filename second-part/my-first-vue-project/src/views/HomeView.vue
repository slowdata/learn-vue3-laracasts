<script setup>
import TabbableTextarea from "@/components/TabbableTextarea.vue"
import { state } from "@/stores/quizStore"
// import { counter } from "@/stores/counterStore"
import { useCounterStore } from "@/stores/CounterStore"

import { ref } from "vue"
import { provide } from "vue"

let comment = ref("Oi")

let counter = useCounterStore()

provide("foo", "bar")
</script>

<template>
  <main>
    <h2>{{ counter.count }}</h2>
    <button @click="counter.increment" :disabled="!counter.remaining">
      increment ({{ counter.remaining }} remaining)
    </button>
    <!--      {{ state.name }}-->
    <form style="margin-top: 100px">
      <TabbableTextarea v-model="comment" style="width: 100%; height: 300px" />
    </form>
    <button @click="state.name = 'foobar!!'">Click Me!</button>
  </main>
</template>
