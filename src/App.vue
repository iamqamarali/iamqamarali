
<script setup>
import Sidebar from '@/components/sidebar.vue'

</script>

<template>
    <div id="app">
    <sidebar></sidebar>
    <div class="main">
        <router-view></router-view>
    </div>
    <a href="https://medium.com/@iamqamarali" target="_blank" class="blog-link">Blog</a>
  </div>
</template>
