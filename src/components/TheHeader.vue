<template>
  <header>
    <nav>
      <router-link :to="{ name: 'home' }">{{ $t('nav.home') }}</router-link>
      <router-link :to="{ name: 'about' }">{{ $t('nav.about') }}</router-link>
    </nav>
  </header>
</template>

<style lang="scss">
header {
  @apply m-16 flex-none;

  nav {
    @apply flex space-s-4;

    a {
      @apply text-teal-500;

      &:hover {
        @apply text-teal-300;
      }
    }
  }
}
</style>
