import {uri, base, mock} from 'apis'
import {path}            from 'apis/path'
import {_main}           from 'apis/mocks/Main'

mock.post(uri(path.user, base), function(req){
    return {
        body: _main.postUser
    }
})
mock.get(uri(path.members, base), function(req){
    return {
        body: _main.getMembers
    }
})
mock.get(uri(path.requests, base), function(req){
    return {
        body: _main.getRequests
    }
})
mock.get(uri(path.lookings, base), function(req){
    return {
        body: _main.getLookings
    }
})