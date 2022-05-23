import axios from 'axios'

export default {
    state: {
        symptoms: new Map(),
    }, //данные
    mutations: {
        setSymptoms(state, payload) {
            for (let symptom of payload) {
                state.symptoms.set(symptom.alias, symptom.title)
            }
        }
    }, // функции, меняющие состояние
    getters: {
        getSymptoms(state) {
            return state.symptoms
        }

    }, // аналоги computed свойств
    actions: {
        fetchSymptoms(context) {
            axios.get(process.env.VUE_APP_API_URL + '/symptom').then((response) => {
                context.commit('setSymptoms', response.data)
            })
        }
    }, // функции, работающие с апи
}