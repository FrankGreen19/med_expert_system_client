<template>
  <v-container>
    <MedicalTestForm @addMedicalTest="addMedicalTest"/>
    <v-row>
      <MedicalTest
          v-for="medicalTest in $store.getters.getMedTests"
          v-bind:medical-test="medicalTest"
          :key="medicalTest.id"
      />
    </v-row>
  </v-container>
</template>

<script>
import MedicalTest from "@/components/medical_test/MedicalTest";
import MedicalTestForm from "@/components/medical_test/MedicalTestForm";

export default {
  name: "MedicalTestsPage",

  components: {
    MedicalTest,
    MedicalTestForm
  },

  data: () => ({
  }),

  mounted() {
    this.$store.dispatch('fetchMedTests')
  },

  methods: {
    addMedicalTest (medTest)
    {
      this.medicalTests.push(medTest)
    },
  }
}
</script>

<style scoped>

</style>