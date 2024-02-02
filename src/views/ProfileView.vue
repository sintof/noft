<template>
  <div class="h-full w-full text-center text-primary px-6 mt-4 flex flex-col items-center">
    <img src="../assets/pp2.png" class="w-36 h-36">
    <div class="font-['Roboto'] text-lg font-medium text-black mt-1">Dunyo Hayotova Olam qizi</div>
    <div class="font-['Roboto'] text-sm">+998 90 123 45 67</div>
    <button
      class="flex font-sans items-center gap-2 mt-2 py-2 px-6 text-white border border-noft rounded-xl bg-noft text-xs">
      <span>Edit profile</span>
      <PencilSquareIcon />
    </button>
    <div class="py-4 mt-8 border-t border-b border-zinc-500 text-sm text-black w-full flex flex-col gap-1">
      <div class="flex justify-between items-center">
        <div class="flex gap-1 items-center">
          <UniversityIcon class="text-noft" />
          <span>University</span>
        </div>
        <span>TSUE</span>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex gap-1 items-center">
          <BookmarkIcon class="text-noft" />
          <span>Faculty</span>
        </div>
        <span>Economics</span>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex gap-1 items-center">
          <CheckBadgeIcon class="text-noft" />
          <span>Course</span>
        </div>
        <span>First</span>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex gap-1 items-center">
          <GroupIcon class="text-noft" />
          <span>Group</span>
        </div>
        <span>EK-63</span>
      </div>
    </div>
    <div class="py-2 border-b border-zinc-500 text-sm text-black w-full flex justify-between">
      <span>Date of Birth</span>
      <span>01/01/2001</span>
    </div>
    <div class="py-2 border-b border-zinc-500 text-sm text-black w-full flex justify-between">
      <span>Student ID</span>
      <span>37813829</span>
    </div>
    <div class="py-2 border-b border-zinc-500 text-sm text-black w-full flex justify-between">
      <span>Phone Number</span>
      <span>+998 90 123 45 67</span>
    </div>
    <div class="py-2 border-b border-zinc-500 text-sm text-black w-full flex justify-between cursor-pointer">
      <span>Skills</span>
      <ChevronRightIcon class="text-noft" />
    </div>
    <div class="py-2 border-b border-zinc-500 text-sm text-black w-full flex justify-between cursor-pointer">
      <span>Interests</span>
      <ChevronRightIcon class="text-noft" />
    </div>
  </div>
</template>

<script setup>
import PencilSquareIcon from '@/components/icons/PencilSquareIcon.vue';
import UniversityIcon from '@/components/icons/UniversityIcon.vue';
import BookmarkIcon from '@/components/icons/BookmarkIcon.vue';
import CheckBadgeIcon from '@/components/icons/CheckBadgeIcon.vue';
import GroupIcon from '@/components/icons/GroupIcon.vue';
import ChevronRightIcon from '@/components/icons/ChevronRightIcon.vue';
</script>