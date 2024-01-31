<template>
  <div class="h-full w-full text-center text-primary px-5">
    <div class="h-14 flex justify-between items-center bg-white p-2 rounded-xl">
      <div class="flex justify-start gap-3 items-center">
        <img src="../assets/pp.png" alt="pp" class="w-12">
        <div class="flex flex-col items-start text-sm">
          <div class="">Good morning,</div>
          <div class="font-bold">John Doe</div>
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
    <div class="flex flex-col gap-4">
      <div class="flex justify-between items-center">
        <div class="flex justify-between gap-3">
          <img src="../assets/pp.png" alt="pp" class="w-12">
          <div class="flex flex-col leading-tight justify-center">
            <span>John</span>
            <span>Doe</span>
          </div>
        </div>
        <div class="flex flex-col items-end leading-none justify-center">
          <EllipsisIcon />
          <span>September 19</span>
        </div>
      </div>
    </div>
    <img src="../assets/bears.png" alt="">
    <div>
      <div>Dear new TSUE students, we are excited to welcome you to our university.</div>
      <div>Since our university was said to be 5-star university and was located in the heart of the city,
        it became even more popular. Therefore, this year we got the most number of students.
        Whatever, we are happy to welcome you to our university!
      </div>
    </div>
  </div>
</template>

<script setup>
import NotifIcon from '@/components/icons/NotifIcon.vue';
import EllipsisIcon from '@/components/icons/EllipsisIcon.vue';
import Subject from '@/components/Subject.vue'
</script>