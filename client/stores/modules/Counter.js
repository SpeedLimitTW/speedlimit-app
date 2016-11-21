import ns from 'utils/namespace'

/**
 * Namespace
 */

const namespace = ns('counter',
{
    mutations:
    [
        'INCREMENT',
        'SET_TO'
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

var {mutations: m, actions: a, getters: g} = namespace

/**
 * State
 */

const state =
{
    total: 0
}

/**
 * Mutations
 */

const mutations =
{
    [m.INCREMENT]: state            => state.total++,
    [m.SET_TO]   : (state, payload) => state.total = payload.number,
}

/**
 * Actions
 */

const actions =
{
    /**
     * Set the total value directly.
     *
     * @param {integer} number - The new total value.
     */

    [a.set]({commit}, number)
    {
        commit(m.SET_TO, {number})
    },

    /**
     * Increase the total value
     *
     * @param {string} direction - The direction to the next step (`next` | `previous`).
     */

    [a.increment]({commit})
    {
        commit(m.INCREMENT)
    }
}

/**
 * Getters
 */

const getters =
{
    [g.total]: state => state.total
}

/**
 * Export
 */

module.exports = {namespace, state, mutations, actions, getters}