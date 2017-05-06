import api from "apis/impl"

/**
 * State
 */

const state =
{
    members : null,
    lookings: null,
    requests: null
}

/**
 * Mutations
 */

const mutations =
{
    SET_TO(state, data) {
        if(data === undefined)
            return

        switch(data.type) {
            case 'members':
                state.members = data.payload
                break;
            case 'lookings':
                state.lookings = data.payload
                break;
            case 'requests':
                state.requests = data.payload
                break;
        }
    }
}

/**
 * Actions
 */

const actions =
{
    fetchMembers({commit}, {$http}) {
        api.getMembers((resp) => {
            commit('SET_TO', {type: 'members', payload: resp.body})
        })
    },
    fetchLookings({commit}, {$http}) {
        api.getLookings((resp) => {
            commit('SET_TO', {type: 'lookings', payload: resp.body})
        })
    },
    fetchRequests({commit}, {$http}) {
        api.getRequests((resp) => {
            commit('SET_TO', {type: 'requests', payload: resp.body})
        })
    }
}

/**
 * Getters
 */

const getters = {
    members : state => state.members,
    lookings: state => state.lookings,
    requests: state => state.requests
}

/**
 * Export
 */

export default {namespaced: true, state, mutations, actions, getters}