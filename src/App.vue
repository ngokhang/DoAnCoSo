<template>
  <Header/>
  <Body/>
  <Footer/>
</template>

<script>
import Header from './components/Header/Header.vue';
import Body from './components/Body/Body.vue';
import Footer from './components/Footer/Footer.vue';


export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    Header, 
    Body,
    Footer
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  /* border: 0; */
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
}
html, body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
img {
  width: 100%;
  object-fit: cover;
}
.container {
  width: 1070px;
  margin: 0 auto;
}
</style>
