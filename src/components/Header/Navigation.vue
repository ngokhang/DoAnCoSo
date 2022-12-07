<template>
  <ul>
    <li v-for="(items, index) in listRoutes" :key="index" class="header-nav">
        <router-link :to="`${items.path}`" class="header-nav-item">{{listNavVie[`${items.index}`]}}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
    data() {
        return {
            listRoutes: [
                {
                    index: 0,
                    path: '/Home',
                },
                {
                    index: 1,
                    path: '/Exam',
                }, 
                {
                    index: 2,
                    path: '/Ranking',
                }, 
                {
                    index: 3,
                    path: '/Contact',
                }
            ],
            listNavVie: ['Trang chủ', 'Vào thi', 'Bảng xếp hạng', 'Liên hệ']
        }
    }
}
</script>

<style scoped>
    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 25px;
    }

    ul > li > a {
        font-size: 20px;
        line-height: 1.;
        color: black;
        font-weight: bold;
    }

    a:hover {
        color: red;
    }
</style>