<script setup lang="ts">
import CardItem from "./CardItem.vue";
const items = Array(6).map((_, i) => i + 1);
</script>
<template>
  <div class="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3 w-11/12">
    <CardItem v-for="item in items" :key="item" />
  </div>
</template>
