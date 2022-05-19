<template>
  <v-col cols="4">
    <v-card height="235" class="d-flex flex-column">
      <v-card-title class="justify-center mb-2">{{testType.title}}</v-card-title>
      <v-card-subtitle class="text-center">{{ testType.explanation }}</v-card-subtitle>
      <v-spacer />
      <v-divider />
      <v-card-actions>
        <v-btn class="mx-auto" rounded outlined color="orange">Пройти</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "MedicalTestType",

  props: {
    testType: {
      type: Object,
      required:true
    }
  }
}
</script>

<style scoped>

</style>