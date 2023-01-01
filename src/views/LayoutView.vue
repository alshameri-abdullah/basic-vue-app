<script setup>
import HelloWorld from '../components/HelloWorld.vue';
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink :to="{ name: 'home' }">Home</RouterLink>
        <RouterLink :to="{ name: 'about' }">About</RouterLink>
      </nav>
    </div>
  </header>
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
