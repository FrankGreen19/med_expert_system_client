<template>
    <v-dialog
        transition="dialog-top-transition"
        v-model="medTestDialog"
        @click:outside="hideDialog"
        max-width="70%"
    >
      <template>
        <v-card>
          <v-toolbar
              color="primary"
              dark
              src="../../assets/vbanner.jpg"
          >
            Тест №{{ medicalTest.id }}
            <v-spacer />
            <v-btn text @click="hideDialog">
              <v-icon dark center>mdi-minus-circle</v-icon>
            </v-btn>
          </v-toolbar>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-card style="border-color: #ff9800">
                  <v-card-title>
                    Результат: {{ testStatus }}
                  </v-card-title>
                  <v-card-text>
                    <div v-if="fuzzyResults.size > 0">
                      Анализ симптомов:
                      <v-list-item two-line v-for="fuzzyResult of fuzzyResults" v-bind:key="fuzzyResult[0]">
                        <v-list-item-title>{{ fuzzyResult[0] }}</v-list-item-title>
                        <v-list-item-subtitle>
                          <v-icon color="primary">{{ fuzzyResult[1] }}</v-icon>
                        </v-list-item-subtitle>
                      </v-list-item>
                    </div>
                    <div v-if="cnnResults.size > 0">
                      Анализ изображения:
                      <v-list-item two-line v-for="cnnResult of cnnResults" v-bind:key="cnnResult[0]">
                        <v-list-item-title>{{ cnnResult[0] }}</v-list-item-title>
                        <v-list-item-subtitle>
                          <v-icon color="primary">{{ cnnResult[1] }}</v-icon>
                        </v-list-item-subtitle>
                      </v-list-item>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-card>
                  <v-card-text>
                    <v-list-item two-line v-for="symptom of symptoms" v-bind:key="symptom.key">
                      <v-list-item-title>{{ symptom[0] }}</v-list-item-title>
                      <v-list-item-subtitle v-if="symptom[1] === 'true'">
                        <v-icon color="primary">mdi-checkbox-marked-circle</v-icon>
                      </v-list-item-subtitle>
                      <v-list-item-subtitle v-else-if="symptom[1] === 'false'">
                        <v-icon color="primary">mdi-minus-circle</v-icon>
                      </v-list-item-subtitle>
                      <v-list-item-subtitle v-else>
                        <v-icon color="primary">{{ symptom[1] }}</v-icon>
                      </v-list-item-subtitle>
                    </v-list-item>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col lg="6">
                <v-img
                    :src="fileUrl"
                    lazy-src="../../assets/xrayTemplate.jpeg"
                    max-width="300"
                    max-height="300"
                >
                  <template v-slot:placeholder>
                    <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                    >
                      <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </template>
      {{ cnnResults }}
    </v-dialog>
</template>

<script>
import fuzzyNamesLang from "@/service/fuzzyNamesLang";
import cnnLang from "@/service/cnnLang";

export default {
  name: "MedicalTestInfo",

  data: () => ({
    medTestDialog: false
  }),

  props: {
    medicalTest: {
      type: Object,
      required: true
    },
    testStatus: {
      type: String,
      required: true
    }
  },

  methods: {
    showDialog() {
      this.medTestDialog = true
      console.log(this.medicalTest.id)
    },
    hideDialog() {
      this.medTestDialog = false
    }
  },

  computed: {
    fileUrl() {
      return 'http://localhost:8000/download/image?imageName=' + this.medicalTest.xrayImage.imageName
    },

    symptoms() {
      let symptoms = new Map()
      const storeSymptoms = this.$store.getters.getSymptoms

      for (let symptom of Object.entries(this.medicalTest.context.symptoms)) {
        let storedSymptom = storeSymptoms.get(symptom[0])
        if (storedSymptom) {
          symptoms.set(storedSymptom, symptom[1])
        }
      }

      return symptoms
    },

    fuzzyResults() {
      let results = new Map()
      let parsedResult =  Object.entries(JSON.parse(this.medicalTest.fuzzyResult))

      for (let result of parsedResult) {
        results.set(fuzzyNamesLang.get(result[0]), Number(result[1]).toFixed(2) + '%')
      }

      return results
    },

    cnnResults() {
      let results = new Map()
      let parsedResult =  Object.entries(this.medicalTest.cnnResult)

      for (let result of parsedResult) {
        results.set(result[0], cnnLang.get(result[1]))
      }

      return results
    }
  }
}
</script>

<style scoped>

</style>