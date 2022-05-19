<template>
  <v-container>
    <MedicalTestForm @addMedicalTest="addMedicalTest"/>
    <v-row>
      <MedicalTest
          v-for="medicalTest in medicalTests"
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
    medicalTests: []
  }),

  mounted() {
    this.fetchMedicalTests()
  },

  methods: {
    fetchMedicalTests()
    {
      this.axios.get('http://localhost:8000/medical-test').then(response => this.medicalTests = response.data)
    },

    addMedicalTest (medTest)
    {
      this.medicalTests.push(medTest)
    },
  }
}
</script>

<style scoped>

</style>