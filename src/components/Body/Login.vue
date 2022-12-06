<template>
  <div class="login">
    <div id="form">
      <p class="title">Login</p>
      <label for="Email">Email </label>
      <input type="text" name="Email" id="Email" placeholder="Email" v-model="email" />
      <label for="password">Password </label>
      <input type="password" name="password" id="password" placeholder="Password" v-model="password" />
      <p v-bind:style="[loginStatus ? { color: 'green' } : { color: 'red' }]">{{ alert }}</p>
      <div class="nav-validation">
        <a href="#">Forgot Password?</a>
        <router-link to="/Register">Register now</router-link>
      </div>
      <button @click="(event) => login(event)">Let's go!</button>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '../../storage/User.Store';

export default {
  name: 'Login',
  setup() {
    const userStore = useUserStore();
    return {
      userStore,
    };
  },
  data() {
    return {
      email: '',
      password: '',
      alert: '',
      loginStatus: false,
    };
  },
  methods: {
    async login() {
      const res = await this.userStore.login({
        email: this.email,
        password: this.password,
      });
      if (res) {
        this.loginStatus = true;
        this.alert = 'Đăng nhập thành công! Bạn sẽ được điều hướng về trang chủ sau 2s.';
        setTimeout(() => {
          this.$router.push('/');
        }, 2000);
      } else {
        this.loginStatus = false;
        this.alert = 'Email hoặc mật khẩu không đúng! Vui lòng kiểm tra lại.';
      }
    },
  },
};
</script>

<style scoped>
.login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border: 1px solid transparent;
  border-radius: 10px;
}

.login .title {
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  color: black;
}

.login > #form {
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
}

.login > #form label {
  color: black;
  font-size: 18px;
  font-weight: bold;
}

.login > #form input {
  font-size: 20px;
  line-height: 1.25;
  padding: 5px 20px;
  background: rgba(136, 126, 126, 0.1);
  border: none;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  border: 2px solid rgba(0, 0, 0, 0.02);
}

.login > #form button {
  display: inline-block;
  width: 100px;
  padding: 10px;
  font-size: 20px;
  background-color: rgb(121, 119, 119);
  border-radius: 10px;
  color: white;
  cursor: pointer;
}

.login > #form button:hover {
  background-color: green;
}

.nav-validation {
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-validation a {
  font-size: 18px;
  color: blue;
}
</style>
