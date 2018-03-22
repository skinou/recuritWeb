import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);


const state = {
  company_login:{},
  company_info:{},
  account:''
};

const mutations={
  setValueLogin(state,obj){
    state.company_login = obj;
    console.log(state.company_login)
  },
  setValueInfo(state,obj){
    state.company_info = obj;
    console.log(state.company_info)
  },
  setAccount(state,value){
    state.account = value;
    console.log(state.account)
  }
};


export default new Vuex.Store({
  state,
  mutations
});
