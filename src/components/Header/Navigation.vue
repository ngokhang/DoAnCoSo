<template>
  <ul>
    <li v-for="(items) in listNav" :key="items" class="header-nav">
        <router-link :to="`${listRoutes[`${items}`]}`" class="header-nav-item">{{ items }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
    data() {
        return {
            listNav: ['Home', 'Exam', 'Ranking', 'Contact'],
            listRoutes: {
                Home: '/Home',
                Exam: '/Exam',
                Ranking: '/Ranking',
                Contact: '/Contact',
            }
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