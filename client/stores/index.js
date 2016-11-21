import Vue                                  from 'vue'
import Vuex                                 from 'vuex'
import {state, mutations, actions, getters} from './shared'

/** Imported Modules */
import counter from 'modules/Counter'

Vue.use(Vuex)

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