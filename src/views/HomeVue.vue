<template>
  <div>
    <h1>Interactive Quiz</h1>
    <QuizComponent />
  </div>
</template>

<script>
import QuizComponent from "@/components/QuizComponent.vue";

export default {
  name: "HomeVue",
  components: {
    QuizComponent,
  },
};
</script>

<style scoped>
/* Styles pour la page d'accueil */
</style>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}

div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
