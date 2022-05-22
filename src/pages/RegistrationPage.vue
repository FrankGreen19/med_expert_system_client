<template>
  <v-container>
    <v-row>
      <v-col lg="6" class="d-flex flex-column mx-auto">
        <v-card>
          <v-card-title class="justify-center" style="background-color: #1976d2; color: white">
            Регистрация
          </v-card-title>
          <v-card v-if="errors.length" class="text-center mt-2" color="orange">
            <v-card-text v-for="error in errors" :key="error" style="color: white">
              {{ error }}
            </v-card-text>
          </v-card>
          <v-card-text class="text-center mt-4">
            <v-form>
              <v-text-field
                  label="Адрес электронной почты"
                  filled
                  dense
                  v-model="form.email"
              />
              <v-text-field
                  label="Пароль"
                  filled
                  dense
                  hint="Минимум 8 символов"
                  counter
                  :type="'password'"
                  v-model="form.password"
              />
              <v-text-field
                  label="Повтор пароля"
                  filled
                  dense
                  counter
                  :type="'password'"
                  v-model="form.repeatPassword"
              />
              <v-text-field
                  label="Фамилия"
                  filled
                  dense
                  v-model="form.lName"
              />
              <v-text-field
                  label="Имя"
                  filled
                  dense
                  v-model="form.fName"
              />
              <v-text-field
                  label="Отчество(необязательно)"
                  filled
                  dense
                  v-model="form.pName"
              />
              <v-text-field
                  label="Дата рождения"
                  filled
                  dense
                  :type="'date'"
                  re
                  v-model="form.birthDate"
              />
              <v-btn rounded dark color="orange" @click="register">
                <span v-if="!isLoginLoading">Войти</span>
                <v-progress-circular
                    v-else
                    indeterminate
                    color="white"
                    class="ma-2"
                ></v-progress-circular>
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import {mapGetters} from "vuex";

export default {

  data: () => ({
    form: {
      email: null,
      password: null,
      repeatPassword: null,
      lName: null,
      fName: null,
      pName: null,
      birthDate: null
    },
    errors: [],
  }),

  methods: {
    register() {
      if (this.validate()) {
        this.$store.dispatch('registration', {'form': this.form})
        console.log('reg')
      }
    },
    validate() {
      let form = this.form
      this.errors = []

      if (!form.email || !form.password || !form.repeatPassword || !form.fName || !form.lName || !form.birthDate) {
        this.errors.push('Не заполнены обязательные поля')
      }

      if (form.password !== form.repeatPassword) {
        this.errors.push('Пароли не совпадают')
      }

      return !this.errors.length;
    }
  },

  computed: {
    ...mapGetters(['isLoginLoading'])
  }

}
</script>

<style scoped>

</style>