<script setup>
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";
import Model from '@/components/Model.vue'

import { ref } from "vue";
import { useTeamStore } from "@/stores/TeamStore.js";

const team = useTeamStore();
team.fill();

let showModel = ref(false)

</script>

<template>
  <TeamHeader @add="showModel = true" />
  <TeamMembers />
  <TeamFooter />

  <Model :show="showModel" @close="showModel = false">
    <template #default>
      Override header
    </template>

  </Model>
</template>
