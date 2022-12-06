<template>
  <div class="register">
    <form @submit="(event) => register(event)">
      <p class="title">Register</p>
      <label class="imageUpload">
        <input type="file" @change="(event) => handlerSelectImage(event)" />
        <img :src="imagePreview" class="imageAvatar" />
      </label>
      <label for="username">Username </label>
      <input type="text" name="username" id="username" placeholder="Username" v-model="username" />
      <label for="password">Password </label>
      <input type="password" name="password" id="password" placeholder="Password" v-model="password" />
      <label for="email">Email </label>
      <input type="email" name="email" id="email" placeholder="Your Email" v-model="email" />
      <label for="pnum">Phone number </label>
      <input type="text" name="pnum" id="pnum" placeholder="Your phone number" v-model="pnum" />
      <p v-bind:style="[infoRegister ? { color: 'green' } : { color: 'red' }]">{{ alert }}</p>
      <button type="submit">Register!</button>
    </form>
  </div>
</template>

<script>
import { useUserStore } from '../../storage/User.Store';
export default {
  name: 'Register',
  setup() {
    const userUser = useUserStore();
    return {
      userUser,
    };
  },
  data() {
    return {
      username: '',
      password: '',
      email: '',
      pnum: '',
      imagePreview:
        'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg',
      selectImage: '',
      alert: '',
      infoRegister: false,
    };
  },
  methods: {
    handlerSelectImage(event) {
      const file = event.target.files[0];
      this.selectImage = file;
      if (file) {
        this.imagePreview = URL.createObjectURL(file);
      }
    },
    async register(event) {
      event.preventDefault();
      const user = {
        username: this.username,
        password: this.password,
        email: this.email,
        phoneNumber: this.pnum,
        avatar: this.selectImage ? this.selectImage : this.imagePreview,
      };
      const res = await this.userUser.register(user);
      if (res) {
        this.alert = 'Đăng ký thành công! Bạn sẽ được điều hướng về trang đăng nhập sau 2s.';
        this.infoRegister = true;
        setTimeout(() => {
          this.$router.push('/Login');
        }, 2000);
      } else {
        this.infoRegister = false;
        this.alert = 'Đăng ký thất bại! Vui lòng kiểm tra lại thông tin.';
      }
    },
  },
};
</script>

<style scoped>
input[type='file'] {
  display: none;
}
.register {
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

.imageUpload {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.imageAvatar {
  width: 100px;
  height: 100px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 50%;
}

.register .title {
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  color: black;
}

.register > form {
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
}

.register > form label {
  color: black;
  font-size: 18px;
  font-weight: bold;
}

.register > form input {
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

.register > form button {
  display: inline-block;
  width: 100px;
  padding: 10px;
  font-size: 20px;
  background-color: rgb(121, 119, 119);
  border-radius: 10px;
  color: white;
  cursor: pointer;
}

.register > form button:hover {
  background-color: green;
}
</style>
