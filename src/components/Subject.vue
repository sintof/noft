<template>
    <div class="mt-3 py-4 px-2 bg-white rounded-xl flex flex-col gap-2">
        <div class="flex justify-between text-lg font-medium text-neutral-900">
            <h2>Applied Math (English)</h2>
            <ChevronRightIcon />
        </div>
        <div class="flex justify-start items-center gap-1 text-gray-500 text-base">
            <span>Mandatory</span> |
            <span>120.0 hours</span> |
            <span>4 credits</span>
        </div>
        <div class="flex justify-between text-sm text-neutral-900 font-medium gap-3 items-center">
            <span class="font-semibold text-2xl text-noft">0 / 100</span>
            <ProgressLineIcon />
        </div>
        <div class="text-noft font-semibold text-sm flex">Total Score</div>
    </div>
</template>

<script setup>
import ChevronRightIcon from '@/components/icons/ChevronRightIcon.vue';
import ProgressLineIcon from '@/components/icons/ProgressLineIcon.vue'
</script>