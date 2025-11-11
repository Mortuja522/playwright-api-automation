import { test, expect, request } from '@playwright/test';
import { BASE_URL } from '../../utils/apiHelper.js';
import data from '../../data/testData.json' assert { type: 'json' };
import { logResponse } from '../../utils/reportHelper.js';

test.describe('POST API Tests', () => {
  test('Create a new object', async () => {
    const context = await request.newContext();
    const response = await context.post(BASE_URL, { data: data.newObject });

    expect(response.status()).toBe(200);

    const body = await response.json();
    logResponse(response, body);

    expect(body.name).toBe(data.newObject.name);
  });
});
