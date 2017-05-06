import {request, uri, base} from 'apis'
import                           'apis/mock'
import {path}               from 'apis/path'

export default {
    getMembers: (callback, errCallback) => {
        request.get(uri(path.members, base)).then(callback, errCallback)
    },
    getLookings: (callback, errCallback) => {
        request.get(uri(path.lookings, base)).then(callback, errCallback)
    },
    getRequests: (callback, errCallback) => {
        request.get(uri(path.requests, base)).then(callback, errCallback)
    }
}