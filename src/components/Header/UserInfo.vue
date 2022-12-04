<template>
  <p>Hello, {{username_logged}} <span><router-link to="/" @click="logout">Logout</router-link></span></p>
</template>

<script>
export default {
    data() {
        return {
            username_logged : 'User'
        }
    },
    methods: {
        logout() {
            this.$emit('change-status-log', true);
        }
    }
}
</script>

<style scoped>
p {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    line-height: 1.;
    color: black;
    font-weight: bold;
}

p > span > a {
    font-size: 16px;
    color: gray;
}
</style>
