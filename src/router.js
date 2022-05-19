import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "@/pages/MainPage";
import RegistrationPage from "@/pages/RegistrationPage";
import LoginPage from "@/pages/LoginPage";
import MedicalTestsPage from "@/pages/MedicalTestsPage";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/registration',
        component: RegistrationPage
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/medical-tests',
        component: MedicalTestsPage
    },
]

export default new VueRouter({
    mode: 'history', // маршруты работают чз слэши
    routes: routes
})