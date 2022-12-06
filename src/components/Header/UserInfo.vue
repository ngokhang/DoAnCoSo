<template>
  <div class="userInfo">
    <img :src="avatar" class="imageAvatar" />
    <p>
      Hello, {{ username_logged }} <span><router-link to="/" @click="logout">Logout</router-link></span>
    </p>
  </div>
</template>

<script>
import { useUserStore } from '../../storage/User.Store';
export default {
  setup() {
    const userStore = useUserStore();
    return {
      userStore,
    };
  },
  data() {
    return {
      username_logged: this.userStore.name,
      avatar: this.userStore.avatar,
    };
  },
  methods: {
    logout() {
      this.userStore.logout();
    },
  },
};
</script>

<style scoped>
p {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  line-height: 1;
  color: black;
  font-weight: bold;
}

p > span > a {
  font-size: 16px;
  color: gray;
}

.imageAvatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
}

.userInfo {
  display: flex;
  align-items: center;
}
</style>
