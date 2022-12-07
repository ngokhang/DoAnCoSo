<template>
  <div class="wrap" v-if="!finishedExam">
    <!-- <h1>Exam page</h1> -->
    <div class="count-time" v-if="this.userStore.isLogin">
      <p v-if="this.statusExam.start">{{timerCount}} <span>s</span> </p>
      <p v-else>--</p>
    </div>
    <button @click="startExam()" v-if="(!this.statusExam.start && this.userStore.isLogin)" class="button">Bắt đầu làm</button>
    <button @click="pauseExam()" v-if="this.statusExam.pause" class="button">Tạm dừng</button>
    <button @click="continueExam()" v-if="this.statusExam.continue" class="button">Tiếp tục</button>
    <div v-for="(ques, index) in testData" :key="index" class="question">
      <p class="question-title">{{ ques.question }}</p>
      <div v-for="ans in ques.answers" :key="ans" class="question-answer">
        <input type="radio" :id="ans" :value="ans" :name="`${index}`" @click="selectAnswer(ans, ques.correctAnswer)" :disabled="isPause"/>
        <label>{{ ans }}</label>
      </div>
    </div>
    <button class="button" @click="finishExam">Hoàn thành!</button>
  </div>
  <div v-else class="screen-result">
    <h1>Kết quả</h1>
    <p style="font-size: 20px; margin-top: 10px">
      Điểm số của bạn là <span style="color: red">{{ mark }}</span>
    </p>
    <p style="margin-top: 10px" v-if="userStore.isLogin">Kết quả của bạn đã được cập nhật trên hệ thống!</p>
    <p style="margin-top: 10px" v-else>Để lưu lại kết quả của bạn, vui lòng đăng nhập!</p>
  </div>
</template>

<script>
// import { mapState } from 'vuex';
import axios from 'axios';
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
      testData: null,
      finishedExam: false,
      mark: 0,
      preClick: null,
      curClick: null,
      idQuizzes: null,
      timerCount: 60,
      interval: null,
      isPause: false,
      statusExam: {
        start: 0,
        pause: 0, 
        continue: 0,
      },
      tempTime: null,
    };
  },
  watch: {
    timerCount(value) {
      if (value === 0) {
        this.clearCounter(this.interval);
        this.finishExam();
      }
    }
  },
  methods: {
    counter() {
      this.interval = setInterval(() => {
        this.timerCount--;
      }, 1000);
    },
    clearCounter(id) {
      clearInterval(id);
    },  
    startExam() {
      this.statusExam.start = true;
      this.statusExam.pause = true;
      this.statusExam.continue = false;
      this.counter();
    },
    pauseExam() {
      this.isPause = true;
      this.statusExam.pause = false;
      this.statusExam.continue = true;
      this.tempTime = this.timerCount;
      this.clearCounter(this.interval);
    },
    continueExam() {
      this.isPause = false;
      this.statusExam.pause = true;
      this.statusExam.continue = false;
      this.timerCount = this.tempTime;
      this.counter();
    },
    selectAnswer(answer, correctAnswer) {
      this.curClick = answer;
      if (answer === correctAnswer && this.curClick !== this.preClick) {
        this.mark += 25;
      } else {
        this.mask -= 25;
      }
      this.preClick = answer;
    },
    finishExam() {
      if (this.userStore.isLogin) {
        axios
          .post(
            'http://14.225.205.132:8000/api/createPointQuizzes',
            {
              idQuizzes: this.idQuizzes,
              idUser: this.userStore.id,
              point: this.mark,
            },
            {
              headers: {
                authorization: 'Bearer ' + this.userStore.token,
              },
            },
          )
          .then((res) => console.log('res', res))
          .catch((err) => console.log('err', err));
      }

      this.finishedExam = true;
    },
  },
  beforeMount() {
    axios
      .get('http://14.225.205.132:8000/api/getAllQuizzes')
      .then((response) => response.data.data)
      .then((data) => {
        this.testData = data[0].questions;
        this.idQuizzes = data[0]._id;
      });
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  .count-time {
    width: 200px;
    padding: 10px;
    background-color: #ececec;
    text-align: center;
    border-radius: 20px;
    margin-right: 50%;

    p {
      font-size: 32px;
      font-weight: bold;
    }
    span {
      font-size: 20px;
    }
  }
}
.question {
  display: flex;
  flex-direction: column;
  gap: 25px;
  &-title {
    font-size: 24px;
    font-weight: bold;
  }

  &-answer {
    display: flex;
    gap: 20px;
    align-content: center;
    input {
      width: 20px;
      height: 20px;
    }

    label {
      font-size: 20px;
    }
  }
}

.button {
  margin-top: 20px;
  outline: none;
  display: inline-block;
  min-width: 172px;
  padding: 0 55px;
  background-color: #ffb83c;
  font-size: 14px;
  line-height: 42px;
  font-weight: bold;
  color: white;
  text-align: center;
  border-radius: 6px;
  cursor: pointer;
}

.screen-result {
  h4 {
    font-size: 32px;
    line-height: 1.25;
  }
  padding-top: 100px;
  text-align: center;
  width: 100%;
  min-height: 800px;
  background-size: cover;
}
</style>
