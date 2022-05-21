import Vue from 'vue'
import Vuex from 'vuex'
import medicalTestTypeModule from "@/store/modules/medicalTestTypeModule"
import userModule from "@/store/modules/userModule";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        medicalTestTypeModule,
        userModule,
    }
})