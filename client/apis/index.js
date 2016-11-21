/** Mocking toggle */
const isMocking = true

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
    result =
    {
        success : true,
        code    : "0000",
        message : "請求成功",
        data
    }

    /** Simulate random failure */
    if(Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        callback(result)
    else
        errCallback(result)
}

/**
 * Export
 */

module.exports = {isMocking, apis, mockingFn}