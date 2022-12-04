<template>
  <div class="slider">
    <a href="#">
        <img :src="images[this.indexImg].urlImg" alt="">
    </a>
  </div>
</template>

<script>
export default {
    data() {
        return {
            indexImg: 0, 
            images: [
                {
                    id: 0,
                    urlImg: 'https://phenikaa-uni.edu.vn:3600/pu/vi/bo-banner-1-banner-web.jpg',
                },
                {
                    id: 1,
                    urlImg: 'https://phenikaa-uni.edu.vn:3600/pu/vi/virtual-tour-banner-web-02.jpg',
                },
                {
                    id: 2,
                    urlImg: 'https://phenikaa-uni.edu.vn:3600/pu/vi/banner-web.jpg',
                },
                {
                    id: 3,
                    urlImg: 'https://phenikaa-uni.edu.vn:3600/pu/vi/bo-banner-1-15_20221123024633.jpg',
                },
        ],
    }
  },
  methods: {
    setTimeSlide() {
        setInterval(() => {
            if (this.indexImg === this.images.length) {
                this.indexImg = 0;
            } else {
                this.indexImg++;
            }
        }, 3000);
    }
  },
  beforeMount() {
    this.setTimeSlide();
  }
}
</script>

<style scoped>
.slider {
    width: 100%;
}

.slider img {
    width: 100%;
}
</style>