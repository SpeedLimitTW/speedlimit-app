import {uri, base, mock} from 'apis'
import {path}            from 'apis/path'
// Modules
import {_count}          from 'apis/mocks/Counter'
console.log({
        body: _count.getCount
    })
/**
 * Counter
 */

// getCount
mock.get(uri(path.count, base), function(req){
    return {
        body: _count.getCount
    }
})