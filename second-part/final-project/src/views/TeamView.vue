<template>
  <TeamHead />

  <div class="place-self-center flex flex-col gap-y-3 mt-6" style="width: 725px">
    <TeamMembers />
  </div>

  <TeamFooter />
</template>
<script setup>
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamHead from "@/components/Teams/TeamHeader.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";

//import team from "@/team.json";
import { useTeamStore } from "@/stores/TeamStore";

// const { team } = useTeamStore()
const team = useTeamStore()


</script>
