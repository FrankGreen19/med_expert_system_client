<template>
  <v-container>
    <v-row>
      <v-text-field v-model="testType"/>
      <v-file-input v-model="img"/>
      <v-btn @click="saveMedicalTest">Отправить</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MedicalTestForm",

  data: () => ({
    testType: '',
    img: null,
  }),

  methods: {
    saveMedicalTest()
    {
      const fileReader = new FileReader()
      let medTest = {}

      fileReader.onload = () => {
        medTest = {
          testType: this.testType,
          url: fileReader.result
        }
      }
      fileReader.readAsDataURL(this.img)

      this.$emit('addMedicalTest', medTest) // прокидывание нового объекта в родительский компонент
    }
  }
}
</script>

<style scoped>

</style>