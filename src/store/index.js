import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ShowModal: false,
    ShowModalAb1: false,
    ShowModalAb2: false,
    ShowModalAb3: false,

    ShowModalRub: false,
    chosenRub: 0,
    chosenRubOptLabel: '',
    additionsList: [],
    closelyList: [],
    remontList: [],
    chosenRubOpt: false,
    token: '',
    name: '',
    RubList : [],
    DistrictList : [],
    allowedRegister: false,
    postAllData: [],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
