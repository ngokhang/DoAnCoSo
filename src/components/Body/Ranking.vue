<template>
  <h1>Bảng xếp hạng</h1>
  <table style="width: 75%; margin-top: 30px">
    <tr>
      <th>STT</th>
      <th>Tên</th>
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

<style>
table,
th,
td {
  border: 1px solid black;
  padding: 4px;
}

td {
  text-align: center;
}
</style>
