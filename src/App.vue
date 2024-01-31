<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Logo from './components/Logo.vue';
import FooterNav from './components/FooterNav.vue';
</script>

<template>


<div class="h-screen flex justify-between flex-col bg-secondary font-inter">
  <Logo />
  <RouterView />
  <FooterNav />
</div>
</template>

<style>
</style>
