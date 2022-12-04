<template>
  <div>
    
    <h2>Oops @.@ ! Page not found</h2>
    <p>The page you are looking for might have been removed</p>
    <router-link to="/Home">Go to Homepage!</router-link>

  </div>
</template>
<script>
export default {

}
</script>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }

  div > a {
    display: inline-block;
    text-align: center;
    width: 200px;
    font-size: 20px;
    padding: 5px 5px;
    color: white;
    background-color: rgb(150, 98, 150);
    border-radius: 20px;
  }
</style>