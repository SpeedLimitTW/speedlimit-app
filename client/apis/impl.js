import {request, uri, base} from 'apis'
import                           'apis/mock'
import {path}               from 'apis/path'

export default {
    // getMembers
    getMembers: (callback, errCallback) => {
        request.get(uri(path.members, base)).then(callback, errCallback)
    }
}