<template>
  <section class="body">
      <router-view></router-view>
  </section>
</template>

<script>
export default {
}
</script>

<style>
.body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 800px;
}
</style>