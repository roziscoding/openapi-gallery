<script setup lang="ts">
import { ref } from "vue";
import CardGrid from "./CardGrid.vue";
import SearchBar from "./SearchBar.vue";

defineProps<{ baseUrl: URL }>();
const searchTerm = ref<string>("");
const setSearchTerm = (term: string) => (searchTerm.value = term);
</script>
<template>
  <SearchBar class="mt-10" @search="setSearchTerm" />
  <CardGrid :baseUrl="baseUrl" :searchTerm="searchTerm" class="mt-10" />
</template>
