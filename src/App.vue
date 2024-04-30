<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
  </header>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/movies">Movies</RouterLink>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
}
</style>
