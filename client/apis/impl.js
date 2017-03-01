import {request, uri, base} from 'apis'
import                           'apis/mock'
import {path}               from 'apis/path'

export default {
    /**
     * Counter
     */

    // getCount
    getCount: (callback, errCallback) => {
        request.get(uri(path.count, base)).then(callback, errCallback)
    }
}