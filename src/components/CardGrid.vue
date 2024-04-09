<script setup lang="ts">
import specs from "../../public/specs/index.json" with { type: "json" };
import CardItem from "./CardItem.vue";

defineProps<{ baseUrl: URL }>()

const items = specs
</script>
<template>
  <div class="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3 w-11/12">
    <CardItem :base-url="baseUrl" v-for="item in items" :item="item" :key="item.id" />
  </div>
</template>
