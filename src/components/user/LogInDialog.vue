<template>
  <v-dialog transition="dialog-top-transition" v-model="loginDialogVisible" max-width="600">
    <template v-slot:default="dialog">
      <v-card rounded>
        <v-toolbar
            dark
            src="../../assets/vbanner.jpg"
        >
          Аутентификация
          <v-spacer/>
          <v-btn text @click="dialog.value = false">
            <v-icon dark center>mdi-minus-circle</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container>
          <v-row>
            <v-col cols="8" class="mx-auto">
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
                      color="primary"
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
import {mapGetters} from "vuex";

export default {
  name: "LogIn",

  data: () => ({
    email: '',
    password: '',
    loginDialogVisible: false,
    loading: false,
  }),

  methods: {
    showDialog() {
      this.loginDialogVisible = true
    },
    login() {
      this.loading = true
      console.log(this.loading)

      this.$store.dispatch('login', {
        'username': this.email,
        'password': this.password,
      }).catch(() => {

      }).finally(() => {

      })
    }
  },

  computed: {
    ...mapGetters(["isLoginLoading"]),
  }
}
</script>

<style scoped>

</style>