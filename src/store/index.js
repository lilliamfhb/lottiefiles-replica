import Vuex from 'vuex'

export default new Vuex.Store({
    state: {
        title: 'vuexxxx'
    },
    mutations: {
        modificar(state, object) {
            state.title = object
        }
    },
    actions: {
        // context.commit = {commit}
        modificarAction({commit}, payload) {
            commit('modificar', payload)
        }
    }
})
