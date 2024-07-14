<template>
  <div>
    <h2>Votre score</h2>
    <p class="quiz-score">{{ score }} / {{ total }}</p>
  </div>
</template>

<script>
export default {
  name: "ScoreComponent",
  props: {
    score: Number,
    total: Number,
  },
};
</script>
