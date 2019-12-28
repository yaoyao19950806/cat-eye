import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
  mutations: {
    getList(state,arr){
      state.list = arr,
      console.log(arr)
    }
  },
  actions: {
    getList ({commit}){
      axios.get('/api/list').then(res =>{
       commit('getList', res.data.list.movieList)
      })
    }
  },
  modules: {
  }
})
