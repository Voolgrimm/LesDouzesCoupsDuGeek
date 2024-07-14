<template>
  <div class="quiz-container">
    <question-component
      v-if="!quizCompleted"
      :question="questions[currentQuestion]"
      @answered="handleAnswer"
    />
    <score-component
      v-if="quizCompleted"
      :score="score"
      :total="questions.length"
    />
  </div>
</template>

<script>
import QuestionComponent from "./QuestionComponent.vue";
import ScoreComponent from "./ScoreComponent.vue";

export default {
  name: "QuizComponent",
  components: {
    QuestionComponent,
    ScoreComponent,
  },
  data() {
    return {
      currentQuestion: 0,
      score: 0,
      quizCompleted: false,
      questions: [
        {
          text: "Quelle est la capitale de la France?",
          answers: ["Paris", "Londres", "Berlin", "Madrid"],
          correct: 0,
        },
        {
          text: "Quel est le plus grand océan du monde?",
          answers: ["Atlantique", "Pacifique", "Indien", "Arctique"],
          correct: 1,
        },
        // Ajoute plus de questions ici
      ],
    };
  },
  methods: {
    handleAnswer(isCorrect) {
      if (isCorrect) {
        this.score++;
      }
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++;
      } else {
        this.quizCompleted = true;
      }
    },
  },
};
</script>
