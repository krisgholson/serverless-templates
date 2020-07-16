import { expect, test } from '@jest/globals';
import { hello } from '../src/handler';

test('sends 200 response', async () => {
    const response = await hello({}, {}, null);
    expect(response['statusCode']).toBe(200);
});
