<template>
  <div class="h-full w-full text-center text-primary px-4">
    <div class="mt-3 flex justify-evenly">
      <label><input type="radio" checked class="peer hidden" value="all" name="type">
        <span class="text-primary ml-1 cursor-pointer peer-checked:text-secondary peer-checked:bg-primary
           font-sans text-sm py-1 px-6 border mt-3 rounded-xl border-noft">Personal</span>
      </label>
      <label><input type="radio" class="peer hidden" value="media" name="type">
        <span class="text-primary mr-1 cursor-pointer peer-checked:text-secondary peer-checked:bg-primary
           font-sans text-sm py-1 px-6 border mt-3 rounded-xl border-noft">Universal</span>
      </label>
      <label><input type="radio" class="peer hidden" value="text" name="type">
        <span class="text-primary ml-1 cursor-pointer peer-checked:text-secondary peer-checked:bg-primary
           font-sans text-sm py-1 px-6 border mt-3 rounded-xl border-noft">Service</span>
      </label>
    </div>
    <div class="mt-5 flex flex-col gap-2 overflow-y-auto mb-16">
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
    </div>
  </div>
</template>

<script setup>
import Chat from '@/components/Chat.vue';
</script>