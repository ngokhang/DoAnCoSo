<template>
  <div class="wrap" v-if="!finishedExam">
    <!-- <h1>Exam page</h1> -->
    <div v-for="(ques, index) in testData" :key="index" class="question">
      <p class="question-title">{{ques.question}}</p>
      <div v-for="ans in ques.answers" :key="ans" class="question-answer">
        <input type="radio" :id="ans" :value="ans" :name="`${index}`" @click="selectAnswer(ans, ques.correctAnswer)">
        <label>{{ans}}</label>
      </div>
    </div>
    <button class="button" @click="finishExam">Hoan thanh!</button>
  </div>
  <div v-else class="screen-result">
    <h4>Diem so : {{mark}}</h4>
  </div>

</template>

<script>
// import { mapState } from 'vuex';
import axios from 'axios';
export default {
  data() {
    return {
      testData : null,
      finishedExam : false,
      mark: 0,
      preClick: null,
      curClick: null,
    }
  },
  computed: {
    // ...mapState([''])
  },
  methods: {
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
      this.finishedExam = true;
      const sto = setTimeout(() => {
        window.location.reload();
      }, 5000);
      sto();
      clearTimeout(sto);
    }
  },
  beforeMount() {
    axios
      .get('http://14.225.205.132:8000/api/getAllQuizzes')
      .then(response => response.data.data)
      .then(data => {
        this.testData = data[0].questions; 
      });

  }
}
</script>

<style lang="scss" scoped>
.wrap {
  padding: 20px 0px;
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