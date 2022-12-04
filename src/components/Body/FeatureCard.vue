<template>
    <div class="feature-card">
        <div class="img"><img :src="urlImg" alt=""></div>
        <h3>{{title}}</h3>
        <p>{{text}}</p>
    </div>
</template>

<script>
export default {
    props: ['title', 'text', 'urlImg'],
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.feature-card {
    max-width: 270px;
    min-height: 360px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 78px 10px 10px 10px;
    background-color: white;
    box-shadow: 0 7px 15px 0 rgba(58, 75, 205, .33);
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    .img {
        min-height: 160px;
    }
    h3 {
        margin-top: 20px;
        font-size: 20px;
        line-height: 1.1;
    }
    p {
        font-size: 14px;
        padding: 10px;
        line-height: 1.1;
    }
    &:hover {
        border-top: 10px solid orange;
        transform: translateY(-100px);
    }
}
</style>