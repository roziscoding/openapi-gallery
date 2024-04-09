<script setup lang="ts">
import { ArrowDownTrayIcon, BookOpenIcon, CodeBracketIcon } from "@heroicons/vue/24/outline";
import { defineProps, toRefs } from "vue";
import GithubIcon from "./GithubIcon.vue";
const props = defineProps<{
  item: { id: string; title: string; description: string; version: string };
  baseUrl: URL;
}>();
const { item, baseUrl } = toRefs(props);
</script>
<template>
  <div class="shadow-md rounded-lg p-6 border-2 border-slate-800 hover:bg-opacity-50 hover:bg-slate-900">
    <h2 class="text-slate-500 text-xl font-bold inline-flex gap-1 items-center">
      {{ item.title }}
      <a
        target="_blank"
        :href="`https://github.com/roziscoding/openapi-gallery/blob/main/public/specs/${item.id}.json`"
      >
        <GithubIcon class="w-5 h-5 fill-slate-500 hover:fill-white transition-colors" />
      </a>
    </h2>
    <p class="text-white mt-2">{{ item.description }}</p>
    <div class="flex flex-wrap justify-end lg:justify-start gap-2 pt-3">
      <a
        target="_blank"
        :href="`/specs/${item.id}.json`"
        class="p-3 bg-slate-800 rounded-lg text-white text-sm mt-2 flex md:w-full lg:w-auto"
      >
        <CodeBracketIcon class="h-5 w-5 text-white mr-0 md:mr-3" />
        <span class="hidden md:block">Raw</span>
      </a>
      <a
        target="_blank"
        :href="`https://editor.swagger.io/?url=${baseUrl.protocol}//${baseUrl.host}/specs/${item.id}.json`"
        class="p-3 bg-slate-800 rounded-lg text-white text-sm mt-2 flex md:w-full lg:w-auto"
      >
        <BookOpenIcon class="h-5 w-5 text-white mr-0 md:mr-3" />
        <span class="hidden md:block">SwaggerUI</span>
      </a>
      <a
        target="_blank"
        :href="`/specs/${item.id}.json`"
        download
        class="p-3 bg-slate-800 rounded-lg text-white text-sm mt-2 flex md:w-full lg:w-auto"
      >
        <ArrowDownTrayIcon class="h-5 w-5 text-white mr-0 md:mr-3" />
        <span class="hidden md:block">Download</span>
      </a>
    </div>
  </div>
</template>
