<template>
  <v-container>
    <v-row v-if="!isMedTestsLoading">
      <MedicalTest
          v-for="medicalTest in getMedTests"
          v-bind:medical-test="medicalTest"
          :key="medicalTest.id"
      />
    </v-row>
    <v-row v-else>
      <v-progress-circular
          class="mx-auto"
          :size="90"
          color="amber"
          indeterminate
      ></v-progress-circular>
    </v-row>
  </v-container>
</template>

<script>
import MedicalTest from "@/components/medical_test/MedicalTest";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "MedicalTestsPage",

  components: {
    MedicalTest,
  },

  methods: {
    ...mapActions(['fetchMedTests']),
  },

  mounted() {
    this.fetchMedTests()
  },

  computed: {
    ...mapGetters(['isMedTestsLoading', 'getMedTests'])
  }
}
</script>

<style scoped>

</style>