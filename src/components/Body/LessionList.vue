<template lang="">
    <section class="lession-list">
        <Lession/>
    </section>
</template>
<script>
import Lession from './Lession.vue';

export default {
    components: {
        Lession
    }
}
</script>
<style lang="scss" scoped>
    .lession-list {
        padding-bottom: 100px;
    }
</style>