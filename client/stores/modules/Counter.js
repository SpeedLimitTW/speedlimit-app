import namespace from 'utils/namespace'

/**
 * Namespace
 */

const ns = namespace('counter',
{
    mutations:
    [
        'INCREMENT',
        'SET'
    ],
    actions:
    [
        'increment',
        'set',
    ],
    getters:
    [
        'total'
    ]
})

var {mutations, actions, getters} = ns

/**
 * Export
 */

export default
{
    /** Namespace */
    ns,

    /**
     * State
     */

    state:
    {
        total: 0
    },

    /**
     * Mutations
     */

    mutations:
    {
        [mutations.INCREMENT]: state            => state.total++,
        [mutations.SET_TO]   : (state, payload) => state.total = payload.total,
    },

    /**
     * Actions
     */

    actions:
    {
        /**
         * Set the total value directly.
         *
         * @param {integer} number - The new total value.
         */

        [actions.set]({commit}, number)
        {
            commit(mutations.SET, {number})
        },

        /**
         * Increase the total value
         *
         * @param {string} direction - The direction to the next step (`next` | `previous`).
         */

        [actions.increment]({commit})
        {
            commit(mutations.INCREMENT)
        }
    },

    /**
     * Getters
     */

    getters:
    {
        [getters.total]: state => state.total
    }
}