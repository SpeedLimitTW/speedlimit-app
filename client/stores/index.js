import Vue                                  from 'vue'
import {state, mutations, actions, getters} from './shared'
import counter                              from 'modules/Counter'

const store = new Vuex.Store
({
    /** Modules */
    modules:
    {
        counter
    },

    /** Shared Store */
    state,
    mutations,
    actions,

    /** Configures */
    strict: process.env.NODE_ENV !== 'production'
})

export default store