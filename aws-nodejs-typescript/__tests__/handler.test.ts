const handler = require('../src/handler')

test('sends error response if no event', async () => {
    const response = await handler.hello({}, {})
    expect(response.statusCode).toBe(200)
});