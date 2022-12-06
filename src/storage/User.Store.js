import axios from 'axios';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    isLogin: false,
    id: null,
    name: null,
    email: null,
    avatar: null,
    phoneNumber: null,
    token: null,
  }),
  actions: {
    async login(user) {
      const res = await axios.post('http://14.225.205.132:8000/api/login', {
        email: user.email,
        password: user.password,
      });
      if (res.data.success) {
        this.isLogin = true;
        this.id = res.data.data._id;
        this.name = res.data.data.username;
        this.email = res.data.data.email;
        this.avatar = res.data.data.avatar;
        this.phoneNumber = res.data.data.phoneNumber;
        this.token = res.data.data.token;
        return res.data.data;
      } else {
        console.log(res.data.message);
        return null;
      }
    },
    async register(user) {
      if (user.avatar.name) {
        const fromData = new FormData();
        fromData.append('files', user.avatar);
        const res = await axios.post('http://14.225.205.132:8000/api/uploads', fromData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        if (res.data.success) {
          user.avatar = res.data.data[0];
        }
      }
      const res = await axios.post('http://14.225.205.132:8000/api/register', user);
      if (res.data.success) {
        return res.data.data;
      } else {
        console.log(res.data.message);
        return null;
      }
    },

    async logout() {
      this.isLogin = false;
      this.name = null;
      this.id = null;
      this.email = null;
      this.avatar = null;
      this.phoneNumber = null;
      this.token = null;
    },
  },
});
