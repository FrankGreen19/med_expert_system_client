<template>
  <v-container>
    <v-row justify="space-around">
      <v-col cols="auto">
        <v-dialog
            transition="dialog-top-transition"
            v-model="$store.getters.isTestTypeDialogVisible"
            max-width="600"
            @click:outside="hideTestTypeDialog"
        >
          <template>
            <v-card>
              <v-toolbar
                  color="primary"
                  dark
                  src="../../assets/vbanner.jpg"
              >
                Выберете тип теста
                <v-spacer />
                <v-btn text @click="hideTestTypeDialog">
                  <v-icon dark center>mdi-minus-circle</v-icon>
                </v-btn>
              </v-toolbar>
              <v-container>
                <v-row v-if="!getTestTypesLoading && !error">
                  <MedicalTestType
                      v-for="medicalTestType in $store.getters.getAllMedTestTypes"
                      v-bind:test-type="medicalTestType"
                      :key="medicalTestType.id" />
                </v-row>
                <v-row v-else-if="getTestTypesLoading" >
                  <v-progress-circular
                      class="mx-auto my-3"
                      :size="70"
                      indeterminate
                      color="amber"
                  ></v-progress-circular>
                </v-row>
                <v-row v-else-if="error" class="mx-auto my-3">
                  <h3 style="color: #ff9800">{{ error }}</h3>
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
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "MedicalTestTypeSelector",

  components: {
    MedicalTestType
  },

  data: () => ({
    error: '',
  }),

  methods: {
    ...mapMutations(['hideTestTypeDialog', 'setTestTypesLoading']),

  },

  mounted() {
    this.$store.dispatch("fetchMedicalTestTypes").catch(() => {
      this.error = 'Ошибка загрузки. Пожалуйста, повторите попытку позже'

      this.setTestTypesLoading()
    })
  },

  computed: {
    ...mapGetters(['getTestTypesLoading'])
  }
}
</script>

<style scoped>

</style>