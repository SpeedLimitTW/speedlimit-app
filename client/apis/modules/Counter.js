import {isMocking, apis, mockingFn} from 'apis'

/**
 * Mocking resources
 */

const _count = {count: 100}

/**
 * Actions
 */

export default
{
    /**
     * Get the count from the remote server.
     */

    getCount({$http}, callback, errCallback)
    {
        if(isMocking)
            return mockingFn(_count, callback, errCallback)

        $http.get(apis.getCount).then(callback, errCallback)
    }
}