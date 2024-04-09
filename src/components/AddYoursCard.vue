<script setup lang="ts">
import { PlusCircleIcon } from "@heroicons/vue/24/outline";
</script>
<template>
  <a
    target="_blank"
    href="https://github.com/roziscoding/openapi-gallery/blob/main/CONTRIBUTING.md"
    :class="
      [
        'shadow-md',
        'rounded-lg',
        'p-6',
        'border-2',
        'border-slate-800',
        'hover:bg-opacity-50',
        'hover:bg-slate-900',
        'flex',
        'items-center',
        'justify-center',
        'flex-col',
        'cursor-pointer',
      ].join(' ')
    "
  >
    <p class="text-white mt-2">Didn't find what you were looking for?</p>
    <h2 class="text-slate-500 text-xl font-bold inline-flex gap-1 items-center">Add yours!</h2>
    <PlusCircleIcon class="w-16 h-16 fill-slate-500 mt-3" />
  </a>
</template>
