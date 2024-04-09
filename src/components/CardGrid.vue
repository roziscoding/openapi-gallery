<script setup lang="ts">
import { computed, toRefs } from "vue";
import specs from "../../public/specs/index.json" with { type: "json" };
import CardItem from "./CardItem.vue";

const props = defineProps<{ baseUrl: URL, searchTerm?: string }>()

const { searchTerm } = toRefs(props)
const items = specs
const filteredItems = computed(() => {
  if (!searchTerm.value) return items
  return items.filter((item) => item.title.toLowerCase().includes(searchTerm.value!.toLowerCase()))
})
</script>
<template>
  <div class="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3 w-11/12">
    <CardItem :base-url="baseUrl" v-for="item in filteredItems" :item="item" :key="item.id" />
  </div>
</template>
