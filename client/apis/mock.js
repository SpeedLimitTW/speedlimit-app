import {uri, base, mock} from 'apis'
import {path}            from 'apis/path'
// Modules
import {_member}          from 'apis/mocks/Member'

/**
 * Counter
 */

// getMembers
mock.get(uri(path.members, base), function(req){
    return {
        body: _member.getMembers
    }
})