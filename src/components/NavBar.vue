<template>
  <v-container fluid>
    <v-app-bar color="white" dark rounded>
      <v-toolbar-title style="color: #1976d2">*Лого*</v-toolbar-title>
      <v-spacer />
      <v-btn @click="openMedTestTypesSelector" class="mr-2" rounded color="orange">Пройти тест</v-btn>
      <v-btn rounded color="primary">
        <router-link to="/login"><span style="color: white">Войти</span></router-link>
      </v-btn>
    </v-app-bar>
    <MedicalTestTypeSelector ref="medicalTestTypeSelector"/>
  </v-container>
</template>

<script>
import MedicalTestTypeSelector from "@/components/medical_test/MedicalTestTypeSelector"

export default {
  name: 'NavBar',

  data: () => ({
    medTestTypesDialogVisible: false,
  }),

  components: {
    MedicalTestTypeSelector,
  },

  methods: {
    openMedTestTypesSelector()
    {
      this.$refs.medicalTestTypeSelector.showDialog()
    }
  }

}
</script>

<style scoped>

</style>