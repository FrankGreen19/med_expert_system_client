<template>
  <v-col md="4" sm="12" lg="3" xl="2">
    <v-card elevation="5">
      <v-card-title>Тест №{{ medicalTest.id }}</v-card-title>
      <v-card-subtitle>{{ medicalTest.testType.title }}</v-card-subtitle>
      <v-card-text>{{ testStatus }}</v-card-text>
      <v-card-actions>
        <v-btn @click="showInfoDialog" rounded outlined small color="orange">Подробнее</v-btn>
      </v-card-actions>
      <MedicalTestInfo ref="medicalTestInfo" :medical-test="medicalTest" :test-status="testStatus"/>
    </v-card>
  </v-col>
</template>

<script>
import MedicalTestInfo from "@/components/medical_test/MedicalTestInfo";
import medTestStatusesLang from "@/service/medTestStatusesLang";

export default {
  name: "MedicalTest",

  components: {
    MedicalTestInfo,
  },

  props: {
    medicalTest: {
      type: Object,
      required: false
    }
  },

  methods: {
    showInfoDialog() {
      this.$refs.medicalTestInfo.showDialog()
    }
  },

  computed: {
    testStatus: function() {
      return medTestStatusesLang.get(this.medicalTest.asyncJob.status)
    }
  }
}
</script>

<style scoped>

</style>