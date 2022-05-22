import axios from 'axios'

export default {
    state: {
        medTests: [],
    }, //данные
    mutations: {
        setMedTests(state, payload) {
            state.medTests = payload
        }
    }, // функции, меняющие состояние
    getters: {
        getMedTests(state) {
            return state.medTests
        }

    }, // аналоги computed свойств
    actions: {
        fetchMedTests(context) {
            axios.get(process.env.VUE_APP_API_URL + '/medical-test/user', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }).then((response) => {
                context.commit('setMedTests', response.data)
            })
        }
    }, // функции, работающие с апи
}