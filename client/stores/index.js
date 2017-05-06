import Vue                                  from 'vue'
import Vuex                                 from 'vuex'
import {state, mutations, actions, getters} from './shared'

import main from 'modules/Main'

Vue.use(Vuex)

const store = new Vuex.Store
({
    /** Modules */
    modules:
    {
        main
    },

    /** Shared Store */
    state,
    mutations,
    actions,

    /** Configures */
    strict: process.env.NODE_ENV !== 'production'
})

export default store