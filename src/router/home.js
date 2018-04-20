import Vue from 'vue'
import Router from 'vue-router'
import homeContent from '@/components/Home/home-content'

import job from '@/components/job/job'
import positionJob from '@/components/job/positionJob'
import jobRelease from '@/components/job/jobRelease'

import searchPage from '@/components/search/searchPage'
import companyPage from '@/components/company/companyPage'
import userPage from '@/components/user/userPage'

import userInfo from '@/components/user/userInfo'
import userWork from '@/components/user/userWork'
import userEducation from '@/components/user/userEducation'
import userInternship from '@/components/user/userInternship'
import userProject from '@/components/user/userProject'
import userDescription from '@/components/user/userDescription'
import userSkill from '@/components/user/userSkill'

import company from '@/components/company/company'
import companyHome from '@/components/company/companyHome'
import companyJob from '@/components/company/companyJob'

import deliveryPage from '@/components/delivery/deliveryPage'
import success from '@/components/delivery/success'
import checked from '@/components/delivery/checked'
import communication from '@/components/delivery/communication'
import pass from '@/components/delivery/pass'
import fail from '@/components/delivery/fail'

import collectPage from '@/components/collect/collectPage'

import setUpPage from '@/components/userSetUp/SetUpPage'
import setUpPhone from '@/components/userSetUp/SetUpPhone'
import setUpPsw from '@/components/userSetUp/SetUpPsw'

import companyInfoPage from '@/components/companyInfo/companyInfoPage'
import companyInfo from '@/components/companyInfo/companyInfo'
import companyProduct from '@/components/companyInfo/companyProduct'
import companyIntro from '@/components/companyInfo/companyIntro'
import companyManager from '@/components/companyInfo/companyManager'
import companyAccount from '@/components/companyInfo/companyAccount'
import companyPosition from '@/components/companyInfo/companyPosition'
import companyResume from '@/components/companyInfo/companyResume'

import resumeList from '@/components/resume/resumeList'
import resume from '@/components/resume/resume'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/companyInfoPage',
      name: 'companyInfoPage',
      component: companyInfoPage,
      redirect: 'companyInfo',
      children: [
        {
          path: '/companyInfo',
          name: 'companyInfo',
          component: companyInfo,
        },
        {
          path: '/companyProduct',
          name: 'companyProduct',
          component: companyProduct,
        },
        {
          path: '/companyIntro',
          name: 'companyIntro',
          component: companyIntro,
        },
        {
          path: '/companyManager',
          name: 'companyManager',
          component: companyManager,
        },
        {
          path: '/companyAccount',
          name: 'companyAccount',
          component: companyAccount,
        },
        {
          path: '/companyPosition',
          name: 'companyPosition',
          component: companyPosition,
        },
        {
          path: '/companyResume',
          name: 'companyResume',
          component: companyResume,
        },
        {
          path: '/positionJob/:jkey',
          name: 'positionJob',
          component: positionJob
        },
        {
          path: '/resumeList/:jkey',
          name: 'resumeList',
          component: resumeList
        },
        {
          path: '/resume/:rkey/:id',
          name: 'resume',
          component: resume
        },
        {
          path: '/jobRelease',
          name: 'jobRelease',
          component: jobRelease
        },

      ]
    },
    {
      path: '/setUpPage',
      name: 'setUpPage',
      component: setUpPage,
      redirect: 'setUpPhone',
      children: [
        {
          path: '/setUpPhone',
          name: 'setUpPhone',
          component: setUpPhone,
        },
        {
          path: '/setUpPsw',
          name: 'setUpPsw',
          component: setUpPsw,
        },
        ]
    },
    {
      path: '/',
      name: 'homeContent',
      component: homeContent
    },
    {
      path: '/job',
      name: 'job',
      component: job
    },
    {
      path: '/searchPage',
      name: 'searchPage',
      component: searchPage
    },
    {
      path: '/companyPage',
      name: 'companyPage',
      component: companyPage
    },
    {
      path: '/userPage',
      // name: 'userPage',
      component: userPage,
      redirect: 'userInfo',
      children:[
        {
          path: '/userInfo',
          // name: 'userInfo',
          component: userInfo,
        },
        {
          path: '/userWork',
          // name: 'userWork',
          component: userWork,
        },
        {
          path: '/userEducation',
          // name: 'userEducation',
          component: userEducation,
        },
        {
          path: '/userInternship',
          // name: 'userInternship',
          component: userInternship,
        },
        {
          path: '/userProject',
          // name: 'userProject',
          component: userProject,
        },
        {
          path: '/userDescription',
          // name: 'userDescription',
          component: userDescription,
        },
        {
          path: '/userSkill',
          // name: 'userSkill',
          component: userSkill,
        }
      ]
    },
    {
      path: '/company',
      name: 'company',
      component: company,
      redirect: 'companyHome',
      children: [
        {
          path: '/companyHome',
          name: 'companyHome',
          component: companyHome,
        },
        {
          path: '/companyJob',
          name: 'companyJob',
          component: companyJob,
        },
      ]
    },
    {
      path: '/deliveryPage',
      name: 'deliveryPage',
      component: deliveryPage,
      redirect: 'success',
      children: [
        {
          path: '/success',
          name: 'success',
          component: success,
        },
        {
          path: '/checked',
          name: 'checked',
          component: checked,
        },
        {
          path: '/communication',
          name: 'communication',
          component: communication,
        },
        {
          path: '/pass',
          name: 'pass',
          component: pass,
        },
        {
          path: '/fail',
          name: 'fail',
          component: fail,
        }
      ]
    },
    {
      path: '/collectPage',
      name: 'collectPage',
      component: collectPage,
    }
    ]
})
