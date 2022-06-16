<template>
  <v-container>
    <v-row>
      <v-col lg="8" sm="12" class="mx-auto">
        <v-card>
          <v-toolbar
              color="primary"
              dark
              src="../assets/vbanner.jpg"
          >
            <span class="mx-auto">Заполните форму</span>
          </v-toolbar>
          <v-container>
            <v-row>
              <v-col cols="6" class="mx-auto">
                <v-card-text class="text-center">
                  <v-form v-if="testData">
                    <div v-for="symptom of symptoms" :key="symptom.id">
                      <v-switch v-if="symptom.inputType === 'switch'"
                                color="primary"
                                :label="symptom.title"
                      ></v-switch>
                      <v-text-field
                          v-else-if="symptom.inputType === 'text'"
                          :label="symptom.title"
                          v-model="form[symptom.alias]"
                      />
                    </div>
                    <v-file-input
                        accept="image/*"
                        label="Загрузите снимок легких"
                    ></v-file-input>
                    <v-btn color="orange" dark class="mt-3">
                      <v-icon dark>mdi-checkbox-marked-circle</v-icon>
                    </v-btn>
                  </v-form>
                  <v-progress-circular
                      v-else
                      class="mx-auto my-3"
                      :size="70"
                      indeterminate
                      color="amber"
                  ></v-progress-circular>
                </v-card-text>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import {mapActions} from "vuex";

export default {
  name: "NewMedicalTestPage",

  data: () => ({
    testData: null,
    symptoms: [],
    form: {},
  }),

  methods: {
    ...mapActions(['fetchMedicalTestTypeById']),

    setTestData() {
      this.fetchMedicalTestTypeById(this.testTypeId).then((response) => {
        this.testData = response.data
        for (let illness of this.testData.illnesses) {
          for (let symptom of illness.symptoms) {
            this.symptoms.push(symptom)
          }
        }

        console.log('data',this.testData)
      })

    }
  },

  mounted() {
    this.setTestData()
  },

  computed: {
    testTypeId() {
      return this.$route.params.id
    },
  }
}
</script>

<style scoped>

</style>