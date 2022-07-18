<template>
  <div>
    <p><button @click="flash('Yay!', 'It Works on the about page!', 'info')">Click Me</button></p>
  </div>
</template>

<script setup>
import { useFlash } from '@/composables/useFlash'

const { flash } = useFlash()
</script>