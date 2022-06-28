const handler = (request, h) => {
    return h.response('success')
        .type('text/plain')
        .header('X-Custom', 'some-value')
}

module.exports = handler;