<template>
    <div class="flex flex-col gap-4 p-4 mt-3 bg-white rounded-3xl">
        <div class="flex justify-between items-center">
            <div class="flex justify-between gap-3">
                <img src="../assets/pp.png" alt="pp" class="w-10">
                <div class="flex flex-col leading-tight justify-center items-start">
                    <span>Jahongir</span>
                    <span>Doe</span>
                </div>
            </div>
            <div class="flex flex-col items-end leading-none justify-center">
                <EllipsisIcon />
                <span>September 19</span>
            </div>
        </div>
        <img src="../assets/bears.png" alt="">
        <div class="text-black text-left">
            <div>Dear new TSUE students, we are excited to welcome you to our university.</div>
            <div class="text-sm mt-2">Since our university was said to be 5-star university and was located in the heart of
                the city,
                it became even more popular. Therefore, this year we got the most number of students.
                Whatever, we are happy to welcome you to our university!
            </div>
        </div>
    </div>
</template>

<script setup>
import EllipsisIcon from '@/components/icons/EllipsisIcon.vue';
</script>