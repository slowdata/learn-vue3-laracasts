<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="flex justify-between px-8 py-4 items-center border-b border-gray-200">
        <h2 class="text-3xl font-bold text-gray-600">Teams</h2>
        <div class="text-gray-600 flex justify-evenly px-4 w-40">
          <RouterLink to="/">Team</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </div>
      </nav>
    </div>
  </header>
  <div class="grid p-8">
    <RouterView />
  </div>
</template>
