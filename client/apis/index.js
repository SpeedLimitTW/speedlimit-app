/** Mocking toggle */
const isMocking       = true
/** Simulate random failure */
const simulateFailure = false

/**
 * API URLs
 */

const apis =
{
    getCount: 'https://api.example.com/1.0/count'
}

/**
 * Mocking Function
 */

function mockingFn(data, callback, errCallback)
{
    /** Simulate random failure */
    if(Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1 || !simulateFailure)
        callback({
            //url       :
            body      : data,
            //headers   :
            ok        : true,
            status    : 200,
            statusText: "Success"
        })
    else
        errCallback({
            //url       :
            body      : data,
            //headers   :
            ok        : false,
            status    : 400,
            statusText: "Bad Request"
        })
}

/**
 * Export
 */

module.exports = {isMocking, apis, mockingFn}
