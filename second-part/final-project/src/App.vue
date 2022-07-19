<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav
        class="flex justify-between p-4 items-center border-b border-gray-200"
      >
        <h2 class="text-3xl font-bold underline">Teams</h2>
        <div>
          <RouterLink to="/">Team</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
