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
                    Результат: {{ medicalTest.asyncJobStatus }}
                  </v-card-title>
                  <v-card-text>
                    <div v-if="medicalTest.fuzzyResults.size > 0">
                      Вероятности наличия заболеваний:
                      <v-list-item two-line v-for="fuzzyResult of medicalTest.fuzzyResults"
                                   v-bind:key="fuzzyResult.illnessTitle"
                      >
                        <v-list-item-title>{{ fuzzyResult.illnessTitle }}</v-list-item-title>
                        <v-list-item-subtitle>
                          <v-icon color="primary">{{ fuzzyResult.probability }}</v-icon>
                        </v-list-item-subtitle>
                      </v-list-item>
                    </div>
                    <div v-if="medicalTest.cnnResults.size > 0">
                      Анализ изображения:
                      <v-list-item two-line v-for="cnnResult of medicalTest.cnnResults"
                                   v-bind:key="cnnResult.illnessTitle"
                      >
                        <v-list-item-title>{{ cnnResult.illnessTitle }}</v-list-item-title>
                        <v-list-item-subtitle>
                          <v-icon color="primary">{{ cnnResult.illnessSubclassTitle }}</v-icon>
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
                    <v-list-item two-line v-for="medicalTestSymptom of medicalTest.symptoms"
                                 v-bind:key="medicalTestSymptom.id"
                    >
                      <v-list-item-title>{{ medicalTestSymptom.symptom.title }}</v-list-item-title>
                      <v-list-item-subtitle v-if="medicalTestSymptom.value === 'true'">
                        <v-icon color="orange">mdi-checkbox-marked-circle</v-icon>
                      </v-list-item-subtitle>
                      <v-list-item-subtitle v-else-if="medicalTestSymptom.value === 'false'">
                        <v-icon color="orange">mdi-minus-circle</v-icon>
                      </v-list-item-subtitle>
                      <v-list-item-subtitle v-else>
                        <v-icon color="primary">{{ medicalTestSymptom.value }}</v-icon>
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
    </v-dialog>
</template>

<script>

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
  }
}
</script>

<style scoped>

</style>