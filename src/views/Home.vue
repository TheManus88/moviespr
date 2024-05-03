<template>
  <div>Home</div>
</template>

<script setup>

import {getCurrentInstance, onBeforeMount} from "vue";
const globalProperties = getCurrentInstance().appContext.config.globalProperties;
onBeforeMount(() => {
  globalProperties.$axios.get("/searchIMDB").then((response) => {
    console.log(response);
  })


  // instance.$axios.get()
  // instance.$axios.get("https://imdb188.p.rapidapi.com/api/v1/searchIMDB").then(response => {
  //   alert(response.data);
  // })
})

</script>

<style lang="scss" scoped></style>
