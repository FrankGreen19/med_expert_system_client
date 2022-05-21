<template>
  <v-container fluid>
    <v-app-bar color="white" dark rounded>
      <v-toolbar-title style="color: #1976d2">*Лого*</v-toolbar-title>
      <v-spacer />
      <v-btn @click="openMedTestTypesSelector" class="mr-2" rounded color="orange">Пройти тест</v-btn>
      <UserButton />
    </v-app-bar>
    <MedicalTestTypeSelector ref="medicalTestTypeSelector"/>
  </v-container>
</template>

<script>
import MedicalTestTypeSelector from "@/components/medical_test/MedicalTestTypeSelector"
import UserButton from "@/components/user/UserButton";

export default {
  name: 'NavBar',

  data: () => ({
    medTestTypesDialogVisible: false,
  }),

  components: {
    MedicalTestTypeSelector,
    UserButton,
  },

  methods: {
    openMedTestTypesSelector()
    {
      this.$refs.medicalTestTypeSelector.showDialog()
    },
  },

}
</script>

<style scoped>

</style>