<template>
    <header class="header">
        <HeaderLogo/>
        <Navigation/>
        <Validation/>
    </header>
</template>

<script>
import Navigation from './Navigation.vue';
import HeaderLogo from './HeaderLogo.vue';
import Validation from './Validation.vue';

export default {

    components: {
        Navigation,
        HeaderLogo,
        Validation
    }
}
</script>

<style scoped>
    .header {
        display: flex;
        justify-content: space-around;
        position: sticky;
        top: 0;
        background: #E7EFF8;
    }
</style>