<template>
  <div class="header-validation" v-if="notLogged">
    <router-link to="/Login">Login</router-link>
    <router-link to="/Register">Register</router-link>
  </div>
  <div class="header-user" v-else>
    <UserInfo @change-status-log="toggleStatus"/>
  </div>
</template>

<script>
import UserInfo from './UserInfo.vue';
export default {
  data() {
    return {
      notLogged: false
    }
  },
  components: {
    UserInfo
  },
  methods: {
    toggleStatus(stt) {
      if (stt) {
        this.notLogged = !this.notLogged;
      }
    }
  }
}
</script>

<style scoped>
    .header-validation {
        display: flex;
        gap: 15px;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        line-height: 1.;
        color: black;
        font-weight: bold;
    }

    a:hover {
        color: red;
    }
    
    .header-user {
      display: flex;
      justify-content: center;
      align-items: center;
    }
</style>