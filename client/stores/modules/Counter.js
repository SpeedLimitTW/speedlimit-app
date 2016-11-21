import ns  from 'utils/namespace'
import api from "apis/modules/Counter"

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
        'fetchCount'
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
    [m.INCREMENT]       : state            => state.total++,
    [m.SET_TO]          : (state, payload) => state.total = payload.count
}

/**
 * Actions
 */

const actions =
{
    /**
     * Set the total value directly.
     *
     * @param {integer} count - The new total value.
     */

    [a.set]({commit}, count)
    {
        commit(m.SET_TO, {count})
    },

    /**
     * Increase the total value
     */

    [a.increment]({commit})
    {
        commit(m.INCREMENT)
    },

    /**
     * Fetch the count from the remote server
     */

    [a.fetchCount]({commit}, {$http})
    {
        api.getCount({$http}, (r) =>
        {
            commit(m.SET_TO, r.data)
        })
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