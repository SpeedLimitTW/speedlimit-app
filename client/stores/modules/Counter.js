import api from "apis/impl"

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
    // INCREMENT returns the increased counter number.
    INCREMENT(state) {
        state.total++
    },
    // SET_TO sets the total count as the specified number.
    SET_TO(state, payload) {
        if(payload !== undefined)
            state.total = payload.count
    }
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
        api.getCount((resp) => {
            commit('SET_TO', resp.body)
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

export default {namespaced: true, state, mutations, actions, getters}