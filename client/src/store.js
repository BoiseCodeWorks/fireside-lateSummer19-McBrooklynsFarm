import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)

let baseUrl = window.location.host.includes('localhost') ? '//localhost:3000/api' : '/api'

let _api = Axios.create({
  baseURL: baseUrl
})

export default new Vuex.Store({
  state: {
    farms: [],
    activeFarm: {},
    livestock: []
  },
  mutations: {
    setFarms(state, data) {
      state.farms = data
    },
    setActiveFarm(state, data) {
      state.activeFarm = data
    },
    setLivestock(state, data) {
      state.livestock = data
    }
  },
  actions: {
    //#region FARMS
    getFarms({ commit }) {
      _api.get('farms')
        .then(res => {
          console.log(res)
          commit('setFarms', res.data)
        })
    },
    getFarmById({ commit, dispatch }, payload) {
      _api.get('farms/' + payload)
        .then(res => {
          commit('setActiveFarm', res.data)
          router.push({ name: 'farmLand', params: { farmId: res.data._id } })

        })
    },
    createFarm({ commit, dispatch }, payload) {
      _api.post('farms', payload)
        .then(res => {
          console.log(res.data)
          console.log("success")
          dispatch('getFarms')
        }).catch(err => console.error(err))
    },
    deleteFarm({ commit }, id) {
      _api.delete('farms/' + id)
    },
    //#endregion
    addLivestock({ commit, dispatch }, payload) {
      _api.post('animals', payload)
        .then(res => {
          dispatch('getLivestock', res.data.farmId)
        })
        .catch(e => console.error(e))
    },
    getLivestock({ commit }, payload) {
      _api.get('animals/' + payload)
        .then(res => {
          commit('setLivestock', res.data)
        })
        .catch(e => console.error(e))
    }
  }
})
