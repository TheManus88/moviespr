<script setup>
import Navbar from "@/components/Layout/Navbar.vue";
</script>

<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
}

main {
  margin-top: 70px;
}
</style>
