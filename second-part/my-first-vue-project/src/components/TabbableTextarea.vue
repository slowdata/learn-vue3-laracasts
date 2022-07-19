<template>
  <div>
    <div>{{ foo }}</div>
    <textarea
      @keydown.tab.prevent="onTabPress"
      v-text="modelValue"
      @keyup="emit('update:modelValue', $emit.target.value)"
    />
  </div>
</template>

<script setup>
import { defineEmits, inject } from "vue"

let emit = defineEmits(["update:modelValue"])

defineProps({
  modelValue: String,
})
function onTabPress(e) {
  let textarea = e.target

  let val = textarea.value
  let start = textarea.selectionStart
  let end = textarea.selectionEnd

  textarea.value = val.substring(0, start) + "\t" + val.substring(end)
  textarea.selectionStart = textarea.selectionEnd = start + 1
}

const foo = inject("foo")
</script>
