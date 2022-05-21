import axios from 'axios'

export default {
    state: {
        user: null,
        isAuth: false,
        loginLoading: false,
        loginDialogVisible: false,
    }, //данные
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },

        setIsAuth(state, payload) {
            state.isAuth = payload
        },

        setLoginLoading(state, payload) {
            state.loginLoading = payload
        },

        showLoginDialog(state) {
            state.loginDialogVisible = true
        },

        hideLoginDialog(state) {
            state.loginDialogVisible = false
        },
    }, // функции, меняющие состояние
    getters: {
        user(state) {
            return state.user
        },

        isAuth(state) {
            return state.isAuth
        },

        isLoginLoading(state) {
            return state.loginLoading
        },

        isLoginDialogVisible(state) {
            return state.loginDialogVisible
        }
    }, // аналоги computed свойств
    actions: {
        login(context, {username, password}) {
            context.commit('setLoginLoading', true)

            axios.post(process.env.VUE_APP_API_URL + '/login', {
                'username': username,
                'password': password,
            }).then((response) => {
                context.commit('setIsAuth', true)

                localStorage.setItem('token', response.data.token)

                axios.post(process.env.VUE_APP_API_URL + '/user/email', {
                    'email': username
                }).then((response) => {
                    context.commit('setUser', response.data)
                    context.commit('hideLoginDialog')
                })
            }).catch((e) => {
                console.log(e)
            }).finally(() => {
                context.commit('setLoginLoading', false)
            })
        }
    }, // функции, работающие с апи
}