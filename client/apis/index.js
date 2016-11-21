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
    
    callback(result)
}

/**
 * Export
 */

module.exports = {isMocking, apis, mockingFn}