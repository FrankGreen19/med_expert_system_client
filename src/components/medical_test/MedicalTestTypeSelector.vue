<template>
  <v-container>
    <v-row justify="space-around">
      <v-col cols="auto">
        <v-dialog
            transition="dialog-top-transition"
            v-model="testTypeDialog"
            max-width="600"
        >
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar
                  color="primary"
                  dark
                  src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
              >
                Выберете тип теста
                <v-spacer />
                <v-btn text @click="dialog.value = false">
                  <v-icon dark center>mdi-minus-circle</v-icon>
                </v-btn>
              </v-toolbar>
              <v-container>
                <v-row>
                  <MedicalTestType
                      v-for="medicalTestType in $store.getters.getAllMedTestTypes"
                      v-bind:test-type="medicalTestType"
                      :key="medicalTestType.id"
                  />
                </v-row>
              </v-container>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MedicalTestType from "@/components/medical_test/MedicalTestType";

export default {
  name: "MedicalTestTypeSelector",

  data: () => ({
    testTypeDialog: false,
  }),

  components: {
    MedicalTestType
  },

  methods: {
    showDialog()
    {
      this.testTypeDialog = true
    }
  },

  mounted() {
    this.$store.dispatch("fetchMedicalTestTypes")
  }
}
</script>

<style scoped>

</style>