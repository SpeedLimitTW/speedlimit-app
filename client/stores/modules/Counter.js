import api from "apis/modules/Counter"

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
    INCREMENT: state            => state.total++,
    SET_TO   : (state, payload) => state.total = payload.count
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

    set({commit}, count)
    {
        commit('SET_TO', {count})
    },

    /**
     * Increase the total value
     */

    increment({commit})
    {
        commit('INCREMENT')
    },

    /**
     * Fetch the count from the remote server
     */

    fetchCount({commit}, {$http})
    {
        api.getCount({$http}, (r) =>
        {
            commit('SET_TO', r.data)
        })
    }
}

/**
 * Getters
 */

const getters =
{
    total: state => state.total
}

/**
 * Export
 */

module.exports = {namespaced: true, state, mutations, actions, getters}