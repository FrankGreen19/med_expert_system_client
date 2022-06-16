<template>
  <div>
    <div v-if="!isAuth">
      <v-btn @click="showDialog" rounded color="primary">
        <span style="color: white">Войти</span>
      </v-btn>
    </div>
    <v-menu
        v-else
        left
        bottom
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs"
               v-on="on"
               rounded
               color="primary"
        >
          <span style="color: white">{{ username }}</span>
          <v-icon>mdi-menu-down</v-icon>
        </v-btn>
      </template>

      <v-list shaped class="mt-10">
        <v-list-item
            @click="() => {}"
            color="primary"
        >
          <v-list-item-title>Профиль</v-list-item-title>
        </v-list-item>

        <v-list-item
            @click="() => {$router.push('/medical-tests')}"
        >
          <v-list-item-title>Тесты</v-list-item-title>
        </v-list-item>

        <v-list-item
            @click="$store.dispatch('logout')"
        >
          <v-list-item-title>Выход</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <LogInDialog />
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import LogInDialog from "@/components/user/LogInDialog";

export default {
  name: "UserButton",

  data: () => ({

  }),

  components: {
    LogInDialog,
  },

  methods: {
    showDialog() {
      this.showLoginDialog
    }
  },

  computed: {
    ...mapMutations(["showLoginDialog"]),
    ...mapGetters(["user", "isAuth"]),

    username: function ()
    {
      if (this.user) {
        return this.user.fName + ' ' + this.user.lName
      } else {
        return '...'
      }
    }
  },
}
</script>

<style scoped>

</style>