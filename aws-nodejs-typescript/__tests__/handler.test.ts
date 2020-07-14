import {expect, test} from '@jest/globals'

const handler = require('../src/handler')

test('sends 200 response', async () => {
    const response = await handler.hello({}, {})
    expect(response.statusCode).toBe(200)
})