import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

const Form = {
    namespaced: true,
    mutations: {},
    actions: {
        buttonAction({commit, state, rootState }) {
            console.log("ButtonAction")
            commit("setStepCount", null, {root: true})
        }
    }
}

const Head = {
    state: {
        stepCount: 0
    },
    mutations: {
        setStepCount (state) {
            console.log("rootsetStepCount")
            state.stepCount++
        }
    }
},

export default new Vuex.Store({
    modules: {
        Form,
        Head
    }
})