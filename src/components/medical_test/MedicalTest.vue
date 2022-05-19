<template>
  <v-col cols="4">
    <v-card elevation="5">
      <v-card-title>Тест №{{ medicalTest.id }}</v-card-title>
      <v-card-subtitle>{{ medicalTest.testType.title }}</v-card-subtitle>
      <v-card-actions>
        <v-btn outlined small color="primary">Подробнее</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "MedicalTest",

  props: {
    medicalTest: {
      type: Object,
      required: false
    }
  }
}
</script>

<style scoped>

</style>