<template>
    <div class="flex gap-2 items-center cursor-pointer p-2 bg-white rounded-xl">
        <img src="../assets/pp.png" alt="pp" class="w-10 h-10">
        <div class="text-black flex flex-col items-start">
            <div class="text-sm">Math Teacher</div>
            <div class="text-sm font-sans line-clamp-1 text-left">Tomorrow bring your laptops for practice</div>
        </div>
        <div class="flex flex-col justify-end text-xs font text-black">10:00</div>
        <EllipsisIcon class="rotate-90 w-8" />
    </div>
</template>

<script setup>
import EllipsisIcon from '@/components/icons/EllipsisIcon.vue';
</script>