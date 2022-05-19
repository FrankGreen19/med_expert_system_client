import Vue from 'vue'
import Vuex from 'vuex'
import medicalTestTypeModule from "@/store/modules/medicalTestTypeModule";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        medicalTestTypeModule
    }
})