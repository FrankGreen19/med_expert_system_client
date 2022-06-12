<template>
  <v-container fluid>
    <v-app-bar color="white" dark rounded>
      <v-toolbar-title style="color: #1976d2"><h2>МедЦентр</h2></v-toolbar-title>
      <v-spacer />
      <v-btn @click="showTestTypeDialog" class="mr-2" rounded color="orange">Пройти тест</v-btn>
      <UserButton />
    </v-app-bar>
    <MedicalTestTypeSelector/>
  </v-container>
</template>

<script>
import MedicalTestTypeSelector from "@/components/medical_test/MedicalTestTypeSelector"
import UserButton from "@/components/user/UserButton";
import {mapMutations} from "vuex";

export default {
  name: 'NavBar',

  components: {
    MedicalTestTypeSelector,
    UserButton,
  },

  methods: {
    ...mapMutations(['showTestTypeDialog']),

  },

  mounted() {
    this.$store.dispatch('fetchSymptoms')
  },
}
</script>

<style scoped>

</style>