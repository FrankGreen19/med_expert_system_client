import axios from 'axios'
import router from '../../router'

export default {
    state: {
        user: null,
        isAuth: false,
        loginLoading: false,
        loginDialogVisible: false,
        error: '',
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

        setError(state, payload) {
            state.error = payload
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
        },

        getError(state) {
            return state.error
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
                }).finally(() => {
                    context.commit('setLoginLoading', false)
                })
            }).catch((error) => {
                let errorMessage = ''
                if (error.response.status === 401) {
                    errorMessage = 'Неверный логин или пароль'
                } else {
                    errorMessage = 'Непредвиденная ошибка. Пожалуйста, попробуйте позже'
                }

                context.commit('setError', errorMessage)
                context.commit('setLoginLoading', false)
            })
        },

        registration(context, {form}) {
            context.commit('setLoginLoading', true)

            axios.post(process.env.VUE_APP_API_URL + '/registration', {...form})
                .then((response) => {
                    context.commit('setUser', response.data)
                    context.commit('setIsAuth', true)
                    context.commit('setLoginLoading', false)

                    router.push('/')
                })
        }
    }, // функции, работающие с апи
}