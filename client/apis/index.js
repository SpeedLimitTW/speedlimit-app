import request from 'superagent'
var mock    = require('superagent-mocker')(request)
var sprintf = require('sprintf-js').sprintf

// Base path.
var base = 'http://localhost:8080'

// Simulate the network latency randomly.
mock.timeout = () => {
    return Math.floor(1000 + (Math.random() * (2000 - 1000 + 1)))
}

// uri is the alias to the `sprintf`.
var uri = (path, ...args) => {
    return sprintf(path, ...args)
}

export { request, uri, sprintf, mock, base }