import Vue from 'vue'
import Vuex from 'vuex'
import medicalTestTypeModule from "@/store/modules/medicalTestTypeModule"
import userModule from "@/store/modules/userModule";
import medicalTestModule from "@/store/modules/medicalTestModule";
import symptomModule from "@/store/modules/symptomModule";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        medicalTestTypeModule,
        userModule,
        medicalTestModule,
        symptomModule,
    }
})