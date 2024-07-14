<template>
  <div>
    <h2 class="quiz-question">{{ question.text }}</h2>
    <div v-for="(answer, index) in question.answers" :key="index">
      <button class="quiz-answer" @click="selectAnswer(index)">
        {{ answer }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionComponent",
  props: {
    question: Object,
  },
  methods: {
    selectAnswer(index) {
      const isCorrect = index === this.question.correct;
      this.$emit("answered", isCorrect);
    },
  },
};
</script>
