<template>
  <v-col sm="12" md="4" lg="4">
    <v-card height="235" class="d-flex flex-column">
      <v-card-title class="justify-center mb-2">{{testType.title}}</v-card-title>
      <v-card-subtitle class="text-center">{{ testType.explanation }}</v-card-subtitle>
      <v-spacer />
      <v-divider />
      <v-card-actions>
        <v-btn @click="pushToMedTest" class="mx-auto" rounded dark color="orange">Пройти</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "MedicalTestType",

  props: {
    testType: {
      type: Object,
      required:true
    }
  },

  methods: {
    checkAuth() {
      return true
      // if (!this.isAuth) {
      //   this.$store.commit('setError', 'Для прохождения медицинского теста необходимо авторизоваться ' +
      //       'в системе')
      //   this.showLoginDialog
      //   this.hideTestTypeDialog
      //
      //   return false
      // } else {
      //   return true
      // }
    },

    pushToMedTest() {
      if (this.checkAuth()) {
        this.hideTestTypeDialog

        const url = '/medical-test/' + this.testType.id
        if (this.$router.currentRoute.path !== url) {
          this.$router.push(url)
        }
      }
    }

  },

  computed: {
    ...mapGetters(['isAuth']),
    ...mapMutations(['showLoginDialog', 'setError', 'hideTestTypeDialog'])
  }
}
</script>

<style scoped>

</style>