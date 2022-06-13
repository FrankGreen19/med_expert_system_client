import axios from 'axios'

export default {
    state: {
        medTests: [],
        medTestsLoading: false,
    }, //данные
    mutations: {
        setMedTests(state, payload) {
            state.medTests = payload
        },

        setMedTestsLoading(state) {
            state.medTestsLoading = state.medTestsLoading !== true;
        }
    }, // функции, меняющие состояние
    getters: {
        getMedTests(state) {
            return state.medTests
        },

        isMedTestsLoading(state) {
            return state.medTestsLoading
        }
    }, // аналоги computed свойств
    actions: {
        fetchMedTests(context) {
            context.commit('setMedTestsLoading')

            return axios.get(process.env.VUE_APP_API_URL + '/medical-test/user', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }).then((response) => {
                context.commit('setMedTests', response.data)
                context.commit('setMedTestsLoading')
            })
        }
    }, // функции, работающие с апи
}