<script lang="ts" setup>
defineEmits<{ (e: "search", term: string): void }>();
</script>
<template>
  <input
    :class="[
      'border-2',
      'border-slate-500',
      'text-slate-500',
      'rounded-lg',
      'h-10',
      'p-5',
      'w-11/12',
      'transition-all',
      'outline-slate-700',
      'duration-100',
      'ease-linear',
    ]"
    type="text"
    placeholder="Search..."
    @input="($event) => $emit('search', ($event.target as HTMLInputElement).value)"
  />
</template>
