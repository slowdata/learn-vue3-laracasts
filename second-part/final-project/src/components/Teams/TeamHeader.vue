<template>
  <header class="flex justify-between">
    <div>
      <button
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
        :disabled="remaining">
        Add Menber ({{ remaining }} Spots Left)
      </button>
    </div>

    <div>
      <h3 class="inline-flex items-center text-3xl relative">
        <span class="mr-2">{{ icon }}</span>
        {{ name }} Team
        <span
          class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -right-4 -top-2">
          {{ spots }}
        </span>
      </h3>
    </div>
  </header>
</template>
<script setup>
import { useTeamStore } from '@/stores/TeamStore';

const { name, icon, spots, remaining } = useTeamStore()

</script>
