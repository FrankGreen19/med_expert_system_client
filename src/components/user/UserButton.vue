<template>
  <div>
    <div v-if="!isAuth">
      <v-btn @click="openLoginDialog" rounded color="primary">
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
            @click="() => {}"
        >
          <v-list-item-title>Тесты</v-list-item-title>
        </v-list-item>
        <v-list-item
            @click="() => {}"
        >
          <v-list-item-title>Выход</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <LogInDialog ref="logInDialog"/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import LogInDialog from "@/components/user/LogInDialog";

export default {
  name: "UserButton",

  data: () => ({

  }),

  components: {
    LogInDialog,
  },

  methods: {
    openLoginDialog()
    {
      this.$refs.logInDialog.showDialog()
    }
  },

  computed: {
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