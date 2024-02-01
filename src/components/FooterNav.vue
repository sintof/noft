<template>
    <nav class="flex justify-around items-center py-4 bg-white w-full">
        <RouterLink to="/" active-class="text-active" class="w-6 h-6">
            <MainIcon />
        </RouterLink>
        <RouterLink to="/search" active-class="text-active" class="w-6 h-6">
            <SearchIcon />
        </RouterLink>
        <RouterLink to="/edu" active-class="text-active" class="w-6 h-6">
            <EduIcon />
        </RouterLink>
        <RouterLink to="/chat" active-class="text-active" class="w-6 h-6">
            <ChatIcon />
        </RouterLink>
        <RouterLink to="/profile" active-class="text-active" class="w-6 h-6">
            <ProfileIcon />
        </RouterLink>
    </nav>
</template>

<script setup>
import ProfileIcon from './icons/ProfileIcon.vue'
import ChatIcon from './icons/ChatIcon.vue'
import EduIcon from './icons/EduIcon.vue'
import SearchIcon from './icons/SearchIcon.vue';
import MainIcon from './icons/MainIcon.vue';
</script>