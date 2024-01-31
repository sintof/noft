<template>
    <div class="flex flex-col gap-4 p-4 mt-3 bg-white rounded-3xl">
        <div class="flex justify-between items-center">
            <div class="flex justify-between gap-3">
                <img src="../assets/pp.png" alt="pp" class="w-10">
                <div class="flex flex-col leading-tight justify-center items-start">
                    <span>Hayot</span>
                    <span>Olamova</span>
                </div>
            </div>
            <div class="flex flex-col items-end leading-none justify-center">
                <EllipsisIcon />
                <span class="text-sm">September 19</span>
            </div>
        </div>
        <div class="text-black text-left">
            <div>Dear new TSUE students, we are excited to welcome you to our university.</div>
            <div class="text-sm mt-2">Since our university was said to be 5-star university and was located in the heart of
                the city...
            </div>
        </div>
        <div class="grow shrink py-2.5 rounded-[7px] border border-noft justify-center items-center flex">
            <div class="justify-center items-center flex">
                <BoltIcon class="w-4 h-4 relative"/>
                <div class="text-[#4B87BB] text-sm font-medium font-['Roboto']">READ POST</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import EllipsisIcon from '@/components/icons/EllipsisIcon.vue';
import BoltIcon from '@/components/icons/BoltIcon.vue';
</script>