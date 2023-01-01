<script setup>
import TheHeader from '../components/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <router-view :key="$route.fullPath" v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}
.fade-leave-to {
  opacity: 0;
}
</style>
