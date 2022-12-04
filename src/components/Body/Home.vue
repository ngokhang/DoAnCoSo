<template>
  <SlideShow/>
  <Banner/>
  <FeatureList/>
  <LessionList/>
  
</template>

<script>
import Banner from './Banner.vue';
import SlideShow from './SlideShow.vue';
import FeatureList from './FeatureList.vue';
import LessionList from './LessionList.vue';
export default {
  components: {
    SlideShow,Banner,FeatureList,LessionList
  }
}
</script>

<style scoped>
</style>