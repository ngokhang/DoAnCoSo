<template>
  <div class="ranking">
    <h1 class="ranking-title">Bảng xếp hạng</h1>
    <table style="width: 75%; margin-top: 30px">
      <tr>
        <th>STT</th>
        <th>Họ Và Tên</th>
        <th>Điểm</th>
      </tr>
      <tr v-for="(item, index) in ranking" :key="index">
        <td>{{ index + 1 }}</td>
        <td>
          <div style="display: flex; align-items: center">
            <img :src="item.userInfo.avatar" style="width: 30px; height: 30px; border-radius: 50%" />
            <p style="margin-left: 10px">{{ item.userInfo.username }}</p>
          </div>
        </td>
        <td style="color: green; font-weight: 900">{{ item.point }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Ranking',

  data() {
    return {
      ranking: [],
    };
  },
  beforeMount() {
    axios
      .get('http://14.225.205.132:8000/api/getPointQuizzesByQuizId/638bcf302233e47397f4a2af')
      .then((res) => {
        const data = res.data.data.sort((a, b) => b.point - a.point);
        console.log(data);
        this.ranking = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>

.ranking {
  width: 100%;
  min-height: 800px;
  padding-top: 50px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e7eff8;
  &-title {
    font-size: 32px;
    text-transform: uppercase;
    color: #eb6a35;
  }
}


table {
  border-collapse: collapse;
  background-color: #f1f1f1;
  
  tr {
    &:nth-child(even) {
      background-color: #cbd7e6;
    }
  }

  th {
    border-right: 1px solid #f1f1f1;
    background-color: #1767a4;
    font-size: 20px;
    padding: 10px;
    color: white;
    &:last-child {
      border: none;
    }
  }
  
  td {
    font-size: 20px;
    padding: 10px;
    text-align: center;
    border-right: 1px solid #e3effb;
    &:last-child {
      border: none;
    }
  }
}
</style>
