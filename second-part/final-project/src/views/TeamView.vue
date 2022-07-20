<template>
  <TeamHead :team="team" />
  <div
    class="place-self-center flex flex-col gap-y-3 mt-6"
    style="width: 725px"
  >
    <TeamMembers :team="team" />

    <p
      v-show="team.spots === team.members.length"
      class="text-right text-gray-600 italic"
    >
      There are no remaining team spots. Upgrade to add more.
    </p>
  </div>
  <TeamFooter :team="team"></TeamFooter>
</template>
<script setup>
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamHead from "@/components/Teams/TeamHeader.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";

import team from "@/team.json";
</script>
