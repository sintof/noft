<template>
  <div class="h-full w-full text-center text-primary px-5 overflow-y-auto">
    <div class="h-14 flex justify-between items-center bg-white p-2 rounded-xl">
      <div class="flex justify-start gap-3 items-center">
        <img src="../assets/pp.png" alt="pp" class="w-12">
        <div class="flex flex-col items-start text-sm">
          <div class="">Good morning,</div>
          <div class="font-bold">Hayot Olamova</div>
        </div>
      </div>
      <NotifIcon />
    </div>
    <!-- Subjects -->
    <div>
      <div class="mt-5 font-bold text-lg">
        Subject Marks
      </div>
      <Subject />
      <button class="text-primary font-sans text-sm py-1 px-16 border mt-3 rounded-xl border-noft">Show all</button>
    </div>
    <!-- Posts -->
    <div class="last:mb-20">
      <PhotoPost />
      <TextPost />
      <PhotoPost />
      <TextPost />
    </div>
  </div>
</template>

<script setup>
import NotifIcon from '@/components/icons/NotifIcon.vue';
import Subject from '@/components/Subject.vue'
import PhotoPost from '@/components/PhotoPost.vue'
import TextPost from '@/components/TextPost.vue'
</script>
