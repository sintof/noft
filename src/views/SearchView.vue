<template>
  <div class="h-full w-full text-center text-primary px-5 overflow-y-auto">
    <div class="flex gap-3 p-3 bg-[#DBE4F3] rounded-xl focus:border-noft focus:border-2 items-center text-black">
      <SearchIcon />
      <div class="w-full"><input placeholder="Search..." class="w-full bg-[#DBE4F3] focus:outline-none font-mono"></div>
    </div>
    <div class="mt-3 flex justify-around">
      <label><input type="radio" v-model="filterChosen" class="peer hidden" value="all" name="type">
        <span
          class="text-primary ml-1 cursor-pointer peer-checked:text-secondary peer-checked:bg-primary
           font-sans text-sm py-1 px-10 border mt-3 rounded-xl border-noft">All</span>
      </label>
      <label><input type="radio" v-model="filterChosen" class="peer hidden" value="media" name="type">
        <span
          class="text-primary mr-1 cursor-pointer peer-checked:text-secondary peer-checked:bg-primary
           font-sans text-sm py-1 px-8 border mt-3 rounded-xl border-noft">Media</span>
      </label>
      <label><input type="radio" v-model="filterChosen" class="peer hidden" value="text" name="type">
        <span
          class="text-primary ml-1 cursor-pointer peer-checked:text-secondary peer-checked:bg-primary
           font-sans text-sm py-1 px-8 border mt-3 rounded-xl border-noft">Text</span>
      </label>
    </div>
    <div class="mt-3 p-2 rounded-xl bg-[#B8F2FF] flex flex-col gap-2" v-if="filterChosen">
      <div class="flex justify-around">
        <label><input type="checkbox" class="peer hidden" value="media" name="type">
          <span class="text-primary cursor-pointer peer-checked:text-secondary peer-checked:bg-primary
         font-sans text-sm py-1 px-6 border rounded-xl border-noft">Clubs</span>
        </label>
        <label><input type="checkbox" class="peer hidden" value="text" name="type">
          <span class="text-primary cursor-pointer peer-checked:text-secondary peer-checked:bg-primary
         font-sans text-sm py-1 px-6 border rounded-xl border-noft">Events</span>
        </label>
        <label><input type="checkbox" class="peer hidden" value="text" name="type">
          <span class="text-primary cursor-pointer peer-checked:text-secondary peer-checked:bg-primary
         font-sans text-sm py-1 px-6 border rounded-xl border-noft">Scolarships</span>
        </label>
      </div>
      <div class="flex justify-around">
        <label><input type="checkbox" class="peer hidden" value="text" name="type">
          <span class="text-primary cursor-pointer peer-checked:text-secondary peer-checked:bg-primary
         font-sans text-sm py-1 px-6 border rounded-xl border-noft">Affairs</span>
        </label>
        <label><input type="checkbox" class="peer hidden" value="text" name="type">
          <span class="text-primary cursor-pointer peer-checked:text-secondary peer-checked:bg-primary
         font-sans text-sm py-1 px-6 border rounded-xl border-noft">Rooms</span>
        </label>
        <label><input type="checkbox" class="peer hidden" value="text" name="type">
          <span class="text-primary cursor-pointer peer-checked:text-secondary peer-checked:bg-primary
         font-sans text-sm py-1 px-6 border rounded-xl border-noft">Achieves</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SearchIcon from '../components/icons/SearchIcon.vue';

const filterChosen = ref(false)
</script>