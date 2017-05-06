import api from "apis/impl"

/**
 * State
 */

const state =
{
    members: null
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
            state.members = payload
    }
}

/**
 * Actions
 */

const actions =
{

    set({commit}, body)
    {
        commit('SET_TO', {body})
    },



    increment({commit})
    {
        commit('INCREMENT')
    },

    /**
     * Fetch the count from the remote server
     */

    fetchMembers({commit}, {$http})
    {
        api.getMembers((resp) => {
            commit('SET_TO', resp.body)
        })
    }
}

/**
 * Getters
 */

const getters =
{
    members: state => state.members
}

/**
 * Export
 */

export default {namespaced: true, state, mutations, actions, getters}