import axios from 'axios'

export default {
    state: {
        medTestTypes: [],
    }, //данные
    mutations: {
        setMedTestTypes(state, payload)
        {
            state.medTestTypes = payload
        },
    }, // функции, меняющие состояние
    getters: {
        getAllMedTestTypes(state)
        {
            return state.medTestTypes
        }
    }, // аналоги computed свойств
    actions: {
        fetchMedicalTestTypes(context)
        {
            axios.get(process.env.VUE_APP_API_URL + "/medical-test-type")
                .then(response => context.commit("setMedTestTypes", response.data))
        }
    }, // функции, работающие с апи
}