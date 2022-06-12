import axios from 'axios'

export default {
    state: {
        medTestTypes: [],
        testTypesLoading: false,
        testTypeDialogVisible: false,
    }, //данные
    mutations: {
        setMedTestTypes(state, payload) {
            state.medTestTypes = payload
        },

        showTestTypeDialog(state) {
            state.testTypeDialogVisible = true
        },

        hideTestTypeDialog(state) {
            state.testTypeDialogVisible = false
        },

        setTestTypesLoading(state) {
            state.testTypesLoading = state.testTypesLoading !== true;
        }

    }, // функции, меняющие состояние
    getters: {
        getAllMedTestTypes(state) {
            return state.medTestTypes
        },

        isTestTypeDialogVisible(state) {
            return state.testTypeDialogVisible
        },

        getTestTypesLoading(state) {
            return state.testTypesLoading
        }
    }, // аналоги computed свойств
    actions: {
        fetchMedicalTestTypes(context) {
            context.commit('setTestTypesLoading')

            return axios.get(process.env.VUE_APP_API_URL + "/medical-test-type")
                .then((response) => {
                    context.commit("setMedTestTypes", response.data)

                    context.commit('setTestTypesLoading')
                })
        }
    }, // функции, работающие с апи
}