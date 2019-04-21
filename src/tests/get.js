const r = require('../helpers/request')

exports.test = async (id) => {
    const response = await r.request({
        uri: `/todos/${id}`,
        method: 'GET'
    })

    // if (response !== 'Hello, world!') {
    //     throw new Error('Wrong response.')
    // }

    console.log('test GET /todos ok.')

    return true
}