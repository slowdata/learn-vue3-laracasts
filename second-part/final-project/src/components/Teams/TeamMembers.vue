<template>
  <div class="place-self-center flex flex-col gap-y-3 mt-6" style="width: 725px">
    <table class="table-fixed border-spacing-2 border-separate">
      <thead>
        <tr>
          <th class="text-left px-6 py-2">Name</th>
          <th class="text-left px-6 py-2">Email</th>
          <th class="text-left px-6 py-2">Status</th>
        </tr>
      </thead>
      <tbody>
        <TeamMember v-for="member in team.members" :member="member" :key="member.id" />
      </tbody>
    </table>
    <p v-show="!team.remaining" class="text-right text-gray-600 italic">
      There are no remaining team spots. Upgrade to add more.
    </p>
  </div>
</template>
<script setup>
import TeamMember from "@/components/Teams/TeamMember.vue";

import { useTeamStore } from "@/stores/TeamStore";

let team = useTeamStore();

</script>
