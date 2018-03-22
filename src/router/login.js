import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login.vue'
import companyLogin from '@/components/login/companyLogin.vue'
import reg from '@/components/login/reg.vue'
import companyReg from '@/components/login/companyReg.vue'
import success from '@/components/login/success.vue'
import regSuccess from '@/components/login/regSuccess.vue'
import companyLoginInfo from '@/components/login/companyLoginInfo.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/companyLogin',
      name: 'companyLogin',
      component: companyLogin
    },
    {
      path: '/companyReg',
      name: 'companyReg',
      component: companyReg
    },
    {
      path: '/success',
      name: 'success',
      component: success
    },
    {
      path: '/regSuccess',
      name: 'regSuccess',
      component: regSuccess
    },
    {
      path: '/companyLoginInfo',
      name: 'companyLoginInfo',
      component: companyLoginInfo
    }

  ]
})
