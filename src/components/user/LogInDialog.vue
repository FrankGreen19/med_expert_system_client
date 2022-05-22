<template>
  <v-dialog
      transition="dialog-top-transition"
      v-model="isLoginDialogVisible"
      max-width="600"
      @click:outside="hideDialog"
  >
    <template>
      <v-card rounded>
        <v-toolbar
            dark
            src="../../assets/vbanner.jpg"
        >
          Аутентификация
          <v-spacer/>
          <v-btn text @click="hideDialog">
            <v-icon dark center>mdi-minus-circle</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container>
          <v-row>
            <v-col cols="8" class="mx-auto">
              <v-card v-if="getError" class="text-center" color="orange">
                <v-card-text style="color: white">
                  {{ getError }}
                </v-card-text>
              </v-card>
              <v-form class="text-center">
                <v-text-field
                    solo
                    label="Адрес электронной почты"
                    class="mt-3"
                    :rules="[]"
                    v-model="email"/>
                <v-text-field
                    solo
                    label="Пароль"
                    hint="Минимум 8 символов"
                    counter
                    :type="'password'"
                    v-model="password"/>

                <v-btn @click="login"
                       dark
                       rounded
                       color="orange"
                       class="my-2">
                  <span v-if="!isLoginLoading">Войти</span>
                  <v-progress-circular
                      v-else
                      indeterminate
                      color="white"
                      class="ma-2"
                  ></v-progress-circular>
                </v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "LogIn",

  data: () => ({
    email: '',
    password: '',
  }),

  methods: {
    hideDialog() {
      this.hideLoginDialog
    },
    login() {
      this.$store.dispatch('login', {
        'username': this.email,
        'password': this.password,
      }).catch((error) => {
        console.log(error)
      })
    }
  },

  computed: {
    ...mapGetters(["isLoginLoading", "isLoginDialogVisible", "getError"]),
    ...mapMutations(["hideLoginDialog"])
  }
}
</script>

<style scoped>

</style>